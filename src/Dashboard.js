import React, { useState, useEffect } from 'react';
import { CovalentClient } from '@covalent-hq/client-sdk';
import { useTranslation } from 'react-i18next';

const chains = [
  'bitcoin', 'eth-mainnet', 'solana-mainnet', 'bsc-mainnet', 'xrp-ledger', 'cardano-mainnet', 'tron-mainnet', 'avalanche-mainnet',
  'the-open-network-mainnet', 'matic-mainnet', 'dogecoin', 'chainlink', 'polkadot', 'near-mainnet', 'uniswap', 'litecoin',
  'internet-computer', 'hedera-mainnet', 'aptos-mainnet', 'cosmos-hub-mainnet', 'stellar', 'arbitrum-mainnet', 'filecoin',
  'cronos-mainnet', 'injective-mainnet', 'optimism-mainnet', 'sui-mainnet', 'fantom-mainnet', 'mantle-mainnet', 'vechain',
  'theta-mainnet', 'sei-mainnet', 'algorand-mainnet', 'eos-mainnet', 'elrond-mainnet', 'tezos-mainnet', 'base-mainnet',
  'flow-mainnet', 'imx-mainnet', 'harmony-mainnet'
];

const calculateWeightedAverage = (prices, amounts) => {
  if (!prices.length || !amounts.length || prices.length !== amounts.length) return 0;
  const totalCost = prices.reduce((sum, p, i) => sum + p * amounts[i], 0);
  const totalAmount = amounts.reduce((sum, a) => sum + a, 0);
  return totalAmount > 0 ? totalCost / totalAmount : 0;
};

const Dashboard = ({ address, isPaid, trialActive }) => {
  const { t } = useTranslation();
  const [portfolio, setPortfolio] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoading(true);
      const client = new CovalentClient('test_juIfOsFvRYz64xZtsvEqk9er8CjxlmYJquUA9RuO');
      const data = {};
      for (const chain of chains.slice(0, isPaid ? chains.length : 10)) {
        try {
          const balances = await client.BalanceService.getTokenBalancesForWalletAddress(chain, address, { quoteCurrency: 'USD' });
          for (const item of balances.data.items) {
            const token = item.contract_ticker_symbol;
            if (!data[token]) data[token] = { amounts: [], prices: [], chains: [] };
            const txs = await client.TransactionService.getAllTransactionsForAddress(chain, address, { quoteCurrency: 'USD' });
            const buys = txs.data.items
              .filter(tx => tx.successful && tx.to_address?.toLowerCase() === address.toLowerCase() && tx.transfers?.some(tr => tr.contract_ticker_symbol === token))
              .map(tx => {
                const transfer = tx.transfers.find(tr => tr.contract_ticker_symbol === token);
                return { price: transfer.quote_rate, amount: parseFloat(transfer.delta) / Math.pow(10, item.contract_decimals) };
              });
            data[token].amounts.push(...buys.map(b => b.amount));
            data[token].prices.push(...buys.map(b => b.price));
            data[token].chains.push(chain);
            data[token].totalAmount = data[token].amounts.reduce((sum, a) => sum + a, 0);
            data[token].avgPrice = calculateWeightedAverage(data[token].prices, data[token].amounts);
          }
        } catch (err) {
          console.error(`Error on ${chain}:`, err);
        }
      }
      setPortfolio(data);
      setLoading(false);
    };
    fetchPortfolio();
  }, [address, isPaid]);

  const filteredPortfolio = Object.entries(portfolio).filter(([token, info]) =>
    token.toLowerCase().includes(searchTerm.toLowerCase()) ||
    info.chains.some(chain => chain.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const exportToCSV = () => {
    const csvContent = [
      ['Token', 'Avg Buy Price', 'Amount', 'Chains'],
      ...filteredPortfolio.map(([token, info]) => [token, info.avgPrice.toFixed(2), info.totalAmount.toFixed(4), info.chains.join(',')])
    ].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'portfolio.csv';
    link.click();
  };

  if (loading) return <p className="text-center" aria-live="polite">{t('loading')}</p>;
  if (error) return <p className="text-red-500" role="alert">{error}</p>;

  return (
    <div className="p-4">
      {trialActive && !isPaid && (
        <div className="bg-yellow-200 dark:bg-yellow-800 p-4 mb-4 rounded text-center">
          <p>{t('specialOffer')}</p>
          <button onClick={() => /* Trigger modal */} className="underline">Upgrade Now</button>
        </div>
      )}
      <input
        type="text"
        placeholder={t('searchTokenChain')}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded dark:bg-gray-800 dark:text-white"
        aria-label={t('searchTokenChain')}
      />
      <table className="w-full border-collapse" role="table" aria-label={t('portfolioTable')}>
        <caption className="sr-only">{t('portfolioSummary')}</caption>
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2" scope="col">{t('token')}</th>
            <th className="p-2" scope="col">{t('avgBuyPrice')}</th>
            <th className="p-2" scope="col">{t('amount')}</th>
            <th className="p-2" scope="col">{t('chains')}</th>
          </tr>
        </thead>
        <tbody>
          {filteredPortfolio.map(([token, info]) => (
            <tr key={token} className="border-b dark:border-gray-600">
              <td className="p-2" scope="row">{token}</td>
              <td className="p-2">${info.avgPrice.toFixed(2)}</td>
              <td className="p-2">{info.totalAmount.toFixed(4)}</td>
              <td className="p-2">{info.chains.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={exportToCSV} className="mt-4 bg-green-500 text-white px-4 py-2 rounded" aria-label={t('exportCSV')}>{t('exportCSV')}</button>
    </div>
  );
};

export default Dashboard;
