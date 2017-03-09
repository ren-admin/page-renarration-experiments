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
(function disableAllLinks(){
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(false);};
    }
}());

//function to hide the elements onclicking anywhere on a web page
// $('body').click(function() {
//   	var text = $(event.target).text();
// })


$( "body" ).click(function( event ) {
  	alert( "clicked: " + event.target.nodeName );
  	event.target.nodeName.hide();
});