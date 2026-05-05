let arr = [55,55,55,55,55];
console.log(arr);
let sum = arr.reduce((acc,current)=>{
	return (acc + current);
},0);
let avg = sum/arr.length;
console.log("Average marks = ", avg);