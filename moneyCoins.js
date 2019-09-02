function moneyCoins(money) {
  // your implementation code here
  const pecahan = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 1]
  const getMoneyCoins = []

  for (let i = 0; i < pecahan.length; i++) {
     while (money >= pecahan[i]) {
      getMoneyCoins.push(pecahan[i])
      money -= pecahan[i]
    }
  }

  return getMoneyCoins 
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
