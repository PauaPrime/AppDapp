// ... (previous code)
return (
  // ...
  {address && <Dashboard address={address} isPaid={isPaid} trialActive={trialActive} />}
  {!trialActive && !isPaid && <UpgradeModal onSuccess={handlePaymentSuccess} trialActive={trialActive} />}
  // ...
);
