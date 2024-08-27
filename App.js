let on = document.querySelector('.on');
let img = document.querySelector('.img');
let off = document.querySelector('.off');


on.addEventListener('click', function(){
img.src = "https://www.w3schools.com/js/pic_bulbon.gif"
})


off.addEventListener('click', function(){
img.src = "https://www.w3schools.com/js/pic_bulboff.gif"
})





let inc = document.querySelector('.inc');
let input = document.querySelector('.input');
let dec =  document.querySelector('.dec');

inc.addEventListener('click', function(){
    

   if(Number(input.value) < 5){
     input.value = Number(input.value) + 1;


  }else{
     inc.style.cursor = 'not-allowed'
  }
   })

dec.addEventListener('click', function(){
if (Number(input.value) <= 5){

    if(Number(input.value) == 1){
  dec.style.cursor = 'not-allowed '
    }
    let test = Number(input.value);
    input.value = test -1;
   
    

    }
    })



    let clrBg = document.querySelector('.clr');

let btn = document.querySelector('.btn_clr');

btn.addEventListener('click', function(){

let red = Math.floor(Math.random() * 255); // 60

let green = Math.floor(Math.random() * 255); //0

let blue = Math.floor(Math.random() * 255);



clrBg.style.background = `rgb(${red}, ${green}, ${blue})`;

})