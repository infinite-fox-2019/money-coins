function moneyCoins (money) {
  // your implementation code here
  var arr_result = []
  // var tempMoney = 0;
  var coin = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

  for (var i = 0; i < coin.length; i++) {
    if (money > coin[i]) {
      money = money - coin[i]
      arr_result.push(coin[i])
    }
    if (money > coin[i]) {
      money = money - coin[i]
      arr_result.push(coin[i])
    }
    if (money > coin[i]) {
      money = money - coin[i]
      arr_result.push(coin[i])
    }
    if (money >= coin[i]) {
      money = money - coin[i]
      arr_result.push(coin[i])
    }
  }
  return arr_result
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
