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


// (function swich_button(){
//      // appending a CSS stylesheet to head of webpage
//      var button = document.createElement('button');
//      // button.onclick = ; 
//      button.type = "button";
//      // appending a div to body of webpage
//      var body = document.getElementsByTagName('body')[0];
//      var css_container = document.createElement('div');
//      css_container.id = 'css-container';
//      body.appendChild(css_container);
//      //injecting html code
//      document.getElementsByTagName('css_container').appendChild(button); = button;
// }());