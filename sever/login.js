

let execSync = require('child_process').execSync;

const arr = new Uint16Array(3);
arr[0] = "deployer_javascript\n";
arr[1] = "0!a#92!$F6Ir\n";
arr[2] = "1@qq.com\n";
const arg = Buffer.from(arr);
console.log(arg);
execSync('npm login', {
    input: arg,
    stdio: 'inherit',
});


execSync('npm i',{
    stdio: 'inherit'
});