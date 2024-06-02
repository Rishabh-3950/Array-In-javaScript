//delete element -- this method use the dlete an element from an array but space mentain in array.
const arr=["anshika","ankit","Naina"];
delete arr[0];
console.log(arr);

//splice --this method used to add and delete element from an array.
//splice(index,count,item1,item2,item3,.....itemx)
//used for modifies the array.
const num=[1,2,3,4,5,6];
//num.splice(0,2);
//num.splice(2,0,6,8,9);
num.splice(2,1);

console.log(num);

//tospliced()--it does not change original array.
const arr1=[67,68,69,70];
const newArr=arr1.toSpliced(1,0,45,46,47);
console.log(newArr);
console.log(arr1);


//slice 
//method returns selected elements in an array, as a new array.

//The slice() method selects from a given start, up to a (not inclusive) given end.
const number=[1,2,3,4,5,6,7];
 const num2=number.slice(1,5);
console.log(num2);
const num3=number.slice(-3,-1);
console.log(num3);


