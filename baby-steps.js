
let sum = 0
    for (let i = 0; i < numbers.length; i++){
        sum += Number(process.argv[i]);

};
console.log(sum);
