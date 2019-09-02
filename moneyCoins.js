function convertToCoin(duit){
  var coins = [10000,5000,2000,1000,500,200,100,50,20,10,1]
  var moneyNew = duit
  var temp = []
  while(moneyNew > 0){
    for(var i = 0 ; i < coins.length; i++){
      if (moneyNew >= coins[i]) {
        temp.push(coins[i])
        moneyNew = moneyNew - coins[i]
        break
      }
    }
  }
  return temp
}

function moneyCoins (money) {
  // your implementation code here
  return convertToCoin(money)
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
// output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
