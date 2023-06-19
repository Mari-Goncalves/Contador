import { getElements } from "./getElements.js"

function decrement(){

    let {counterNumber} = getElements()

    counterNumber.innerHTML --
}

export {decrement}