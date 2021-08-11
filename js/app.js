'use strict';
console.log('app.js is now connected');

let imageElement = document.getElementsByTagName('img');


let productIndex1 = 0;
let productIndex2 = 1;
let productIndex3 = 2;


let rounds = 5;
let allProducts = [];

function Product(name, imageURL){
  this.name = name;
  this.imageURL = imageURL;
  this.timesClicked = 0;
  this.timesShown = 0;
  allProducts.push(this);
}
console.log('this is all of the products made by constructor',allProducts);



/////put products here

new Product('banana', 'images/banana holder.jpg');
new Product('bandage', 'images/bandage.jpg');
new Product('dogBeak', 'images/dogBeak.jpg');
new Product('fart', 'images/fart.jpg');
new Product('matt', 'images/matt.jpg');
new Product('meat', 'images/meatPop.jpg');
new Product('pet', 'images/petButler.jpg');
new Product('pickle', 'images/pickle.jpg');
new Product('speakers', 'images/speakers.jpg');
new Product('TP', 'images/TP.jpg');
new Product('trump', 'images/Trump.jpg');
new Product('what', 'images/what.jpg');


let totalClicks = 0;

function imageWasClicked(event){
  console.log(' click event',event);
//count total clicks
totalClicks = totalClicks + 1;

//choose new images to render from click to click
let nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
let nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
let nextProductIndex3 = Math.floor(Math.random() * allProducts.length);

while((nextProductIndex1 === productIndex1)     ||
      (nextProductIndex1 === productIndex2)     || 
      (nextProductIndex1 === productIndex3)     || 
      (nextProductIndex1 === nextProductIndex2) || 
      (nextProductIndex1 === nextProductIndex3)  
){
  nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
}
while(
  (nextProductIndex2 === productIndex1) || 
  (nextProductIndex2 === productIndex2) || 
  (nextProductIndex2 === productIndex3) ||
  (nextProductIndex2 === nextProductIndex1) ||
  (nextProductIndex2 === nextProductIndex3)
  ){
  nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
}
while(
   (nextProductIndex3 === productIndex1) ||
   (nextProductIndex3 === productIndex2) ||
   (nextProductIndex3 === productIndex3) ||
   (nextProductIndex3 === nextProductIndex1) ||
   (nextProductIndex3 === nextProductIndex2)
  
  ){
  nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
}



productIndex1 = nextProductIndex1;
productIndex2 = nextProductIndex2;
productIndex3 = nextProductIndex3;

imageElements[0].src = allProducts[productIndex1].imageURL;
  allProducts[productIndex1].timesShown++;
  
  imageElements[1].src = allProducts[productIndex2].imageURL;
  allProducts[productIndex2].timesShown++;

  imageElements[2].src = allProducts[productIndex3].imageURL;
  allProducts[productIndex3].timesShown++;




  if(totalClicks >= rounds){
    let asideUL = document.getElementById('voteResults');


    for(let i = 0; i < imageeElements.length; i++){

    }
    for(let i = 0; i < imageElements.length; i++){
      imageElements[i].removeEventListener('click', imageWasClicked);
      console.log('is this thing working?');
    }
  }
}





for(let i = 0; i < imageElements.length; i++){
  imageElements[i].addEventListener('click', imageWasClicked);
  console.log('is this thing working?');
}