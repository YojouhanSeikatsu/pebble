function getCookie(key) {
    return document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)')?.pop() || '';
}

window.onload = function() {
    if (getCookie("summerpockets") !== "best") {
        document.cookie = "summerpockets=best"; 
    }
}