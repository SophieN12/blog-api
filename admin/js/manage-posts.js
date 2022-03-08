window.onload = function() {
    fetchAllPosts();
}

async function fetchAllPosts() {
    let response = await fetch("http://localhost:5000/posts");
    let data = await response.json();

    let postsHTML = ""

    for (let post of data){
        postsHTML += `<li> <div> 
                        <b> Title </b>: ${post.title} <br> 
                        <b> Author: </b> ${post.author} <br> 
                        <b> Date: </b> ${post.date} <br> </div>
                        <div class="manage-post" >
                            <a href="update-post.html"> Update </a>
                            <a href="#" data-id= ${post._id}> Delete </a>
                        </div>
                    </li>`
    }

    document.getElementById("posts-list").innerHTML = postsHTML;

    let deleteLinks = document.querySelectorAll("#posts-list li a:last-child");
    for (let link of deleteLinks) {
        link.addEventListener("click", async function (e) {
            e.preventDefault();

            try{
                await fetch("http://localhost:5000/posts/"+ e.target.dataset.id, {method: "DELETE"});
                e.target.parentNode.parentNode.remove();
            } catch (err){
                console.log(err);
            }
        })
    }
}

