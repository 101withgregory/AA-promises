/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
function num1(){
    return 1;
}
async function num2(){
    return 2;
}

console.log('num1', num1());
console.log('num2', num2());
console.log('num2',num2().then((result)=>console.log(result)))
/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here
async function  myAsyncFunc(){
    const result1 = await num2()
    console.log('waiting', result1)
}

console.log(myAsyncFunc())
/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here

async function customPromise(){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('done!!!!!');
        }, 1000);
    })

    const result = await promise;
    console.log('My promise is ', result);
}

console.log(customPromise())
/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here
new Promise((resolve) => {
    setTimeout(() => {
        resolve('done!');
    }, 1500)
}).then(r => console.log('then my other promise is', r));


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(delay){
    return new Promise(resolve =>{
        setTimeout(resolve, delay)
    })
}

async function twoSecPause(){
    await wait(2000);
    console.log('waited for two seconds')
    
}
console.log(twoSecPause())
/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
const tryRandomPromise = (random) => new Promise((resolve, reject) => {
    if (random > 0.5) {
        resolve('success!!!');
    } else {
        reject('random error');
    }
});
for (let i = 1; i < 10; i++) {
    const random = Math.random();
    wait(2000 + random * 1000)
        .then(()=>console.log(random))
        .then(() => tryRandomPromise(random))
        .then(result => console.log('random try #', i, result))
        .catch(error => console.error('random try #', i, error));
}


/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here
const tryTryAgain = async (i) => {
    const random = Math.random();

    // no need for try-catch if there's no possibility of error (rarely happens)
    await wait(3000 + random * 1000);
    console.log(random);
    // usually you need to wrap the await to gracefully handle the error
    try {
        const result = await tryRandomPromise(random);
        console.log('random again #', i, result);
    } catch (error) {
        console.error('random again #', i, error);
    }
   
};

for (let i = 1; i < 10; i++) {
    tryTryAgain(i);
}
/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log('END OF PROGRAM');