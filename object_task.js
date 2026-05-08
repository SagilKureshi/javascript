// // // //Task 1 

// // // // let person = {
// // // //     name : "abc",
// // // //     age : 19,
// // // //     city : "mumbai"
// // // // };
// // // // person.email = "abc@gmail.com";
// // // // console.log("After updation \n" + person.email);

// // // // delete person.city;
// // // // for(let key in person){
// // // //     console.log(`Value of ${key} property is ${person[key]}`);
// // // // }

// // // //Task 2 

// // // let name = {
// // //     firstName : "Sagil",
// // //     middleName : "Y",
// // //     lastName : "Kureshi",
// // // };

// // // let fullNmae = function (prmt){
// // //     return `${prmt.firstName} ${prmt.middleName} ${prmt.lastName}`;
// // // }

// // // console.log(fullNmae(name));

// // //task 3 way 1

// // let obj = {
// //     name : "abc",
// //     age : 10,
// //     city : "xyz",
// //     phone_no : 7452424,
// //     mail : "abc@gmail.com"
// // };

// // let count = 0;
// // let show_obj = (prmt) => {
// //     for (let s in obj){
// //         count++;
// //     }
// //     return count;
// // };

// // console.log(show_obj(obj));
// // console.log("NO. of property : "+count);

// //task 3 way 2

// let obj = {
//     name : "abc",
//     age : 10,
//     city : "xyz",
//     phone_no : 7452424,
//     mail : "abc@gmail.com"
// };

// let total_propery = Object.keys(obj).length;
// console.log(total_propery);