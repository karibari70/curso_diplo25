let numeros=[5,132,4532,8736,46];
let mayor=0;
for(let i=0;i<numeros.length;i++){
    if(numeros[i]>mayor){
        mayor=numeros[i];
    }
}
console.log(`El número mayor es:${mayor}`);