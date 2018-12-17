// JavaScript Document
function addElement(){
	var node = document.createElement('<input type="file" id="myFile">');
	var textnode = document.createTextNode("hola");
	node.appendChild(textnode);
	document.getElementsByTagName("body").appendChild(node);

}