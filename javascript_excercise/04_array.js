// it will create fruits list.
const fruits_lst = ["mango", "orange", "apple", "kiwi"];
console.log('Original list = ' + fruits_lst);

// remove first item from list using shift function.
let removed_item = fruits_lst.shift();
console.log(`Shifted Items is "${removed_item}"  ----   it will remove first item from list.`);
console.log('shifted list = ' + fruits_lst);

// add a item in first position in list.
let unshifted_item = fruits_lst.unshift('mango');
console.log(`Unshifted item is "${unshifted_item}"  ----   it will add item at first position of list.`);
console.log(`Unshifted list = ${fruits_lst}`);

// print final list using for each function.
fruits_lst.forEach(function(fruit, idx){
    console.log(`${idx}. ${fruit}`);
})
