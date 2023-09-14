function factorial(x){
if(x===0){
    return 1;
}
else{
    return x*factorial(x-1);
}
}
const num=0;
if(num>0){
 let result=factorial(num);
 console.log(`The factorial of ${num} is ${result}`);
}
else{
    console.log(`The factorial of zero is 1`);
}