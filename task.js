var numbers = new Array();

function leftin() {
    var num = document.getElementById("num-input").value;
    if (num == "") {
        alert("Input something");
    } else {
        numbers.unshift(num);
    }
    document.getElementById("num-input").value = "";
    console.log(numbers);
    render();
}

function rightin() {
    var num = document.getElementById("num-input").value;
    if (num == undefined) {
        alert("Input something");
    } else {
        numbers.push(num);
    }
    document.getElementById("num-input").value = "";
    console.log(numbers);
    render();
}

function leftout() {
    var num = numbers[0];
    if (num == undefined) {
        alert("Empty in the quere");
    } else {
        numbers.shift();
        alert("The left out number is " + num);
    }
    console.log(numbers);
    render();
}

function rightout() {
    var num = numbers[numbers.length - 1];
    if (num == "") {
        alert("Empty in the quere");
    } else {
        numbers.pop();
        alert("The right out number is " + num);

    }
    console.log(numbers);
    render();
}

function mkdiv() {
    var nwdiv = document.createElement("div");
    nwdiv.className += "number";
    return nwdiv;
}

function render() {
    document.getElementById("wrap").innerHTML = "";
    for (var i = 0; i < numbers.length; i++) {
        var element = mkdiv();
        element.innerHTML = "<span>" + numbers[i] + "</span>";
        element.addEventListener("click", function () {
            clDelete(this)
        }, false);
        document.getElementById("wrap").appendChild(element);
    }
}

function clDelete(evt) {
    if (window.event) {
        evt = window.event;
        var element = evt.target;
    }else{
        var element = evt;
    }
    console.log(element.nodeName);
    var value;
    if (element.nodeName == "DIV") {
        value = element.getElementsByTagName("span")[0].innerHTML;
    }
    if (element.nodeName == "SPAN") {
        value = element.innerHTML;
    }
    var ind = numbers.indexOf(value);
    numbers.splice(ind, 1);
    alert("The kicked out number was " + value);
    render();

}

function init() {
    console.log(numbers);
    document.getElementById("leftin").addEventListener("click", function () {
        leftin()
    }, false);
    document.getElementById("rightin").addEventListener("click", function () {
        rightin()
    }, false);
    document.getElementById("leftout").addEventListener("click", function () {
        leftout()
    }, false);
    document.getElementById("rightout").addEventListener("click", function () {
        rightout()
    }, false);
    render();
}

window.onload = function () {
    init()
};
