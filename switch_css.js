// This functions creates two links tags, used to switch the css.
(function insertStylesheets(){
	var i= 0;
	var css_links = 2;
	var link_rel =['stylesheet', 'alternate stylesheet']
	var css_themes =['//rawgit.com/sadhanareddy/css-changer-tool/master/switch1.css',
	'//rawgit.com/sadhanareddy/css-changer-tool/master/switch2.css'];
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

// Creates buttons to switch the css on click event. 
(function createButton(){
	var i= 0;
	var buttons = 3;
	var text_node = ['Invert_css', 'Increase_font', 'Decrease_font'];
	var id = ['invert_css', 'increase_font', 'decrease_font'];
	for(i=0; i<buttons; i++){
		button_tag = document.createElement("BUTTON");
		text = document.createTextNode(text_node[i]);
		button_tag.id = id[i];
		button_tag.appendChild(text);
		body = document.getElementsByTagName('body')[0];
		body.appendChild(button_tag);
	}
}());

document.getElementById('invert_css').addEventListener('click', function() {
	switch_style('switch1')
}, false);
// document.getElementById('change_font').addEventListener('click', function() {
// 	switch_style('switch2')
// }, false);


(function changeFontsize(){
	var fontSize = parseInt($('body').css('font-size'),10);
    $('increase_font').on('click',function(){
        fontSize+=0.5;
        $('body').css('font-size',fontSize+'px');
    })
    $('decrease_font').on('click',function(){
        fontSize-=0.5;
        $('body').css('font-size',fontSize+'px');
    })
}());


var style_cookie_name = "style";
var style_cookie_duration = 30;
var style_domain = "www.vlabs.ac.in";

function switch_style (css_title)
{	
	alert(css_title);
  	var i;
  	var linktag = document.getElementsByTagName("link");

  	for (i = 0; i < linktag.length; i++ ) {
		if ((linktag[i].rel.indexOf( "stylesheet" ) != -1) &&linktag[i].title) {
		  	linktag[i].disabled = true ;
		  	if (linktag[i].title == css_title) {
		    	linktag[i].disabled = false ;
		  	}
		}
	set_cookie( style_cookie_name, css_title, style_cookie_duration, style_domain );
  	}
}

function set_cookie ( cookie_name, cookie_value, lifespan_in_days, valid_domain )
{
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
    alert(document.cookie);
}

function get_cookie ( cookie_name )
{
    var cookie_string = document.cookie ;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match (
                        '(^|;)[\s]*' +
                        cookie_name +
                        '=([^;]*)' );
        return decodeURIComponent ( cookie_value[2] ) ;
    }
    return '' ;
}

function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}

window.onload=function () {
	insertStylesheets()
	createButton()
	set_style_from_cookie()
}


