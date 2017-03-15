// function googleTranslateElementInit() {
// new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
// }

// (function swich_button(){
//      div = document.createElement('div');
//      div.id = 'google_translate_element';
//      body = document.getElementsByTagName('body')[0];
//      body.appendChild(div);
// }());


// function get_languagetrans(str,fr,to){

//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "//localhost:5000/language-translive", true); // replace localhost afterwards
//   xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//   xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
//   xhr.send(JSON.stringify({"sentence":str,"from-language":fr,"to-language":to}));

//   xhr.onreadystatechange = processRequest;

//   function processRequest(e)
//   {
//     if (xhr.readyState == 4)
//     {
//       console.log('language trans set');
//       language_trans = xhr.responseText;
//     }
//   }

// }

// funtion to disable all links
(function disableAllLinks(){
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(false);};
    }
}());

(function Translatebutton(){
     button = document.createElement("BUTTON");
     text = document.createTextNode("Translate");
     button.id = 'translate';
     button.appendChild(text);
     body = document.getElementsByTagName('body')[0];
     body.appendChild(button);
}());

(function selectList(){
      //Create array of options to be added
      var array = ["Hindi","english"];
      var options = ["hi", "en"];
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

var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
    keyAPI = "trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8";

document.querySelector('#translate').addEventListener('click', function() {
    var xhr = new XMLHttpRequest(),
        textAPI = document.querySelector('#source').value,
        langAPI = document.querySelector('#lang').value
        data = "key="+keyAPI+"&text="+textAPI+"&lang="+langAPI;
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            var res = this.responseText;
            document.querySelector('#json').innerHTML = res;
            var json = JSON.parse(res);
            if(json.code == 200) {
                document.querySelector('#output').innerHTML = json.text[0];
            }
            else {
                document.querySelector('#output').innerHTML = "Error Code: " + json.code;
            }
        }
    }
}, false);