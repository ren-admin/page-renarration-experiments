// (function (){
// 	link_no = 0;
// 	if(link_no == 0){
// 		link = document.createElement('link');
// 	    link.rel  = 'stylesheet';
// 	    link.type = 'text/css';
// 	    link.href = 'switch1.css';
// 	    link.title= 'switch1';
// 	    head  = document.getElementsByTagName('head')[0];
// 	    head.appendChild(link);
// 	    link_no++;
// 	}
// 	else if(link_no == 1){
// 		link = document.createElement('link');
// 	    link.rel  = 'alternate stylesheet';
// 	    link.type = 'text/css';
// 	    link.href = 'switch2.css';
// 	    link.title= 'switch2';
// 	    head  = document.getElementsByTagName('head')[0];
// 	    head.appendChild(link);
// 	    link_no++;
// 	}
// }());



// *** TO BE CUSTOMISED ***

// var style_cookie_name = "style" ;
// var style_cookie_duration = 30 ;
// var style_domain = "www.vlabs.ac.in" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

// switch_style('switch1')

// function switch_style (css_title)
// {
//   	alert("hello");
//   	var i,linktag;
//   	linktag = document.getElementsByTagName("link");

//   	for (i = 0; i < linktag.length; i++ ) {
// 		if ((linktag[i].rel.indexOf( "stylesheet" ) != -1) &&linktag[i].title) {
// 		  	linktag[i].disabled = true ;
// 		  	if (linktag[i].title == css_title) {
// 		    	linktag[i].disabled = false ;
// 		    	alert(linktag[i])
// 		  	}
// 		}
// 	// set_cookie( style_cookie_name, css_title,style_cookie_duration, style_domain );
//   	}
// }


// function set_style_from_cookie()
// {
//   var css_title = get_cookie( style_cookie_name );
//   if (css_title.length) {
//     switch_style( css_title );
//   }
// }

// function set_cookie ( cookie_name, cookie_value, lifespan_in_days, valid_domain )
// {
//     var domain_string = valid_domain ?
//                        ("; domain=" + valid_domain) : '' ;
//     document.cookie = cookie_name +
//                        "=" + encodeURIComponent( cookie_value ) +
//                        "; max-age=" + 60 * 60 *
//                        24 * lifespan_in_days +
//                        "; path=/" + domain_string ;
// }

// function get_cookie ( cookie_name )
// {
//     var cookie_string = document.cookie ;
//     if (cookie_string.length != 0) {
//         var cookie_value = cookie_string.match (
//                         '(^|;)[\s]*' +
//                         cookie_name +
//                         '=([^;]*)' );
//         return decodeURIComponent ( cookie_value[2] ) ;
//     }
//     return '' ;
// }

// This functions creates two links tags, used to switch the css.
(function insertStylesheets(){
	var i= 0;
	var css_links = 2;
	var link_rel =['stylesheet', 'alternate stylesheet']
	var css_themes =['switch1.css', 'switch2.css'];
	link_title =['switch1', 'switch2'];
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
	var buttons = 2;
	var text_node = ['Invert_css', 'Change_font'];
	var id = ['invert_css', 'change_font'];
	for(i=0; i<buttons; i++){
		button_tag = document.createElement("BUTTON");
		text = document.createTextNode(text_node[i]);
		button_tag.id = id[i];
		button_tag.appendChild(text);
		button_tag.addEventListener("click", switch_style(link_title[i]), false);
		//button_tag.addEventListener("click", hello, false);
		body = document.getElementsByTagName('body')[0];
		body.appendChild(button_tag);
	}
}());


var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;
var style_domain = "www.vlabs.ac.in" ;


function switch_style (css_title)
{	
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
}

function get_cookie ( cookie_name )
{
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}


window.onload = function () {
      alert("LOADED!");
      //set_style_from_cookie()
}