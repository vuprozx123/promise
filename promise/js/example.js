// gia lap du lieu tu server

const users = [
    {
        id: 1,
        name: 'Nguyen tu quyen',
    },
    {
        id: 2,
        name: 'Vu Minh Hieu',
    },
    {
        id: 3,
        name: 'Nguyen Quynh Trang',
    },
];

const posts = [
    {
        id: 1,    // id nay la dinh danh cho bai post th
        content: 'This is an example',
        user_id: 1,     // de bt bai post nay la cua thang nao
    },

    {
        id: 2,    // id nay la dinh danh cho bai post th
        content: 'This is Nguyen Van A',
        user_id: 2,     // de bt bai post nay la cua thang nao
    },

    {
        id: 3,    // id nay la dinh danh cho bai post th
        content: 'This is an direction',
        user_id: 3,     // de bt bai post nay la cua thang nao
    },
];

function getAllUsers() {
    // goi API de lay ra danh sach user
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users);
        }, 2000);
    })
}

function getAllPostsByUserId(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // lay ra cac bai post cua userid tuong ung 
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

setIsLoading(true);
getAllUsers()
    .then((users) => {
        const userContainer = document.querySelector('.user-list');
        users.forEach(user => {
            getAllPostsByUserId(user.id)
                .then((posts) => {
                    let userItem = document.createElement('div');
                    let html = `<div><h1>${user.name}: </h1></div>`;
                    posts.forEach(post => {
                        html += `<span>${post.content}, </span>`;
                    });
                    userItem.innerHTML = html;
                    userContainer.appendChild(userItem);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        });
    })
    .catch();

