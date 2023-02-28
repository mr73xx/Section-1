// for(let i=0; i<10; i++){
//     console.log(i);
// }


// for(let i=50; i<=80; i++){
//     if(i%7==0){
//         console.log(i);
//     }
// }

myname = "Deepak";

for(let c of myname){
    console.log(c);
}
console.log("---------------------");
for(c of myname){
    if(c=='a' || c=='e' ||c=='i' ||c=='o' ||c=='u' ){
        console.log(c);
    }
}

for(let v of 'aeiou'){
    if(myname.includes(v)){
        console.log(v);
    }
}