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
let order = [];
let randomNum = Math.floor(Math.random() * 3)
let nameJS, usernameJS, locationJS, avatarJS, postJS, commentJS, likesJS;

container.innerHTML += `
    <header>
        <img id="logo" src="images/logo.png">
        <img id="pfp" src="images/user-avatar.png">
    </header>`;


while(order.length != 3){
    if(order.includes(randomNum) == false){
        order.push(randomNum);
        nameJS = posts[randomNum].name;
        usernameJS = posts[randomNum].username;
        locationJS = posts[randomNum].location;
        avatarJS = posts[randomNum].avatar;
        postJS = posts[randomNum].post;
        commentJS = posts[randomNum].comment;
        likesJS = posts[randomNum].likes;
        container.innerHTML += `
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
    randomNum = Math.floor(Math.random() * 3)
}

container.innerHTML += `<footer></footer>`