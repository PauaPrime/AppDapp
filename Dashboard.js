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
]; // Top 40 chain IDs for Covalent

const calculateWeightedAverage = (prices, amounts) => {
  if (!prices.length || !amounts.length || prices.length !== amounts.length) return 0;
  const totalCost = prices.reduce((sum, p, i) => sum + p * amounts[i], 0);
  const totalAmount = amounts.reduce((sum, a) => sum + a, 0);
  return totalAmount > 0 ? totalCost / totalAmount : 0;
};

const Dashboard = ({ address, isPaid }) => {
  const { t } = useTranslation();
  const [portfolio, setPortfolio] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoading(true);
      const client = new CovalentClient('cqt_rQbY3Y6p6Q6p6Q6p6Q6p6Q6p6Q'); // Replace with your free API key
      const data = {};
      for (const chain of chains.slice(0, isPaid ? chains.length : 10)) { // Limit to 10 chains for free trial
        try {
          const balances = await client.BalanceService.getTokenBalancesForWalletAddress(chain, address, { quoteCurrency: 'USD' });
          for (const item of balances.data.items) {
            const token = item.contract_ticker_symbol;
            if (!data[token]) data[token] = { amounts: [], prices: [], chains: [] };
            // Fetch tx history for buys
            const txs = await client.TransactionService.getAllTransactionsForAddress(chain, address, { quoteCurrency: 'USD' });
            const buys = txs.data.items
              .filter(tx => tx successful && tx.to_address?.toLowerCase() === address.toLowerCase() && tx.transfers?.some(tr => tr.contract_ticker_symbol === token))
              .map(tx => {
                const transfer = tx.transfers.find(tr => tr.contract_ticker_symbol === token);
                return { price: transfer.quote_rate, amount: parseFloat(transfer.delta) / Math.pow(10, item.contract_decimals) };
              });
            data[token].amounts.push(...buys.map(b => b.amount));
            data[token].prices.push(...buys.map(b => b.price));
            data[token].chains.push(chain);
            data[token].totalAmount = data[token].amounts.reduce((sum, a) => sum + a, 0);
            data[token].avgPrice = calculateWeightedAverage(data[token].prices, data[token].amounts);
            // Add current value, P/L calc using item.quote_rate
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

  if (loading) return <p className="text-center">{t('loading')}</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2">{t('token')}</th>
            <th className="p-2">{t('avgBuyPrice')}</th>
            <th className="p-2">{t('amount')}</th>
            <th className="p-2">{t('chains')}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(portfolio).map(([token, info]) => (
            <tr key={token} className="border-b dark:border-gray-600">
              <td className="p-2">{token}</td>
              <td className="p-2">${info.avgPrice.toFixed(2)}</td>
              <td className="p-2">{info.totalAmount.toFixed(4)}</td>
              <td className="p-2">{info.chains.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">{t('exportCSV')}</button>
    </div>
  );
};

export default Dashboard;
