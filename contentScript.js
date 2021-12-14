console.log('hi');
let element1 = document.querySelector("#primary > ytd-rich-grid-renderer");
if (element1 !== null) {
    element1.style.display = "none";
}


/**
 * Remove video related videos
 */
let element2 = document.querySelector("#columns > #secondary");
if (element2 !== null) {
    element2.style.display = "none";
}