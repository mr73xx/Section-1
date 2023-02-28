// let user=["Raju", "raju@mailcom", "365543", "45"];
let userDetails = {
    nama: 'Raju',
    email: 'raju@mailcom',
    age: '35',
    password: '3567754'
    // 'phone-no' : '7689543456'
};
console.log(userDetails.email);
console.log(userDetails['age']);
// console.log(userDetails['phone-no']);

userDetails.address = 'Lucknow';
console.log(userDetails);

let [brand, model, price, color] = ['Samsung', 'S23', 79999, 'black'];
console.log(model);

let smartphone = {
    brand,
    model,
    price,
    color
}
console.log(smartphone);

smartphone.model='S23 ultra ';
console.log(smartphone);

smartphone.color=['black', 'grey', 'blue'];
console.log(smartphone);

console.log(smartphone.color[1])

smartphone.color.push('white');
console.log(smartphone);