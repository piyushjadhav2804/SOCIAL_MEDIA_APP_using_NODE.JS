{
    //method to submit the form data for new post using AJAX
    let createPost = function() {

        let newPostForm = $('#new-post-form');

        newPostForm.submit(function(e) {
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: newPostForm.serialize(),
                success: function (data) {
                    let newPost = newPostDOM(data.data.post);
                    ${'#posts-list-container>ul'}.prepend(newPost);
                }, error: (error) => {
                    console.log(error.resposeText);
                }
            });
        });
    }

    //method to create the post in DOM
    let newPostDOM = function(post) {
        return $(`<li id="post-${post._id}">
                    <p> 
                            <small>
                                <a class="delete-post-button" href="/posts/destroy/${post._id}">X</a>
                            </small>
                        <% } %>
                
                        ${ post.content }
                            <br>
                            <small>
                                ${post.user.name}
                            </small>
                        
                    </p>
                
                    <div class="posts-comments">
                
                            <form action="/comments/create" method="POST">
                                <input type="text" name="content" placeholder="Type here to add comment...">
                                <input type="hidden" name="post" value="${ post._id }">
                                <input type="submit" value="Add comment">
                            </form>
                
                        <div class="post-comments-list">
                            <ul id="post-comments-${ post.id }">

                            </ul>
                        </div>
                    </div>
                
                </li>`)
    }

    createPost();
}