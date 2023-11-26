//iả lập dữ liệu từ server

const users = [
    {
        id: 1,
        name: 'Vu Minh Hieu',
    },
    {
        id: 2,
        name: 'Le Xuan Quang',
    },
    {
        id: 3,
        name: 'Vu Minh Quang',
    },
    {
        id: 4,
        name: 'Vo Hong Son',
    },
    {
        id: 5,
        name: 'Nguyen Van Khanh',
    },
];

const posts = [
    {
        id: 1,
        content: 'This is an example1',
        user_id: 1,
    },
    {
        id: 2,
        content: 'This is an example2',
        user_id: 5,
    },
    {
        id: 3,
        content: 'This is an example3',
        user_id: 1,
    },
    {
        id: 4,
        content: 'This is an example4',
        user_id: 4,
    },
]

function getAllUsers() {
    // Gọi API để lấy ra danh sách users
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // ....
            resolve(users);
        }, 2000);
    });
}

function getAllPostsByUserId(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Lay ra cac bai posts cua user_id tuong ung .......
            const result = posts.filter((post) => {
                return post.user_id === userId;
            });

            resolve(result);
        }, 2000);
    });
}

function setIsLoading(value) {
    document.getElementById('loading-spinner').style.display = value ? 'block' : 'none';
}

setIsLoading(true); // Moi dau vao -> chua load du lieu -> hien thi loading
getAllUsers()
    .then((users) => {
        const userContainer = document.querySelector('.user-list');
        users.forEach(user => {
            getAllPostsByUserId(user.id)
                .then((posts) => {
                    let userItem = document.createElement('div'); // Node
                    let html = `<div><h1>${user.name}: </h1></div>`;
                    posts.forEach(post => {
                        html += `<span>${post.content}, </span>`;
                    });
                    userItem.innerHTML = html;
                    userContainer.appendChild(userItem);
                })
                .finally(() => {
                    setIsLoading(false); // Khi tai xong du lieu -> loading display none
                });
        });
    })
    .catch();