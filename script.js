function uniCharCode(event) {
    var char = event.which || event.keyCode;
    document.getElementById("demo").innerHTML = "Unicode character code is " + char;
}

function uniKeyCode(event) {
    var key = event.keyCode;
    document.getElementById("demo2").innerHTML = "Unicode key code is " + key;
}

document.onkeydown = function(e) {
    e = e || window.event;
    document.getElementById("demo").innerHTML = "Unicode character code is " + char;

}