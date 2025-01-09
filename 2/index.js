const entry = 10;

function fibonacci(num) {

    let v = 1;
    let a = 0;

    if (num === 0 || num === 1){
        return true;
    }

    for (let i = 2; i <= num; i++) {

        let temp = v;  
        v += a; 
        a = temp;

        console.log(v);

        if(v === num) {
            return true
        }

    }

    return false;

}

if (fibonacci(entry)) {
    console.log(`O número ${entry} pertence a sequência fibonacci`);
} else {
    console.log(`O número ${entry} não pertence a sequência fibonacci`)
}
