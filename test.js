function calculateNumbers(var1, var2) {
    console.console.log(var1 + ", " + var2);
}

function factorial(var1) {  
    //Function to calculate factorial of var1
    if (var1 === 0) {
        return 1;
    }   
    return var1 * factorial(var1-1);    
}