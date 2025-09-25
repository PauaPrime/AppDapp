import React from 'react';
import { useTranslation } from 'react-i18next';

const Compliance = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{t('privacyPolicy')}</h1>
      <p className="mb-4">{t('privacyDescription')}</p>
      <p className="mb-4">{t('disclaimer')}</p>
    </div>
  );
};

export default Compliance;
