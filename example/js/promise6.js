const users = [
    {
        id: 1,
        name: 'hung',
    },

    {
        id: 2,
        name: 'linh',
    },

    {
        id: 3,
        name: 'giang',
    },
]

const posts = [ 
    {
        id: 1,
        content: 'this an example',
        users_id: 3,
    },

    {
        id: 2,
        content: 'This is an apple',
        users_id: 1,
    },

    {
        id: 3,
        content: 'This is a banana',
        users_id: 2,
    },
]

function getAllUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users);
        }, 2000);
    });
}

function getAllPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = posts.filter((post) => {
                return post.users_id === userId;
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
// cach nay van la promise hell(long nhau)
    .then((users) => {
        const userContainer = document.querySelector('.user-list');
        users.forEach(user => {
            getAllPosts(user.id)
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