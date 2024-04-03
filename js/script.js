const shoppingList = ["latte", "biscotti", "pasta", "formaggio"];

// Create Element method

let listElem = document.querySelector(".shopping-list");
let i = 0;

// for (let i = 0; i < shoppingList.length; i++) 
while(i < shoppingList.length){
  const curItem = shoppingList[i]; // string

  const listItemElem = document.createElement("li"); // object
  listItemElem.innerHTML = curItem;
  console.log(listItemElem);

  listItemElem.addEventListener("click", function() {
    listItemElem.classList.toggle("done");
  });

  listElem.append(listItemElem);
  i++
}

const x = 4;
const y = 4;
console.log(x === y);

const array1 = [1,2,7,10];
const array2 = [1,2,7,10];

console.log(array1 === array2);