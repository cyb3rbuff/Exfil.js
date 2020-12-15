function getElements(){
    var elements = document.forms["checkout"].getElementsByTagName("input");
    var x = {};
    for(i of elements){
        x[i.id] = i.value
    }
    return x;
}


if (typeof(Worker) !== "undefined") {
    var form = document.querySelector('form');
    var input = document.querySelector('input[type="number"]');
    var result = document.querySelector('p#result');
    var worker = new Worker('demo-worker.js');

    worker.onmessage = function(event) {
      console.log('Got: ' + event.data + '\n');
    };

    worker.onerror = function(error) {
      console.log('Worker error: ' + error.message + '\n');
      throw error;
    };

    form.onsubmit = function(e) {
      e.preventDefault();
      worker.postMessage(input.value);
      input.value = '';
    }

  
} else {
  console.log("Web Worker Not Supported.")
}