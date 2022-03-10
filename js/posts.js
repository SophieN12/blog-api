const blogPosts = document.getElementById('blog-posts')

window.onload = function() {
    fetchAllPosts();
}

async function fetchAllPosts() {
    try {

        const response = await fetch('http://localhost:5000/posts')
        const posts = await response.json();

        console.log(posts)

        let html = ''
        for(let post of posts) {

            html += `
            <li class="list-group-item">
            <h2>${post.title}</h2>
            <i>${post.author} | ${post.date}</i>
            <p><b>tags: </b>${post.tags}</p>
            <p>${post.content.substring(0, 100)} ... <a href="/post.html?id=${post._id}">läs mer</a></p>

            </li>
            `

            // hur separera taggar?
            // bör man ha en if-sats om blogginlägg har < 100 karaktärer?
            
        }

        blogPosts.innerHTML = html;
        
    } catch(error) {
        console.log(error);
    }
}
