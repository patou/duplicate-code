const result1 = x2(5);
const result2 = x2(6);
const result3 = x2(3);
const result4 = x3(3);

display(result1);
display(result2);
display(result3);
display(result4);

function display(nbr, result) {
    console.log(`result ${nbr} : ${result}`);
}

function x2(i) {
    return i * 2;
}

function x3(i) {
    return i * 3;
}

