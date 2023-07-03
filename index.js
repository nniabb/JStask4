// TASK 1 ვერ გავიგე 




// TASK 2

function test (hours, minutes){
    if (hours >= 24 || hours<0){
        console.log("clock does not exist")
    } else if (minutes>=60 || minutes<0){
        console.log("clock does not exist")
    } else{
        console.log("VALID")
    }
}

test(5,10)

// TASK 3

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    } else {
        return n* factorial(n-1);
 }
}

console.log(factorial(4))