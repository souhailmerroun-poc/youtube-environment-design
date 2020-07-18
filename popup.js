let HTMLElementInputCheckbox = document.getElementById('inputCheckboxEnabled');

chrome.storage.sync.get('checkboxEnabledState', function (data) {
    HTMLElementInputCheckbox.checked = data.checkboxEnabledState;
    console.log(data)
});

HTMLElementInputCheckbox.onclick = function (element) {
    console.log('ahoy! that a click')
    chrome.storage.sync.set({ checkboxEnabledState: true }, function () {
        console.log("The checkboxEnabledState was set to true");
    });
};