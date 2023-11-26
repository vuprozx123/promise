const users = [
    {
        id: 1,
        name: 'Cao Khai Hung',
    },
    {
        id: 2,
        name: 'Nguyen Tien dat',
    },
    {
        id: 3, 
        name: 'Thai Bao Tung',
    },
];

const posts = [
    {
        id: 1, 
        title: 'ta la nha vo dich',
        user_id: 3,
    },
    {
        id: 2,
        title: 'ta so 2 thi khong ai so 1',
        user_id: 1,
    },
    {
        id: 3,
        title: 'khong ai gioi hon tao dau haqha',
        user_id: 2,
    },
];

function getAllUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users);
        }, 2000);
    })
}

function getAllPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts);
        }, 2000);
    })
}

function setIsLoading(value) {
    document.getElementById('loading-spinner').style.display = value ? 'flex' : 'none';
}

setIsLoading(true);

Promise.all([getAllPosts(), getAllUsers()])
    .then((data) => {
        const posts = data[0];
        const users = data[1];

        const postContainer = document.querySelector('.posts-list');
        posts.forEach(post => {
            const user = users.find((item) => {
                return item.id === post.user_id;
            })
            let postItem = document.createElement('div');
            let html = `<h1>${post.title}</h1><p>${user.name}</p>`;
            postItem.innerHTML = html;
            postContainer.appendChild(postItem)
        });
    })
    .catch(() => {
        alert('co loi xay ra');
    })
    .finally(() => {
        setIsLoading(false);
    })