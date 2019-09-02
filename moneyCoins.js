var pecahan = [1,10,20,50,100,200,500,1000,2000,5000,10000];


function moneyCoins (money) {
  // your implementation code here
  var array = []
  var duit = money
  while(duit>0){
    for(var j=pecahan.length-1; j>=0; j--){
      if(duit>=pecahan[j]){
        array.push(pecahan[j]);
        duit = duit-pecahan[j];
        break;
      }
    }
  }
  return array;
}


// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
// //output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
