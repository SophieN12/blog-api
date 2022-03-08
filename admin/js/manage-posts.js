window.onload = function() {
    fetchAllPosts();
}

async function fetchAllPosts() {
    let response = await fetch("http://localhost:5000/posts");
    let data = await response.json();

    let postsHTML = ""

    for (let post of data){
        postsHTML += `<li> 
                        Title: ${post.title} <br> 
                        Author: ${post.author} <br> 
                        Date: ${post.date} <br> 
                        <div class="manage-post" >
                            <a href="#"> Update </a>
                            <a href="#"> Delete </a>
                        </div>
                    </li> <br>`
    }

    document.getElementById("posts-list").innerHTML = postsHTML;
 }
