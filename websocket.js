const form = document.getElementById('checkout');
var saveData = JSON.parse(localStorage.saveData || null) || {};
form.onsubmit = submit;


if (window.WebSocket === undefined) {
    console.log("sockets not supported")
}else {
    if (typeof String.prototype.startsWith != "function") {
        String.prototype.startsWith = function (str) {
        return this.indexOf(str) == 0;
        };
    }
    
    window.addEventListener("load", onLoad, false);
}

function getElements(){
    var elements = document.forms["checkout"].getElementsByTagName("input");
    var x = {};
    for(i of elements){
        x[i.id] = i.value
    }
    return x;
}

function onLoad() {
    var wsUri = "ws://127.0.0.1:7777";
    websocket = new WebSocket(wsUri);
}

function submit(event) {
    console.log(JSON.stringify(getElements()));
    websocket.send(JSON.stringify(getElements()));
}