var url = "http://www.phonemicchart.com/transcribe/";

document.querySelector('#Phonetic').addEventListener('click', function() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    alert(text);       

    var xhr = new XMLHttpRequest();
    data = "w="+text;
    alert(data);
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            var res = this.responseText;
            alert(res);
            // var json = JSON.parse(res);
            // if(json.code == 200) {
            //      document.querySelector('#textarea').innerHTML = json.text[0];
            //      alert("selected");
            // }
            // else {
            //      document.querySelector('#textarea').innerHTML = "Error Code: " + json.code;
            // }
        }
    }
}, false);

(function Translatebutton(){
     button = document.createElement("BUTTON");
     var text = document.createTextNode("Get Phonetic");
     button.id = 'Phonetic';
     button.appendChild(text);
     body = document.getElementsByTagName('body')[0];
     body.appendChild(button);
}());

(function createTextArea() {
    var output = document.createElement("TEXTAREA");
    output.id="textarea";
    var t = document.createTextNode("");
    output.appendChild(t);
    body = document.getElementsByTagName('body')[0];
    body.appendChild(output);
}());

// document.querySelector('#Phonetic').addEventListener('click', function() {
//     var url = "//localhost:5000/phonetic-translive";
//     var text = "";
//     if (window.getSelection) {
//         text = window.getSelection().toString();
//     } else if (document.selection && document.selection.type != "Control") {
//         text = document.selection.createRange().text;
//     }
//     alert(text);       

//     var xhr = new XMLHttpRequest();
//     xhr.open("POST",url,true);
//     xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//     xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
//     xhr.onreadystatechange = function() {
//         if (this.readyState==4 && this.status==200) {
//             var res = this.responseText;
//             alert(res);
//         }
//     }
// }, false);