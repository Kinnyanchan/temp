function callb(breadth){
    return breadth;
}
function calll(length){
    return length;
}
function sum(length,breadth){
    return calll(length)+callb(breadth);
}
function perimeter(length,breadth){
    return sum(length,breadth)*2;
}

console.log(perimeter(5,5));

