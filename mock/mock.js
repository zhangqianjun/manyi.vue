var id1=require("./1.js");
var mainList=require("./list.js");
var person=require("./person.js");
var nodeList=require("./node.js");
var lang=require("./lang.js");
var user=require("./user.js");

module.exports=function(){
	return{
		"list":mainList,
		"person":person,
		"nodeList":nodeList,
		"lang":lang,
		"detailId1":id1,
		"user":user
	}
	
	
}
	

