const blogPosts = document.getElementById('blog-posts')

window.onload = function() {
    fetchAllPosts();
}

async function fetchAllPosts() {
    try {

        const response = await fetch('http://localhost:5000/posts')
        const posts = await response.json();

        console.log(posts)

        for(var i = 0, l = posts.length; i < l; i++) {
            blogPosts.innerHTML += `
            <div id="post-entry">
            <h2>${posts[i].title}</h2>
            <h3>${posts[i].author}</h3>
            <i>${posts[i].date}</i>
            <p>${posts[i].content}</p>
            <i>${posts[i].tags}</i>
            </div>
            `
            // endast visa 100 första från content
            // på tags, lägga till mellanrum for varje ','
        }

        
    } catch(error) {
        console.log(error);
    }
}