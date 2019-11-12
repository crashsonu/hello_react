let myAdder = function(num_a, num_b){
    return num_a + num_b;
}

let myMultiplier = function(num_a, num_b){
    return num_a * num_b;
}


let added_value = myAdder(5, 5);

console.log(`Total Added value ${added_value}`);
console.log(`Multiply by added value into 5 is = ${myMultiplier(added_value, 5)}`)

