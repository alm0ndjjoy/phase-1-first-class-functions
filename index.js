// const recievesAFunction = () =>{

// }

// recievesAFunction(function (){

// }



// )

function receivesAFunction (callbackFunction){

    return callbackFunction();
}


function returnsANamedFunction(){

    return function callbackFunction(){
        
    }
}

function returnsAnAnonymousFunction (){

    return function(){

    }

}
