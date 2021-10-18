//1)findUserByUsername
//Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

//Had to loook at solution

function findUserByUsername(arr, str){
    return arr.find(function(val){
    return val.str === str;
    })
    }
    
    
    
    //2)removeUser
    //Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array and return this object. If the object is not found, return undefined.
    
    //Had to loook at solution
    
    function removeUser(arr, str){
        let IndexF = arr.findIndex(function(str){
            return val.str === str;
        })
        if(IndexF === -1) return;
        return arr.splice(IndexF,1)[0]
    }
    
    
    
    
    