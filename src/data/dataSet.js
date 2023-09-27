const dataSet = [
  {
    id: 1,
    userId: 1,
    purchases: [
      {
        id: 1,
        date: 1695779161360, // Wed Sep 27 2023 01:46:01 (UTC)
        totalPrice: 121,
        currency: 'USD'
      },
      {
        id: 2,
        date: 1674882000000, // Sat Jan 28 2023 05:00:00 (UTC)
        totalPrice: 121.3,
        currency: 'USD'
      },
      {
        id: 3,
        date: 1695000600286, // Mon Sep 18 2023 01:30:00 (UTC)
        totalPrice: 120.2,
        currency: 'USD'
      },
      {
        id: 4,
        date: 1695000600286, // Mon Sep 18 2023 01:30:00 (UTC)
        totalPrice: 52,
        currency: 'USD'
      },
      {
        id: 5,
        date: 1690516800000, // Fri Jul 28 2023 04:00:00 (UTC)
        totalPrice: 52,
        currency: 'USD'
      },
    ]
  },
  {
    id: 2,
    userId: 2,
    purchases: [
      {
        id: 1,
        date: 1695000600286, // Mon Sep 18 2023 01:30:00 (UTC)
        totalPrice: 51,
        currency: 'USD'
      },
      {
        id: 2,
        date: 1695000600286, // Mon Sep 18 2023 01:30:00 (UTC)
        totalPrice: 50,
        currency: 'USD'
      },
    ]
  },
  {
    id: 3,
    userId: 3,
    purchases: [
      {
        id: 1,
        date: 1695110000286, // Tue Sep 19 2023 07:53:20 (UTC)
        totalPrice: 70.5,
        currency: 'USD'
      },
      {
        id: 2,
        date: 1695000600286, // Mon Sep 18 2023 01:30:00 (UTC)
        totalPrice: 54.1,
        currency: 'USD'
      },
      {
        id: 2,
        date: 1693195200000, // Mon Aug 28 2023 04:00:00
        totalPrice: 54.8,
        currency: 'USD'
      },
    ]
  }
];

export function getPurchases() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataSet);
    }, 1000);
  });
}

