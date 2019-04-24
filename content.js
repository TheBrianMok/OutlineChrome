chrome.runtime.onMessage.addListener((message)=> {
    console.log(message);

    var outline = "http://outline.com/";
    var article = window.location.href;
    var redirect = outline + article;
    var error = "https://outline.com/error";

    if (message) {
        window.open(redirect);
    }
    else {
        window.open(error);
    }
});