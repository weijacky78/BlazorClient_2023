

window.consoleMessage = (message, type) => {
    console.log(message, type);
}

window.addInts = (a, b, el) => {
    r = a + b;
    el.innerHTML = (r);
    return r;
}