// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
  
}

function renderCheese() {
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
}

function renderTomatoes() {
  let tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
}

function renderOnions() {
  let onion = document.querySelector("#onion");
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
}



// Trial 2 - Setup event listener for the cheese button
function renderButtons(){
  let patty_button=document.querySelector(".btn-patty")
  if (state.Patty) {
    patty_button.classList.add("active")
  } else {
    patty_button.classList.remove("active")
  }

  let cheese_button=document.querySelector(".btn-cheese")
  if (state.Cheese) {
    cheese_button.classList.add("active")
  } else {
    cheese_button.classList.remove("active")
  }
  
  let tomatoes_button=document.querySelector(".btn-tomatoes")
  if (state.Tomatoes) {
    tomatoes_button.classList.add("active")
  } else {
    tomatoes_button.classList.remove("active")
  }

  let onion_button=document.querySelector(".btn-onions")
  if (state.Onions) {
    onion_button.classList.add("active")
  } else {
    onion_button.classList.remove("active")
  }

  let lettuce_button=document.querySelector(".btn-lettuce")
  if (state.Lettuce) {
    lettuce_button.classList.add("active")
  } else {
    lettuce_button.classList.remove("active")
  }



}




function renderIngredientsBoard(){
  let patty_item=document.getElementsByClassName("items")[0]
  if (state.Patty) {
    patty_item.textContent="Patty"
  } else {
    patty_item.textContent=""
  }
  let cheese_item=document.getElementsByClassName("items")[1]
  if (state.Cheese) {
    cheese_item.textContent="cheese"
  } else {
    cheese_item.textContent=""
  }
  let tomatoes_item=document.getElementsByClassName("items")[2]
  if (state.Tomatoes) {
    tomatoes_item.textContent="tomatoes"
  } else {
    tomatoes_item.textContent=""
  }
  let onions_item=document.getElementsByClassName("items")[3]
  if (state.Onions) {
    onions_item.textContent="onions"
  } else {
    onions_item.textContent=""
  }
  let lettuce_item=document.getElementsByClassName("items")[4]
  if (state.Lettuce) {
    lettuce_item.textContent="lettuce"
  } else {
    lettuce_item.textContent=""
  }
}
function renderPrice(){
  let prize=0
  if (state.Patty) {
    prize+=ingredients.Patty
  }
  if (state.Cheese) {
    prize+=ingredients.Cheese
  }
  if (state.Tomatoes) {
    prize+=ingredients.Tomatoes
  }
  if (state.Onions) {
    prize+=ingredients.Onions
  }
  if (state.Lettuce) {
    prize+=ingredients.Lettuce
  }
  let price=document.getElementsByClassName("price-details")[0]
  price.textContent=prize+20

}
