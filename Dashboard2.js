// ... (previous imports and calculateWeightedAverage unchanged)

const Dashboard = ({ address, isPaid }) => {
  const { t } = useTranslation();
  const [portfolio, setPortfolio] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // ... (fetchPortfolio useEffect unchanged)

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
