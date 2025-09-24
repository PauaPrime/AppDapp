// ... (previous)

const Dashboard = ({ address, isPaid, trialActive }) => {
  // ...

  return (
    <div className="p-4">
      {trialActive && !isPaid && (
        <div className="bg-yellow-200 dark:bg-yellow-800 p-4 mb-4 rounded text-center">
          <p>Special Trial Offer: Purchase lifetime access for $7.50 (save 25%) instead of $9.99!</p>
          <button onClick={() => /* Trigger modal or navigate */} className="underline">Upgrade Now</button>
        </div>
      )}
      {/* Rest: search, table, export */}
    </div>
  );
};
