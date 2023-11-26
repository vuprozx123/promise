fetch('https://jsonplaceholder.typicode.com/posts')  // ham fetch return ve mot promise
    .then((response) =>{
        if(response.status === 200){
            //thanh cong
            return response.json();  // ham nay cung tra ve mot promise the nen moi co then o duoi
        }
    })
    .then((data) => {
        console.log(data);
        const postsContainer = document.querySelector('.posts-list');
        let html = '';
        data.forEach(post => {
            html += `<h1>${post.title}</h1><p>${post.body}</p>`
        });
        postsContainer.innerHTML = html;
    })
    
    