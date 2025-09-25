import React from 'react';
import { useTranslation } from 'react-i18next';

const Settings = ({ setShowSettings, setDarkMode, darkMode, i18n }) => {
  const { t } = useTranslation();
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'es', name: 'Español' },
    { code: 'ar', name: 'العربية' },
    { code: 'fr', name: 'Français' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'ur', name: 'اردو' },
    { code: 'id', name: 'Bahasa Indonesia' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ja', name: '日本語' },
    { code: 'pcm', name: 'Nigerian Pidgin' },
    { code: 'mr', name: 'मराठी' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'yue', name: '粵語' },
    { code: 'vi', name: 'Tiếng Việt' },
    { code: 'ko', name: '한국어' },
    { code: 'tl', name: 'Tagalog' },
    { code: 'fa', name: 'فارسی' },
    { code: 'ha', name: 'Hausa' },
    { code: 'arz', name: 'مصرى' },
    { code: 'jv', name: 'Jawa' },
    { code: 'it', name: 'Italiano' },
    { code: 'th', name: 'ไทย' },
    { code: 'gu', name: 'ગુજરાતી' },
    { code: 'pl', name: 'Polski' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{t('settings')}</h2>
        <label className="block mb-4">
          <span>{t('language')}</span>
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="mt-1 block w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            aria-label={t('language')}
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </label>
        <label className="block mb-4">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="mr-2"
            aria-label={t('darkMode')}
          />
          {t('darkMode')}
        </label>
        <button
          onClick={() => setShowSettings(false)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          aria-label={t('back')}
        >
          {t('back')}
        </button>
      </div>
    </div>
  );
};

export default Settings;
