function getElements() {

    let elements = {
        counterNumber: document.querySelector('#counter-number'),
        incrementButton: document.querySelector('#increment'),
        decrementButton: document.querySelector('#decrement')
    }

    return elements
}

export {getElements}
