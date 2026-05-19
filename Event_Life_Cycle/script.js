let grandparent = document.querySelector('.grandparent');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');

//Bubbling Phase

grandparent.addEventListener('click',()=>{
    console.log('Grandparent Clicked');
});

parent.addEventListener('click',()=>{
    console.log('parent Clicked');
});

child.addEventListener('click',()=>{
    console.log('child Clicked');
});

//Capturing Phase

grandparent.addEventListener('click',()=>{
    console.log('Grandparent Clicked');
},true);

parent.addEventListener('click',()=>{
    console.log('parent Clicked');
},true);

child.addEventListener('click',()=>{
    console.log('child Clicked');
},true);
