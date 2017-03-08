function googleTranslateElementInit() {
new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

(function swich_button(){
     div = document.createElement('div');
     div.id = 'google_translate_element';
     body = document.getElementsByTagName('body')[0];
     body.appendChild(div);
}());

// funtion to disable all links
function disableAllLinks(){
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(false);};
    }
}