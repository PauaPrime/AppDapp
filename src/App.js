import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Web3Modal from 'web3modal';
import { providers } from 'ethers';
import Dashboard from './Dashboard';
import Settings from './Settings';
import UpgradeModal from './UpgradeModal';
import i18n from './i18n';
import './App.css';

const App = () => {
  const { t, i18n } = useTranslation();
  const [address, setAddress] = useState(null);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [showSettings, setShowSettings] = useState(false);
  const [isPaid, setIsPaid] = useState(localStorage.getItem('paid') === 'true');
  const [trialActive, setTrialActive] = useState(true);

  useEffect(() => {
    const trialStart = localStorage.getItem('trialStart');
    if (!trialStart) {
      localStorage.setItem('trialStart', new Date().toISOString());
    } else {
      const daysPassed = (new Date() - new Date(trialStart)) / (1000 * 60 * 60 * 24);
      if (daysPassed > 30 && !isPaid) setTrialActive(false);
    }
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode, isPaid]);

  const connectWallet = async () => {
    const web3Modal = new Web3Modal();
    const instance = await web3Modal.connect();
    const provider = new providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    setAddress(addr);
  };

  const handlePaymentSuccess = () => {
    setIsPaid(true);
    localStorage.setItem('paid', 'true');
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white ${darkMode ? 'dark' : ''}`}>
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">{t('appTitle')}</h1>
        <div>
          <button onClick={() => setShowSettings(true)} className="mr-4">{t('settings')}</button>
          {address && <button onClick={() => setAddress(null)}>{t('disconnect')}</button>}
        </div>
      </header>
      {!address ? (
        <div className="flex flex-col items-center justify-center h-64">
          <p className="mb-4">{t('welcomeMessage')}</p>
          <button onClick={connectWallet} className="bg-blue-500 text-white px-6 py-3 rounded-lg">{t('connectWallet')}</button>
        </div>
      ) : (
        <Dashboard address={address} isPaid={isPaid} trialActive={trialActive} />
      )}
      {showSettings && <Settings setShowSettings={setShowSettings} setDarkMode={setDarkMode} darkMode={darkMode} i18n={i18n} />}
      {!trialActive && !isPaid && <UpgradeModal onSuccess={handlePaymentSuccess} trialActive={trialActive} />}
      <footer className="p-4 text-center text-sm">
        <a href="/privacy">{t('privacyPolicy')}</a> | {t('disclaimer')}
      </footer>
    </div>
  );
};

export default App;
