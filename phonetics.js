// var url = "",
// keyAPI = "";

// document.querySelector('#Phonetic').addEventListener('click', function() {
//     var text = "";
//     if (window.getSelection) {
//         text = window.getSelection().toString();
//     } else if (document.selection && document.selection.type != "Control") {
//         text = document.selection.createRange().text;
//     }
//     alert(text);       

//     var xhr = new XMLHttpRequest(),
//         // textAPI = document.querySelector('#source').value,
//         data = "key="+keyAPI+"&text="+text;
//         alert(data)

//     xhr.open("POST",url,true);
//     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     xhr.send(data);
//     xhr.onreadystatechange = function() {
//         if (this.readyState==4 && this.status==200) {
//             var res = this.responseText;
//             alert(res);
//             //document.querySelector('#json').innerHTML = res;
//             var json = JSON.parse(res);
//             if(json.code == 200) {
//                 //document.querySelector('#output').innerHTML = json.text[0];
//                 //text= json.text[0];
//                  // if (document.selection && document.selection.createRange) {
//                  //      // range = document.selection.createRange();
//                  //      // //range.text = json.text[0];
//                  //      // range.pasteHTML(json.text[0]);
//                  //      alert(document.selection.createRange);
//                  //      alert(selected);
//                  //  }
//                  //document.selection.createRange().text = json.text[0];
//                  document.querySelector('#textarea').innerHTML = json.text[0];
//                  alert("selected");
//             }
//             else {
//                 //document.querySelector('#output').innerHTML = "Error Code: " + json.code;
//                 // text= "Error Code: " + json.code;
//                 alert("select text");
//             }
//         }
//     }
// }, false);

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

document.querySelector('#Phonetic').addEventListener('click', function() {
    var url = "//localhost:5000/phonetic-translive";
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    alert(text);       

    var xhr = new XMLHttpRequest();
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            var res = this.responseText;
            alert(res);
        }
    }
}, false);