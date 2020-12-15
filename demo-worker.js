var results = [];

function resultReceiver(event) {
    results.push(parseInt(event.data));
    if (results.length == 2) {
        postMessage(results[0] + results[1]);
    }
}

function errorReceiver(event) {
    throw event.data;
}

onmessage = function(event) {
    var url = "http://127.0.0.1:8000";
    var params = `c=${JSON.stringify(event.data)}`;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
};
