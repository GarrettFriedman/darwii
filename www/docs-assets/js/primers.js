function primersCalculate(){
var ge = function(id){return document.getElementById(id);} //function to get element

var f = ge("FirstValue");
var s = ge("SecondValue");
var a1 = ge("Answer1");
var a2 = ge("Answer2");

a1.value = (100/((1000*(f.value / s.value))/5));
a2.value = (((1000*(f.value / s.value))/5));


}