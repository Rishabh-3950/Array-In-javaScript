//at() method--print the element from an array which is present in that index.
const num=[1,2,3,4,5,6];
console.log(num.at(3));

//Push and pop

//pop()--remove last element from an array.
//return the poped element.

const colors=["red","blue","pink"];
const col=colors.pop();
console.log(col);//pink
console.log(colors);

//push()--add element in the last of an array.
//return new length of an array.
const col1=colors.push("black","orange");
console.log(col1);
console.log(colors);

//shift and unshift-- add and remove element begining of an array.
//shift()--remove element from begining of an array.
//return the element which has been removed.

const fruits=["orange","apples","grapes"];
const fruit=fruits.shift();
console.log(fruit);
console.log(fruits);


//unshift()--add element from begining of an array.
//return new length of an array.

const fruit1=fruits.unshift("Banana");
console.log(fruit1);
console.log(fruits);






