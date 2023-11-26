// gia lap du lieu tu server

const users = [
    {
        id: 1,
        name: 'Cao Khai Hung',
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
            // fetch API
            resolve(users);
        }, 2000);
    })
}

function getAllPosts() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(posts);
        }, 2000);
    })
}

function setIsLoading(value) {
    document.getElementById('loading-spinner').style.display = value ? 'flex' : 'none';
}

setIsLoading(true);


//doi tat ca cac promise deu thuc hien xong. Cac promise bat dau thuc hien tai cung 1 thoi diem
Promise.all([getAllPosts(), getAllUsers()])
    .then((data) => {
        const posts = data[0];
        const users = data[1];

        const postsContainer = document.querySelector('.posts-list');
        posts.forEach(post => {
            const user = users.find((item) =>{
                return item.id === post.user_id;
            })
            let postItem = document.createElement('div');
            let html = `<h1>${post.content}</h1><p>${user.name}</p>`;
            postItem.innerHTML = html;
            postsContainer.appendChild(postItem)
        });
    })
    .catch(() => {
        alert('Co loi xay ra');
    })
    .finally(() => {
        setIsLoading(false);
    })