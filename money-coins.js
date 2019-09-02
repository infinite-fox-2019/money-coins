/*  Money Coin
    uang pecahan 1 ,10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000
    hasil dalam bentuk array

*/


function convertToCoin(money){

    var objPecahan = [10000,5000,2000,1000,500,200,100,50,20,10,1]

            hasilPecahan = []
                for(var i=0; i<objPecahan.length; i++){
                    while(money>=objPecahan[i]){
                        money = money - objPecahan[i]
                        //console.log(money, objPecahan[i])
                        hasilPecahan.push(objPecahan[i])
                    }
                   
                }

            return hasilPecahan

}

console.log(convertToCoin(543)) // [500,20,20,1,1,1]
console.log(convertToCoin(7752)) // 5000 2000 500  200 50 1 1 
console.log(convertToCoin(37454)) // 10000 10000 10000 5000 2000 200 200 50 1 1 1 1