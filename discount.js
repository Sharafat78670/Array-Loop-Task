const array = [120,230,340,150,170,500];
let discountArray = [];

for (let num = 0; num < array.length; num++) {
    const arrayElement = array[num];
    if (arrayElement > 300) {
        let discount = arrayElement -arrayElement*10/100;
        discountArray.push(discount);
    }
    else{
        discountArray.push(arrayElement);
    }
}
console.log("Array element-",array);
console.log("After discount list :", discountArray);