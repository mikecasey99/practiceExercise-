const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.getElementById("container");
let finalString = "";

finalString += `
    <header>
        <img id="logo" src="images/logo.png">
        <img id="pfp" src="images/user-avatar.png">
    </header>`;

for(let i = 0; i < posts.length; i++){
        let nameJS = posts[i].name;
        let usernameJS = posts[i].username;
        let locationJS = posts[i].location;
        let avatarJS = posts[i].avatar;
        let postJS = posts[i].post;
        let commentJS = posts[i].comment;
        let likesJS = posts[i].likes;
        finalString += `
        <section class="top">
        <div class="row">
            <img class="pfp" src="${avatarJS}" alt="">
            <div class="poster">
                <h2>${nameJS}</h2>
                <h3>${locationJS}</h3>
            </div>
        </div>
        </section>
        <section class="picture">
            <img src="${postJS}" alt="">
        </section>
        <section class="icons">
            <img src="images/icon-heart.png" alt="">
            <img src="images/icon-dm.png" alt="">
            <img src="images/icon-comment.png" alt="">
        </section>
        <section class="likes">
            ${likesJS} likes
        </section>
        <section class="caption">
            <h2>${usernameJS}</h2>
            <h3>${commentJS}</h3>
        </section>`
}

finalString += `<footer></footer>`

container.innerHTML = finalString;