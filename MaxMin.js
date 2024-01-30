const array=[22,3,4,5,-2,18,32,40];

let maxArray=array[0];
let minArray=array[0];

for (let num = 0; num < array.length; num++) {
    const newElement = array[num];
    
    if (maxArray < newElement) {
        maxArray = newElement;
    }
    if (minArray > newElement) {
        minArray = newElement;
    }
}
console.log("Maximum number is: ",maxArray);
console.log("Minimum number is: ",minArray);