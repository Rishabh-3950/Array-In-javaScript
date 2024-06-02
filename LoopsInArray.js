//for loop
const fruits=["Mango","Apple","Orange","Guava"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//for..of
for(let fruit of fruits){
    console.log(fruit);
}


//for..in
for(let x in fruits){
    console.log(x);
    console.log(fruits[x]);
}