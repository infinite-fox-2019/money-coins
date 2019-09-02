function moneyCoins (money) {
  var uangPecahan = [1,10,20,50,100,200,500,1000,2000,5000,10000]
  var output = []
  while(money > 0){
      for(var i=uangPecahan.length-1;i>=0;i--){
          if(uangPecahan[i]<=money){
              money = money - uangPecahan[i]
              output.push(uangPecahan[i])
              break
          }
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
