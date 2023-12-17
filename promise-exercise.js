/**
 * 1. callbackFn
 */


// const callbackFn = function(fn){
//     setTimeout(()=> {
//         let a = 'end!';
//         fn(a);
//     }, 3000)
// };

// callbackFn(function(a){
//     console.log(a);
// });


/**
 * 2. Promise
 */
const promiseFn = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = 'end!';
            resolve(a);
        }, 3000)
    });
}
promiseFn().then((a) => {
    console.log(a);
});

/**
 * 3. Async/Await
 */
(async function(){
    const a = await promiseFn();
    console.log(a);
})();