//Sorting
//1.sort()--it sort an array alphabetically.
//it modified original array.
const fruits=["Mango","Apple","Banana"];
fruits.sort();
console.log(fruits);

//toSorted--new array get cretead and original array not effected.
const fruits1=["Mango","Apple","Banana"];
const fruits2=fruits1.toSorted();
console.log(fruits1);
console.log(fruits2);


//Reverse-- it reverse the array element.
//it modified the original array.
const colors=["black","blue","orange","skyblue"];
colors.reverse();
console.log(colors);

//toReversed--it also revrese the element of an array but in this new array created it does not effect original array.
const colors1=["black","blue","orange","skyblue"];
const colors2=colors1.toReversed();
console.log(colors1);
console.log(colors2);


//if you print any array decending order  after sorting than you should try this!
const cars=["Bmw","valino","swift","jaguar"];
cars.sort();
cars.reverse();
console.log(cars);


//in case of numerical sort() method not give correct output. so we can try this! compare function
const numArr=[65,34,67,21,114];
numArr.sort(function(a,b){
    return a-b; //if a-b=negative than keep a before b if a-b=positive than b before a.
});
console.log(numArr);

//decending order
numArr.sort(function(a,b){
    return b-a; 
});
console.log(numArr);

//find max and min
console.log(Math.max(7,8,9,4,3));
console.log(Math.min(4,21,4,2,1));



