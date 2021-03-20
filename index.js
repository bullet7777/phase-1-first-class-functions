function receivesAFunction(callback){
    return callback()
}


function returnsANamedFunction(){
    function abc(){

    }
    return abc
}

function returnsAnAnonymousFunction(){

    return function(){
        
    }
}