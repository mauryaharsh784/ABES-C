const sum = (...args) => {
    let total = 0;  // accumulator variable
    args.forEach(ele => {
        total += ele;
    });
    return total;
};

const outp = sum(1,2,3,4,5,6,7,8,89,90,12);

console.log(outp); // 227
  
const isDiv=(...args) => {
    console.log
}

