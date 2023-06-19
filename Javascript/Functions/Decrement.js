import { getElements } from "./GetElements.js"

function decrement(){

    let {counterNumber} = getElements()

    counterNumber.innerHTML --
}

export {decrement}