// // // // let div = document.querySelector('div');
// // // // console.log(div);
// // // // let p = document.createElement('p');
// // // // console.log(p);
// // // // div.beforee (p);
// // // // p.innerText = "jjjj";
// // // let p = document.querySelector('p');
// // // //p.setAttribute('class','bgcolor');
// // // p.style.backgroundColor = "yellow";

// // let div = document.querySelector('.div1');
// // div.addEventListener('touchmove',()=>{
// //     console.log("Touch moving");
// // })

// let p = document.querySelector('#p1');
// p.addEventListener('copy',()=>{
//     console.log(window.getSelection()+" is coping");
// })

//counter value increment & decrement task

let minus = document.querySelector('#minus');
let pluse = document.querySelector('#pluse');
let value = document.querySelector('.value');

minus.addEventListener('click',()=>{
    value.innerHTML = Number(value.innerHTML )-1;
});

pluse.addEventListener('click',()=>{
    value.innerHTML = Number(value.innerHTML )+1;
});