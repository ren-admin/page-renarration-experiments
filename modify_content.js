(function setAttr() {
	var all = document.getElementsByTagName("*");
	for (var i=0, max=all.length; i < max; i++) {
        all[i].setAttribute("contenteditable", true);
        all[i].setAttribute("class", "edit");
		all[i].setAttribute("title", "editext");
	}
}());

function saveEdits() {

	//get the editable element
	var editElem = document.getElementsByClassName("edit");

	//get the edited element content
	var userVersion = editElem.innerHTML;

	//save the content to local storage
	localStorage.userEdits = userVersion;

	//write a confirmation to the user
	document.getElementById("update").innerHTML="Edits saved!";

}

function checkEdits() {
	//find out if the user has previously saved edits
	if(localStorage.userEdits!=null)
	document.getElementById("edit").innerHTML = localStorage.userEdits;
}

// window.onload={
// 	setAttr()
// 	checkEdits()
// }

(function createDiv(){
     div = document.createElement('div');
     var text = document.createTextNode('- Edit the text and click to save for next time');
     div.id = 'update';
     body = document.getElementsByTagName('body')[0];
     body.appendChild(div);
}());

(function Savebutton(){
     button = document.createElement("BUTTON");
     var text = document.createTextNode("Save Edits");
     button.appendChild(text);
     body = document.getElementsByTagName('body')[0];
     body.appendChild(button);
}());