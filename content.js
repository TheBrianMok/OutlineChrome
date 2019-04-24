chrome.runtime.onMessage.addListener((message)=> {
    console.log(message);

    var outline = "http://outline.com/";
    var article = window.location.href;
    var redirect = outline + article;

    if (message) {
        window.open(redirect);
    }
    else {
        alert('Error:\n\nCannot Outline webpage.');
    }
});