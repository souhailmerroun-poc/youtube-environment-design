console.log('hi from content script');

chrome.storage.sync.get('checkboxEnabledState', function (data) {
    console.log(data)

    if (data.checkboxEnabledState === true) {
        let element = document.querySelector("#primary > ytd-rich-grid-renderer");
        element.style.display = "none"
    }
    else {
        //do nothing
    }
});