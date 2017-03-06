function swich_sheets(){
	    // appending a CSS stylesheet to head of webpage
		var link = document.createElement('link');
		// using rawgit.com MaxCDN.. files directly linked to git repo 
        link.href = "https://cdn.rawgit.com/sadhanareddy/css-changer-tool/sample.js"; //random version number removed bcoz some browser take it as text file and not as CSS.
    	link.type = "text/css";
    	link.rel = "stylesheet";
        document.getElementsByTagName('head')[0].appendChild(link);

        // appending a div to body of webpage
        var body = document.getElementsByTagName('body')[0];
        var css_container = document.createElement('div');
	    css_container.id = 'css-container';
	    body.appendChild(css_container);
	    //injecting html code
	    document.getElementById('css-container').innerHTML = "<ul id='annolet' class=annolet-tools-menu>"+
	    "<span id='annolet' style='border-radius:10px;  color:orange;font-weight:bold;font-family:monospace; font-size:1.3em'>AnnoLet!</span>"+
	    "<span id='annolet' style='color:grey;'>|</span>"+
	    "<li id='annolet' class=annolet-tools-menu-item id=highlight-btn onclick='annolet_btn=1;'>stylesheet1</li>"+
	    /*"<li id='annolet' class=annolet-tools-menu-item id=highlight-btn onclick='annolet_btn=2;'>Highlight</li>"+*/
	    "<li id='annolet' class=annolet-tools-menu-item id=highlight-btn onclick='annolet_btn=3;'>stylesheet2</li>"+
	    "</ul>"; //HTML to create a list of options
}