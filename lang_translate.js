// funtion to disable all links
(function disableAllLinks(){
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(false);};
    }
}());

function googleTranslateElementInit() {
new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

(function swich_button(){
     div = document.createElement('div');
     div.id = 'google_translate_element';
     body = document.getElementsByTagName('body')[0];
     body.appendChild(div);
}());

(function Translatebutton(){
     button = document.createElement("BUTTON");
     var text = document.createTextNode("Translate");
     button.id = 'translate';
     button.appendChild(text);
     body = document.getElementsByTagName('body')[0];
     body.appendChild(button);
}());

(function selectList(){
      //Create array of options to be added
      var array = ["telugu","hindi", "malayalam"];
      var options = ["te", "hi", "ml"];
      //Create and append select list
      var selectList = document.createElement("select");
      selectList.setAttribute("id", "lang");
      selectList.setAttribute("name", "to");
      body = document.getElementsByTagName('body')[0];
      body.appendChild(selectList);
      //Create and append the options
      for (var i = 0; i < array.length; i++) {
          var option = document.createElement("option");
          option.setAttribute("value", options[i]);
          option.text = array[i];
          selectList.appendChild(option);
      }
}());

(function createTextArea() {
    var output = document.createElement("TEXTAREA");
    output.id="textarea";
    var t = document.createTextNode("");
    output.appendChild(t);
    body = document.getElementsByTagName('body')[0];
    body.appendChild(output);
}());

var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
keyAPI = "trnsl.1.1.20170315T015859Z.3e04bd9bd31f6f00.99aa35ddf89167a86f5a892014edf632e9cef14f";

document.querySelector('#translate').addEventListener('click', function() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    alert(text);       

    var xhr = new XMLHttpRequest(),
        // textAPI = document.querySelector('#source').value,
        langAPI = document.querySelector('#lang').value
        alert(langAPI)
        data = "key="+keyAPI+"&text="+text+"&lang="+langAPI;
        alert(data)

    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            var res = this.responseText;
            alert(res);
            //document.querySelector('#json').innerHTML = res;
            var json = JSON.parse(res);
            if(json.code == 200) {
                //document.querySelector('#output').innerHTML = json.text[0];
                //text= json.text[0];
                 // if (document.selection && document.selection.createRange) {
                 //      // range = document.selection.createRange();
                 //      // //range.text = json.text[0];
                 //      // range.pasteHTML(json.text[0]);
                 //      alert(document.selection.createRange);
                 //      alert(selected);
                 //  }
                 //document.selection.createRange().text = json.text[0];
                 document.querySelector('#textarea').innerHTML = json.text[0];
                 alert("selected");
            }
            else {
                //document.querySelector('#output').innerHTML = "Error Code: " + json.code;
                // text= "Error Code: " + json.code;
                alert("select text");
            }
        }
    }
}, false);


// $("body").click(function(event){
//       console.log(event.target);
//       targetElem= event.target;
//       targetElem.style.visibility="hidden";
// });





// $('img').each(function () {
//   $(this).replaceWith(
//     $(this).attr('alt')
//   );
// });