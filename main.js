let red = document.querySelector(".red");
let orange = document.querySelector(".orange");
let green = document.querySelector(".green");
let body = document.querySelector("body")

red.onclick = function () {
    if (body.classList.contains('redd')) {
        body.classList.remove("redd")
        body.classList.remove("greenn")
        body.classList.remove("orangee")
    } else {
        body.classList.add("redd")
    }
}
orange.onclick = function () {
    if (body.classList.contains('orangee')) {
        body.classList.remove("orangee")
        body.classList.remove("redd")
        body.classList.remove("greenn")
    } else {
        body.classList.add("orangee")
    }
}
green.onclick = function () {
    if (body.classList.contains('greenn')) {
        body.classList.remove("greenn")
        body.classList.remove("orangee")
        body.classList.remove("redd")
    } else {
        body.classList.add("greenn")
    }
}