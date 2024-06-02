//Concatination in array
const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];
const arr3=[11,12,13,14,15];
const newArr=arr1.concat(arr2,arr3);
console.log("NewArray ",newArr);
console.log(" original array ",arr1);


//flat method--
const arr4=[[1,2],[3,4],[5,6],[7,8]];
const flattendArray=arr4.flat();
console.log("flattend array ",flattendArray);

//Searching method in array
//indexOf
const colors=["black","orange","white","blue"];
const a=colors.indexOf("orange");
console.log(a);
const b=colors.indexOf("pink"); // if the element not presen in array it will give -1.
console.log(b);


//lastIndexOf
const colors1=["black","orange","white","blue","black"];
const c=colors1.lastIndexOf("black");
console.log(c);

