function escapeFunctionScript(text)
{
	text = text.replace(/\\/gm, "\\\\");
	text = text.replace(/\n/gm, "\\n");
	text = text.replace(/\r/gm, "\\r");
	text = text.replace(/'/gm, "\\'");
	
	return text;	
}

var source =  document.all[0].outerHTML;

if (!source) {
	source =  "<html>\r\n" + document.all[0].innerHTML + "\r\n</html>";
}
    
agate.runScript("function.popupSource('"+  escapeFunctionScript(source) + "')");




/*
function escapeFunctionScript(text)
{
	text = text.replace(/\\/gm, "\\\\");
	text = text.replace(/\n/gm, "\\n");
	text = text.replace(/\r/gm, "\\r");
	text = text.replace(/'/gm, "\\'");
	
	return text;	
}

var source =  document.all[0].outerHTML;

if (!source) {
	source =  "<html>\r\n" + document.all[0].innerHTML + "\r\n</html>";
}
    escapeFunctionScript(source) 
	source.indexof("���伥");
agate.runScript("function.popupSource('"+  escapeFunctionScript(source) + "')");

document.getElementsByTagName("title")["0"].innerText

http://nikemania.com/bbs/bbs_list.php?bbs=popbbs4
[101].attributes.id.ownerDocument.documentURI
source.indexof("���伥");



var value = "����";
source.indexOf(value);
source.indexOf(value, source.indexOf(value)+1);
if(source.indexOf(value) >= 0){
	source.substr(source.indexOf(value), source.indexOf("<", source.indexOf(value))-source.indexOf(value)		);
}
*/
