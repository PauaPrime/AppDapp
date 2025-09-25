import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useTranslation } from 'react-i18next';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const CheckoutForm = ({ onSuccess, trialActive }) => {
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);

    try {
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        setError(error.message);
        setProcessing(false);
        return;
      }

      // Simulate server call for PaymentIntent (in test mode)
      // In production, replace with actual API call to your backend
      const amount = trialActive ? 750 : 999; // $7.50 or $9.99 in cents
      console.log(`Simulating payment of $${amount / 100} for ${paymentMethod.id}`);
      setTimeout(() => {
        onSuccess();
        setProcessing(false);
      }, 1000);
    } catch (err) {
      setError(t('paymentError'));
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <CardElement className="border p-2 rounded mb-4 dark:bg-gray-700 dark:text-white" />
      {error && <p className="text-red-500 mb-4" role="alert">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
        aria-label={t('pay')}
      >
        {processing ? t('loading') : t('pay')}
      </button>
    </form>
  );
};

const UpgradeModal = ({ onSuccess, trialActive }) => {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{t('upgradeTitle')}</h2>
        <p className="mb-4">{t('upgradeBenefits')}</p>
        <p className="mb-4 font-semibold">{trialActive ? t('specialOffer') : t('standardPrice', { price: '$9.99' })}</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm onSuccess={onSuccess} trialActive={trialActive} />
        </Elements>
      </div>
    </div>
  );
};

export default UpgradeModal;
