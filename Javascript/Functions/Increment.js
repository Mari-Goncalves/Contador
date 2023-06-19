import { getElements } from "./GetElements.js"

function increment(){

    let {counterNumber} = getElements()

    counterNumber.innerHTML ++
}

export {increment}