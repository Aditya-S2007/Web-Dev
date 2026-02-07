const max= prompt("enter the max number");
const random= Math.floor(Math.random()*max)+1;
let guess= prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log( "user quit");
        break;

    }
    if(guess==random){
        console.log("You guessed right",random);
        break;

    } else if(guess<random){
        guess=prompt("your guess was too small.try again");

    }else{
        guess=prompt("your guess was too large.try again");
    }
}
    
    
    
    
//     else{
//         guess=prompt("ur guess was wrong. pls try again");
//     }
