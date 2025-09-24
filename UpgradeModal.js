import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useTranslation } from 'react-i18next';

const stripePromise = loadStripe('pk_test_51...'); // Your test publishable key

const CheckoutForm = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (!error) {
      // In production, send paymentMethod.id to server for charge (one-time $9.99)
      // For sim: Assume success
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="p-2 border rounded mb-4" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{t('pay999')}</button>
    </form>
  );
};

const UpgradeModal = ({ onSuccess }) => {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-lg mb-4">{t('upgradeTitle')}</h2>
        <p className="mb-4">{t('upgradeBenefits')}</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm onSuccess={onSuccess} />
        </Elements>
      </div>
    </div>
  );
};

export default UpgradeModal;
