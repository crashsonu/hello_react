// get a grade

let gradeGater = function(percentage){
    if (percentage <= 35){
        console.log('You are failed')
    }
    else if (percentage>35 && percentage <=60){
        console.log('You have "C" grade')
    }
    else if (percentage>60 && percentage <=80){
        console.log('You have "B" grade')
    }
    else{
        console.log('you Have "A" grade')
    }
}


gradeGater(81)
