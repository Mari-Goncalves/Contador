import { getElements } from "./getElements.js"

function increment(){

    let {counterNumber} = getElements()

    counterNumber.innerHTML ++
}

export {increment}