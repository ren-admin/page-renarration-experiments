// This functions creates two link tags, for switching the style sheets.
(function alternate_stylesheets(){
	var i= 0;
	var css_links = 2;
	var link_rel =['stylesheet', 'alternate stylesheet'] 
	var css_themes =['https://rawgit.com/sadhanareddy/css-changer-tool/master/switch1.css',
	'https://github.com/sadhanareddy/css-changer-tool/blob/master/switch2.css'];
	var link_title =['switch1', 'switch2'];

	for(i=0; i<css_links; i++){
		link = document.createElement('link');
	    link.rel  = link_rel[i];
	    link.type = 'text/css';
	    link.href = css_themes[i];
	    link.title= link_title[i];
	    head  = document.getElementsByTagName('head')[0];
	    head.appendChild(link);
	}
}());

/* This function creates a continer div which lets the users interact with app. When switchcssContainer
is called, it injects CSS stylesheet into <head> element of website to stylize the container and
<div id=css-container>...</div> whose inner HTML is a list of buttons inside body. */

(function switchcss_container(){
	// appending a CSS stylesheet to head of webpage
    // var link = document.createElement('link');
    // // using rawgit.com MaxCDN.. files directly linked to git repo 'annoletjs/master'
    // link.rel = "stylesheet";
    // link.type = "text/css";
    // link.href = "https://rawgit.com/sadhanareddy/css-changer-tool/master/annolet.css"; //random version number removed bcoz some browser take it as text file and not as CSS.
   	// document.getElementsByTagName('head')[0].appendChild(link);

	// appending a div to body of webpage
    var body = document.getElementsByTagName('body')[0];
    var switchcss_container = document.createElement('div');
    switchcss_container.id = 'switchcss-container';
    body.appendChild(switchcss_container);

    //appending buttons into the div inner HTML
	var i= 0;
	var buttons = 3;
	var text_node = ['Theme_1', 'Theme_2', 'Theme_3'];
	var button_id = ['theme_1', 'theme_2','theme_3'];
	for(i=0; i<buttons; i++){
		button_tag = document.createElement("BUTTON");
		text = document.createTextNode(text_node[i]);
		button_tag.id = button_id[i];
		button_tag.appendChild(text);
		document.getElementById('switchcss_container').appendChild(button_tag);
	}
}());

document.getElementById('theme_1').addEventListener('click', function() {
	switch_style('switch1')
}, false);
document.getElementById('theme_2').addEventListener('click', function() {
	switch_style('switch2')
}, false);

// document.getElementById('theme_3').addEventListener('click', function() {
// 	setbackground()
// }, false);





