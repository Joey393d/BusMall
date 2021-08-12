'use strict';
console.log('app.js is now connected');

let imageElements = document.getElementsByTagName('img');



let productIndex1 = 0;
let productIndex2 = 1;
let productIndex3 = 2;

let rounds = 7;
let allProducts = [];

//Constructor  
function Product(name, imageURL, timesClicked, timesShown){
  this.name = name;
  this.imageURL = imageURL;
  if(timesClicked){
    this.timesClicked = timesClicked;
  } else {
    this.timesClicked = 0;
  }
  if(timesShown){
    this.timesShown = timesShown;
  } else {
    this.timesShown = 0;
  }
  allProducts.push(this);
}
console.log(allProducts);


function getProductArray(nameOfThePropertyIWant){
  let answer = [];
  for(let i = 0; i < allProducts.length; i++){
    answer[i] = allProducts[i][nameOfThePropertyIWant];
  }

  console.log(answer);
  return answer;
}


let savedProductString = localStorage.getItem('savedProduct')


if(savedProductString){
  let arrayOfNotProductObject = JSON.parse(savedPizzaString);
  console.log('if condition wat is our type ',arrayOfNotProductObject);
  for(let j= 0; j < arrayOfNotProductObject.length; j++){
    new Product(
      arrayOfNotProductObject[j].name,
      arrayOfNotProductObject[j].imageURL,
      arrayOfNotProductObject[j].timesClicked,
      arrayOfNotProductObject[j].timesShown
    );
  }
} else {
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
}
allProducts[0].timesShown = 1;
allProducts[1].timesShown = 1;





// products go here





let totalClicks = 0;


function imageWasClicked(event){
  console.log(' click event',event);

totalClicks = totalClicks + 1;

if(event.srcElement.id === '1'){
  allProducts[productIndex1].timesClicked++;
} else if(event.srcElement.id === '2'){
  allProducts[productIndex2].timesClicked++;
}


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
  
  localStorage.setItem('savedProduct', JSON.stringify(allProducts));

  let asideUL = document.getElementById('voteResults');


   

  for(let i = 0; i < allProducts.length; i ++){
    let voteResultListItem = document.createElement('li');
    voteResultListItem.textContent = `${allProducts[i].name} was clicked on ${allProducts[i].timesClicked} times and was shown ${allProducts[i]} times `;
    asideUL.appendChild(voteResultListItem);

    let percentageListItem = document.createElement('li');
    let math;
    if(allProducts[i].timesClicked === 0){
      math = `Zero click and shown ${allProducts[i].timesShown} times.`;
    } else {
      math = Math.round(((allProducts[i]['timesClicked']/ allProducts[i]['timesShown']).toFixed(2) * 100)) + '%';
    }
    percentageListItem.textContent = `${allProducts[i].name} percentage of times clicked vs times shown is ` + math;
    asideUL.appendChild(percentageListItem);
  }//closes the for loop
  
 
  for(let i = 0; i < imageElements.length; i++){
    imageElements[i].removeEventListener('click', imageWasClicked);
    console.log('is this thing working?');
  }
  //run chart
  runMyChartsNow();

  }
} 


function runMyChartsNow(){

  let ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getProductArray('name'),
      datasets: [{
        label: '# of Votes',
        data: getProductArray('timesClicked'),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}













//add the canvas chart 

// function runMyChartsNow(){

 //}








//add listener to images 
for(let i = 0; i < imageElements.length; i++){
  imageElements[i].addEventListener('click', imageWasClicked);
  console.log('is this thing working?');
}

