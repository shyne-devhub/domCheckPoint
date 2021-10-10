let removeCartItem = document.getElementsByClassName("deletion")

let count = 0
let countEl = document.getElementById("count-el")
let countEe = document.getElementById("count-e")
// let removeCartItem = document.getElementsByClassName("deletion")
console.log(removeCartItem)

for(let i = 0; i < removeCartItem.length; i++){
    let binOut = removeCartItem[i]
    binOut.addEventListener("click", function(event){
let buttonClicked = event.target
buttonClicked.parentElement.parentElement.remove();
})   
}

function incrementBtn1(){
    count += 1;
    countEl.textContent = count
}

function decrementBtn1(){
     count -=1
      countEl.textContent = count
}
function incrementBtn2(){
    count += 1;
    countEe.textContent = count
}

function decrementBtn2(){
     count -=1
      countEe.textContent = count
}


