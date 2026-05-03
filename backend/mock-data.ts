
export const mockData = (random = false) => {
  return {
    "summary": {
      "totalSales": random ? Math.floor(Math.random() * 10000) : 9465,
      "salesGrowth":  52,
      "totalOrders": random ? Math.floor(Math.random() * 500) : 243,
      "ordersGrowth":  45,
      "totalCustomers": random ? Math.floor(Math.random() * 10000) : 135,
      "customerGrowth": 83
    },
   "monthlyRevenue": [
    { "month": "Jan", "sales": 32000 },
    { "month": "Feb", "sales": 28000 },
    { "month": "Mar", "sales": 50000 },
    { "month": "Apr", "sales": 52000 },
    { "month": "May", "sales": 25000 },
    { "month": "Jun", "sales": 27000 },
    { "month": "Jul", "sales": 12000 },
    { "month": "Aug", "sales": 26000 },
    { "month": "Sep", "sales": 42000 },
    { "month": "Oct", "sales": 20000 },
    { "month": "Nov", "sales": 45000 },
    { "month": "Dec", "sales": 53000 }
  ],
  "productSales": [
    { "category": "Electronics", "online": 80, "store": 60 },
    { "category": "Clothing", "online": 70, "store": 50 },
    { "category": "Home", "online": 90, "store": 40 },
    { "category": "Sports", "online": 60, "store": 30 },
    { "category": "Books", "online": 50, "store": 70 }
  ],
 "trafficSources": [
    { "source": "Search", "value": 30 },
    { "source": "Direct", "value": 25 },
    { "source": "Social", "value": 20 },
    { "source": "Email", "value": 15 },
    { "source": "Unknown", "value": 10 }
  ],
  
  "sessions": [
    { "source": "Search", "sessions": 350 },
    { "source": "Direct", "sessions": 250 },
    { "source": "Social", "sessions": 180 },
    { "source": "Email", "sessions": 270 },
    { "source": "Unknown", "sessions": 50 }
  ],
   "orders": [
    { "id": 242, "date": "2026-04-01", "name": "Jennifer Smith", "status": "pending", "total": 18, "payment": "Cash" },
    { "id": 898, "date": "2026-04-02", "name": "Jane Jones", "status": "shipped", "total": 283, "payment": "PayPal" },
    { "id": 283, "date": "2026-04-03", "name": "Martha Clark", "status": "delivered", "total": 493, "payment": "Card" },
    { "id": 657, "date": "2026-04-04", "name": "Wes Bean", "status": "pending", "total": 32, "payment": "Apple Pay" },
    { "id": 209, "date": "2026-04-05", "name": "James Long", "status": "shipped", "total": 34, "payment": "Google Pay" }
  ],
  "doughtnutData": [
    { "category": "Electronics", "value": 40 },
    { "category": "Clothing", "value": 25 },
    { "category": "Home", "value": 20 },
    { "category": "Sports", "value": 10 },
    { "category": "Books", "value": 5 }
  ]
  }
}
