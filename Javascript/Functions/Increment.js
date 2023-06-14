import { getElements } from "./getElements"

function increment(){

    let {counterNumber} = getElements()

    counterNumber.innerHTML ++
}

incrementButton.onclick = ('click', increment)

