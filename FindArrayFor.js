const array=['Sharafat','Aneya','Rakib','Nerov','Siddik','Siam'];

let chick ='Sohi';
let chickIndex =-1;
for (let i = 0; i < array.length; i++) {
    const chickElement = array[i];
    if (chickElement == chick) {
        chickIndex=i;
    }
}
if (chickIndex > -1) {
    console.log(chick ,"is my friend.")
} else {
    console.log(chick ,"is not my friend.")
}