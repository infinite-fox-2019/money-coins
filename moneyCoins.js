function moneyCoins (money) {
  var strMoney = money.toString();
  var coin = [10000,5000,2000,1000,500,200,100,50,20,10,1];
  var arrHasil = [];
  for(var i = 0; i<strMoney.length; i++){
    var angkaPengali = parseInt(strMoney[i]) * (Math.pow(10, (strMoney.length - (1 + i))));
    
    for(var j = 0; j<coin.length; j++){
      if(angkaPengali - coin[j] >= 0){
        arrHasil.push(coin[j]);
        angkaPengali -= coin[j];

        if(angkaPengali % coin[j] == 0){
          for(var k = angkaPengali; k>0; k -= coin[j]){
            arrHasil.push(coin[j]);
            angkaPengali -= coin[j];
          }
        }
      }
    }
  }
  return arrHasil;
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
