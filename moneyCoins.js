function moneyCoins (money) {
  var coins = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];

  var result = [];

  for (var i = money; i > 0;) {
    for (var j = 0; j < coins.length; j++) {
      while (i >= coins[j]) {
        result.push(coins[j]);
        i -= coins[j];
      }
    }
  }
  return result;
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
