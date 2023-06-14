import { getElements } from "./getElements"

function decrement(){

    let {counterNumber} = getElements()

    counterNumber.innerHTML --
}

let {decrementButton} = getElements()

decrementButton.addEventListener('click', decrement)
