'use strict';
console.log('js file is connected');




const pizzaImageSectionTag = document.getElementById('all_pizzas');
const leftPizzaImageTag = document.getElementById('left_pizza_img');
const rightPizzaImageTag = document.getElementById('right_pizza_img');

let totalClicks = 0;


let leftPizzaOnThePage = null;
let rightPizzaOnThePage = null;


const PizzaPicture = function(name, imageSrc){
  this.name = name;
  this.url = imageSrc;
  
  this.clicks = 0;
  this.timesShown = 0;
 
  PizzaPicture.allImages.push(this);
};
PizzaPicture.allImages = [];




const renderNewPizzas = function(leftIndex, rightIndex){
  console.log('create the image src="X" for left and right images', leftIndex);
  console.log('PizzaPicture.allImages[leftIndex].url;', PizzaPicture.allImages[leftIndex].url);
  leftPizzaImageTag.src = PizzaPicture.allImages[leftIndex].url;
  rightPizzaImageTag.src = PizzaPicture.allImages[rightIndex].url;
};


const pickNewPizzas = function(){
  const leftIndex = Math.floor(Math.random() * PizzaPicture.allImages.length);
  console.log('leftIndex', leftIndex);
  let rightIndex;
  do{
    rightIndex = Math.floor(Math.random() * PizzaPicture.allImages.length);
  } while(rightIndex === leftIndex);
  console.log(PizzaPicture.allImages[leftIndex].name + ' and ' + PizzaPicture.allImages[rightIndex].name);
  leftPizzaOnThePage = PizzaPicture.allImages[leftIndex];
  rightPizzaOnThePage = PizzaPicture.allImages[rightIndex];
  renderNewPizzas(leftIndex,rightIndex);
};




const handleClickOnPizza = function(event){
  console.log('Lets handle the click now... Still.');
  console.log('left pizza on the page. ', leftPizzaOnThePage);

  if( totalClicks < 5){
    

    const thingWeClickedOn = event.target;
    console.log('event target', event.target);
    const id = thingWeClickedOn.id;
    console.log('thingWeClickedOn', thingWeClickedOn);
    console.log('this is the id ddddd',id);

    if(id === 'left_pizza_img' || id === 'right_pizza_img'){
      
      if(id === 'left_pizza_img'){
        console.log('left pizza on the page.', leftPizzaOnThePage);
        leftPizzaOnThePage.clicks++;
      }
      if(id === 'right_pizza_img'){
        console.log('right pizza on the page.', rightPizzaOnThePage);

        rightPizzaOnThePage.clicks++;
      }
      console.log('left pizza on the page. ', leftPizzaOnThePage);
      leftPizzaOnThePage.timesShown++;
      rightPizzaOnThePage.timesShown++;
      pickNewPizzas();
    }
    console.log('is this running ',event.target.id);
  }
  totalClicks++;
  if(totalClicks === 5){
    pizzaImageSectionTag.removeEventListener('click', handleClickOnPizza);
    console.log('the vote has ended. and remove listener works. ');
  }

};


pizzaImageSectionTag.addEventListener('click', handleClickOnPizza);





new PizzaPicture('Brick Oven Pizza', 'images/brickOvenPizza.jpeg');
new PizzaPicture('Calzone', 'images/calzonePizza.jpeg');
new PizzaPicture('Chicago Deep Dish', 'images/chicagoPizza.jpeg');
new PizzaPicture('Chicago Pizza and Oven Grinder', 'images/cpoGinderPizza.jpeg');
new PizzaPicture('Detroit Style', 'images/detroitPizza.jpeg');
new PizzaPicture('Papa Vito\'s Thin', 'images/mwDeluxePizzaThinCrust.jpg');
new PizzaPicture('New York Thin', 'images/newYorkPizza.jpeg');
new PizzaPicture('Detroit Style', 'images/sgDansHtossedMeatLovPizza.jpg');


leftPizzaOnThePage = PizzaPicture.allImages[3];
rightPizzaOnThePage = PizzaPicture.allImages[0];


pickNewPizzas();