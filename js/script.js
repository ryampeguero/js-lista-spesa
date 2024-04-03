const shoppingList = ["latte", "biscotti", "pasta", "formaggio"];

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
