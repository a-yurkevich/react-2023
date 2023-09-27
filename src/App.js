import { useState, useEffect } from 'react';

import './App.css';
import RewardPointsTable from './components/RewardPointsTable';
import { getPurchases } from './data/dataSet';
import { calculateRewardPoints } from './utils/calculateRewardPoints';
import { isWithinMonthsBack } from './utils/isWithinMonthsBack';

function App() {
  const [purchases, setPurchases] = useState([]);
  const [rewardPoints, setRewardPoints] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPurchases();
        setPurchases(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const calculatedRewardPoints = () => {
      const calculatedRewardPoints = purchases.map((user) => {
        const rewardPointsPerUser = {};
        let totalPointsPerUser =  0;

        const filteredUserPurchases = user.purchases.filter((purchase) => isWithinMonthsBack(purchase.date, 3));
        filteredUserPurchases
          .forEach((purchase) => {
            const { date, totalPrice } = purchase;
            const points = calculateRewardPoints(totalPrice);
            const monthYearKey = getFormattedDate(date);

            if (!rewardPointsPerUser[monthYearKey]) {
              rewardPointsPerUser[monthYearKey] = 0;
            }

            rewardPointsPerUser[monthYearKey] += points;
            totalPointsPerUser += points;
          });

        return {
          userId: user.userId,
          rewardPointsPerUser,
          totalPointsPerUser,
        };
      });

      setRewardPoints(calculatedRewardPoints);
    }

    const getFormattedDate = (dateInMilliseconds) => {
      const purchaseDate = new Date(dateInMilliseconds);
      const month = purchaseDate.getMonth() + 1;
      const year = purchaseDate.getFullYear();
      return `${year}-${month}`;
    }

    calculatedRewardPoints();
  }, [purchases]);

  return (
    <div className="App">
      <RewardPointsTable rewardPoints={ rewardPoints } />
    </div>
  );
}

export default App;
