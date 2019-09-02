function moneyCoins (money) {
  // your implementation code here
  // buat kamus koin
  var koin = [10e3, 5e3, 2e3, 1e3, 500, 200, 100, 50, 20, 10, 1]
  var output = []
  for (var i=0; i<koin.length; i++) {
      while (money >= koin[i]) {
          output.push(koin[i])
          money -= koin[i]
      }
  }
  return output
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
