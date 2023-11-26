// bat dong bo

setTimeout(() => {
    console.log(1);
}, 2000);

setInterval(() => {
    console.log(2);
}, 3000);

console.log(3);

// promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1,2,3]);
        // reject('Co loi xay ra');
    }, 2000);
})

// promise
//     .then((data) => {
//         // duoc goi khi thanh cong
//         console.log(data);
//     })
//     .catch((message) => {
//         // duoc goi khi that bai
//         console.log(message);
//     })
//     .finally(() => {
//         console.log('Finally');
//     })

// chuoi long nhau
// promise
//     .then((data) => {
//         console.log('Chain 1', data);
//         data.push(4);
//         return data;
//     })
//     .then(data => {
//         console.log('Chain 2 ', data);
//     })
//     .catch((message) => {
//         // duoc goi khi that bai
//         console.log(message);
//     })
//     .finally(() => {
//         console.log('Finally');
//     })


    //trong ham then cung co the return ve promise
    promise
    .then((data) => {
        console.log('Chain 1', data);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data.push(4)
                resolve(data);
            }, 2000);
        });
    })
    .then(data => {
        console.log('Chain 2 ', data);
    })
    .catch((message) => {
        // duoc goi khi that bai
        console.log(message);
    })
    .finally(() => {
        console.log('Finally');
    })
