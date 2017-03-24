// (function (){
// 		link = document.createElement('link');
// 	    link.rel  = 'stylesheet';
// 	    link.type = 'text/css';
// 	    link.href = 'switch1.css';
// 	    link.title= 'switch1';
// 	    head  = document.getElementsByTagName('head')[0];
// 	    head.appendChild(link);
// }());

// *** TO BE CUSTOMISED ***

// var style_cookie_name = "style" ;
// var style_cookie_duration = 30 ;
// var style_domain = "www.vlabs.ac.in" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

switch_style()

function switch_style ()
{
  	alert("hello");
  	var i,linktag;
  	linktag = document.getElementsByTagName("link");

  	for (i = 0; i < linktag.length; i++ ) {
  		alert(linktag.length);
  		alert(linktag)
  		console.log(linktag);
  		alert(linktag[i]);
  		console.log(linktag[i]);
  		// alert("hello world");
	// 	if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&link_tag[i].title) {
	// 	  	link_tag[i].disabled = true ;
	// 	  	if (link_tag[i].title == css_title) {
	// 	    	link_tag[i].disabled = false ;
	// 	    	alert(link_tag[i])
	// 	  	}
	// 	}
	// set_cookie( style_cookie_name, css_title,style_cookie_duration, style_domain );
  	}
}


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
