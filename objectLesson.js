/*
name spacing- js defaults to global so we can use some fancy things to avoid issues
literal syntax- fancy key value pairs
method definition- A JavaScript method is a property containing a function definition
value storage- look at the literal syntax
value accessing - access those values
for key in object- more loops brother
*/

//name spacing
//Single global variables
var myApplication =  (function () { 
    function funOne(){
        //...
    }
    return{
        //...
    }
})();
//Prefix namespacing
var myApplication_propertyA = {};
var myApplication_propertyB = {};
function myApplication_myMethod(){ 
//...
}
//Object literal notation
var myApplication = {

// As we've seen, we can easily define functionality for
// this object literal..
getInfo:function(){ 
  //...
},

// but we can also populate it to support 
// further object namespaces containing anything
// anything we wish:
models : {},
views : {
    pages : {}
},
collections : {}
};
//Nested namespacing
var myApp =  myApp || {};

// perform a similar existence check when defining nested 
// children
myApp.routers = myApp.routers || {};
myApp.model = myApp.model || {};
myApp.model.special = myApp.model.special || {};
//Immediately-invoked Function
// an (anonymous) immediately-invoked function expression
(function () { /*...*/})();

// a named immediately-invoked function expression
(function foobar () { /*..*/}());

// this is technically a self-executing function which is quite different
function foobar () { foobar(); } //<----This one is Recursion, which is related to fractals.
//Expressions

//Namespace injection
var myApp = myApp || {};
myApp.utils =  {};

(function () {
var val = 5;

this.getValue = function () {
  return val;
};

this.setValue = function( newVal ) {
  val = newVal;
}
  
// also introduce a new sub-namespace
this.tools = {};

}).apply( myApp.utils );  

// inject new behaviour into the tools namespace
// which we defined via the utilities module

(function () {
this.diagnose = function(){
    return "diagnosis";   
}
}).apply( myApp.utils.tools );

// note, this same approach to extension could be applied
// to a regular IIFE, by just passing in the context as 
// an argument and modifying the context rather than just
// "this"

// Usage:

// Outputs our populated namespace
console.log( myApp );

// Outputs: 5
console.log( myApp.utils.getValue() );

// Sets the value of `val` and returns it
myApp.utils.setValue( 25 ); 
console.log( myApp.utils.getValue() );

// Testing another level down
console.log( myApp.utils.tools.diagnose() );


//Literal Syntax

var myObject ={
myProperty : "value",
yourProperty : "value",
myMethod : function(){
  //code here
},
yourMethod : function(){
  //more code
}
}

//value accessing
console.log(myObject.myProperty);

//for key in object
for (var key in myObject) {
// skip loop if the property is from prototype
if (!myObject.hasOwnProperty(key)) continue;

var obj = myObject[key];
for (var prop in obj) {
    // skip loop if the property is from prototype
    if (!obj.hasOwnProperty(prop)) continue;

    // your code
    //alert(prop + " = " + obj[prop]);
}
}