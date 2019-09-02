function moneyCoins (money) {
  var arr = [];

  if (!money){
    return "Data salah, masukin kembali angkanya"
  } else {
    while (money>0){
        if (money>=10000){
          arr.push(10000);
          money -= 10000;
        } else if (money>=5000){
          arr.push(5000);
          money -= 5000;
        } else if (money>=2000){
          arr.push(2000);
          money -= 2000;
        } else if (money>=1000){
          arr.push(1000);
          money -= 1000;
        } else if (money>=500){
          arr.push(500);
          money -= 500;
        } else if (money>=200){
          arr.push(200);
          money -= 200;
        } else if (money>=100){
          arr.push(100);
          money -= 100;
        } else if (money>=50){
          arr.push(50);
          money -= 50;
        } else if (money>=20){
          arr.push(20);
          money -= 20;
        } else if (money>=10){
          arr.push(10);
          money -= 10;
        } else if (money>=1){
          arr.push(1);
          money -= 1;
        }
      }
    return arr;
  }
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
