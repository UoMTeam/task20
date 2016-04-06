var strings = new Array();

function readInput() {
    var txt = "";
    txt = document.getElementById("input").value;
    var t = txt.trim().replace(/[,|.|;| |、|　|，|，|。|    |\s]+/g, "\n");
    strings = t.split("\n");
    if (strings.length == 1 && strings[0] == "") {
        alert("Put something Plz");
    } else {
        displayInput();
        document.getElementById("input").value = "";
    }
}

function displayInput() {
    var output = "";
    var element = document.getElementById("output");
    for (var i = 0; i < strings.length; i++) {
        output += "<p class=''>" + strings[i] + "</p>";
    }
    element.innerHTML = output;
}

function match() {
    var txt = "";
    var element = document.getElementById("matchIn");
    var output = "";
    var count = 0;
    if (strings.length == 0 || element.value == "") {
        alert("Make some Input first");
        element.value = "";
    } else {
        txt = element.value;
        var re = RegExp(txt, "g");
        for (var i = 0; i < strings.length; i++) {
            if (strings[i].match(re)) {
                output += "<p class='mat'>" + strings[i] + "</p>";
                count++;
            } else {
                output += "<p>" + strings[i] + "</p>";
            }
        }
        if (count == 0) {
            alert("There is no match");
        } else {
            alert("There is(are) " + count + " match(es)");
        }
        document.getElementById("output").innerHTML = output;
    }
}
/* Bindding element with functions*/
function init() {
    document.getElementById("process").addEventListener("click", function () {
        readInput()
    }, false);
    document.getElementById("doMatch").addEventListener("click", function () {
        match()
    }, false);
}
window.onload = function () {
    init()
};
