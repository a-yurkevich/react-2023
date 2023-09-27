import React from 'react';

import './RewardPointsTable.css';

function RewardPointsTable({ rewardPoints }) {
  return (
    <div className="RewardPointsTable">
      <h1>Reward Points</h1>
      <h2>Reward Points Per Month</h2>
      <table>
        <thead>
        <tr>
          <th>User ID</th>
          <th>Reward Points</th>
        </tr>
        </thead>
        <tbody>
        {rewardPoints.map((user) => (
          <tr key={user.userId}>
            <td>{user.userId}</td>
            <td>
              {Object.entries(user.rewardPointsPerUser).map(([monthYear, points]) => (
                <div key={monthYear}>
                  {monthYear}: {points} point(s)
                </div>
              ))}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <h2>Total Reward Points</h2>
      <table>
        <thead>
        <tr>
          <th>User ID</th>
          <th>Total Points</th>
        </tr>
        </thead>
        <tbody>
        {rewardPoints.map((user) => (
          <tr key={user.userId}>
            <td>{user.userId}</td>
            <td>{user.totalPointsPerUser}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default RewardPointsTable;
