
function crypto(text) {
    const res = text.split('');
    console.log(res);

    let part1 = res.slice(0, 4).reverse();
    console.log(part1);
    let part2 = res.slice(4, 8).reverse();
    console.log(part2);
    let temp1 = part2[1]
    part2[1] = part2[2];
    part2[2] = temp1;
    const result = part1.concat(part2);
    const encryptPass = result.join('')
    console.log(encryptPass)
    return encryptPass;
}
crypto('password');


function checkPass(encryptPass, originalPass) {

    const inputPass = crypto(originalPass)
    let checkResult = (inputPass === encryptPass) ? true : false;
    console.log(checkResult)
}

checkPass('ssapdorw', 'password')


