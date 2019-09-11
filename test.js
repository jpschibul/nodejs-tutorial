//normal function statement
function sayHi(){
    console.log('hi');
    }
    sayHi();

    //function expresseion
var sayBye = function(){//no name, anonymous function

	console.log('bye');
};


sayBye();

//save function and use another function as parameter
function callFunction(fun){
	fun();
}

callFunction(sayBye);