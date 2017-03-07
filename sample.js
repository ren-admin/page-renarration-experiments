// function swich_sheets(){
// 	    // appending a CSS stylesheet to head of webpage
// 		var link = document.createElement('link');
// 		// using rawgit.com MaxCDN.. files directly linked to git repo 
//         link.href = "https://cdn.rawgit.com/sadhanareddy/css-changer-tool/annolet.css"; //random version number removed bcoz some browser take it as text file and not as CSS.
//     	link.type = "text/css";
//     	link.rel = "stylesheet";
//         document.getElementsByTagName('head')[0].appendChild(link);

//         // appending a div to body of webpage
//         var body = document.getElementsByTagName('body')[0];
//         var css_container = document.createElement('div');
// 	    css_container.id = 'css-container';
// 	    body.appendChild(css_container);
// 	    //injecting html code
// 	    document.getElementById('css-container').innerHTML = "<ul id='annolet' class=annolet-tools-menu>"+
//     	"<span id='annolet' style='border-radius:10px;  color:orange;font-weight:bold;font-family:monospace; font-size:1.3em'>AnnoLet!</span>"+
//     	"<span id='annolet' style='color:grey;'>|</span>"+
//     	"<li id='annolet' class=annolet-tools-menu-item id=highlight-btn onclick='annolet_btn=1;'>stylesheet_1</li>"+
//     	/*"<li id='annolet' class=annolet-tools-menu-item id=highlight-btn onclick='annolet_btn=2;'>Highlight</li>"+*/
//     	"<li id='annolet' class=annolet-tools-menu-item id=highlight-btn onclick='annolet_btn=3;'>stylesheet_2</li>"+
//     	"<li id='annolet' class=annolet-tools-menu-item id=highlight-btn onclick='annolet_btn=4;'>stylesheet_3</li>"+
// 		"<li id='annolet' class=annolet-tools-menu-item id=exit-btn onclick='annolet_btn=0;'>exit</li>"+
//     	"</ul>"; //HTML to create a list of options //HTML to create a list of options
// }

(function () { 
// the css we are going to inject
var css = 'html {-webkit-filter: invert(100%);' +
    '-moz-filter: invert(100%);' + 
    '-o-filter: invert(100%);' + 
    '-ms-filter: invert(100%); }',

head = document.getElementsByTagName('head')[0],
style = document.createElement('style');

// a hack, so you can "invert back" clicking the bookmarklet again
if (!window.counter) { window.counter = 1;} else  { window.counter ++;
if (window.counter % 2 == 0) { var css ='html {-webkit-filter: invert(0%); -moz-filter:    invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }'}
 };

style.type = 'text/css';
if (style.styleSheet){
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}

//injecting the css to the head
head.appendChild(style);
}());


(function swich_button(){
     // appending a CSS stylesheet to head of webpage
     var button = document.createElement('button');
     // button.onclick = ; 
     button.type = "button";
     // appending a div to body of webpage
     var body = document.getElementsByTagName('body')[0];
     var css_container = document.createElement('div');
     css_container.id = 'css-container';
     body.appendChild(css_container);
     //injecting html code
     document.getElementsByTagName('css_container').appendChild(button); = button;
}());