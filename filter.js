const array = [23, 34, 35, 65, 45, 67];
let filterArray = [];

for (let num = 0; num < array.length; num++) {
    const arrayElement = array[num];
    if (arrayElement < 50) {
        filterArray.push(arrayElement);
    }
}
console.log("Array element-",array);
console.log("Filter array element for lase than 50.",filterArray);