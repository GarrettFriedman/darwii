function primersCalculate(){
var ge = function(id){return document.getElementById(id);} //function to get element

var f = ge("FirstValue");
var s = ge("SecondValue");
var a = ge("Answer");

a.value = f.value * s.value;

}