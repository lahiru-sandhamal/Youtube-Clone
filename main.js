/* styles.css */
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");

* {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 0.5px solid gray;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    padding-bottom: 10px;
    z-index: 2;
}

#youtube-logo-container {
    margin-left: 75px;
}

#youtube-logo {
    width: 100px;
}

#search-bar {
    justify-self: center;
    width: 38vw;
    margin-top: 15px;
    height: 25px;
    padding: 2px;
    padding-left: 5px;
}

#icon-container {
    color: gray;
    margin-top: 15px;
    cursor: pointer;
    justify-self: flex-end;
    margin-right: 5px;
}

.fas {
    font-size: 20px;
}

#app-icon {
    transform: translateY(5px);
    font-size: 20px;
}

#side-bar-section {
    margin-left: 0;
    position: fixed;
    left: 0%;
    width: 250px;
    float: left;
    height: 100%;
    overflow-y: auto;
    z-index: 1;
}

#side-bar-section>div {
    margin-bottom: 30px;
}

.side-bar {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    padding-left: 0;
    width: 250px;
    box-sizing: border-box;
}

.side-bar>li {
    list-style-type: none;
    margin-bottom: 20px;
    position: relative;
    box-sizing: border-box;
    width: calc(250px - 20px);
    padding-left: 20px;
    height: 25px;
}

#active-title {
    background: rgba(188, 195, 204, 0.5);
    height: 40px;
    display: flex;
    margin-bottom: 20px;
    left: 0%;
    align-items: center;
}

.material-icons {
    color: rgb(99, 95, 94);
}

#home-icon {
    color: red;
}

.side-bar-titles {
    text-decoration: none;
    color: rgb(53, 50, 49);
    font-size: 15px;
    position: absolute;
    top: 5%;
    left: 35%;
}

.active {
    position: absolute;
    top: auto;
    left: 35%;
    font-weight: bold;
}

.fa-clock,
.fa-thumbs-up {
    color: rgb(99, 95, 94);
}

i {
    color: rgb(99, 95, 94);
    font-size: 18px;
}

.side-bar-heading {
    color: rgb(99, 95, 94);
    font-weight: bold;
    padding-left: 20px;
    margin-bottom: 20px;
}

.channel-dp-container-1 {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: inline-block;
    justify-self: flex-start;
}

.channel-dp-1 {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
}

#video-section {
    margin: 20px 5px 0 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: 255px;
    margin-top: 60px;
    padding-top: 20px;
}

.video-container {
    margin-top: 20px;
    margin-bottom: 40px;
}

.images {
    width: 295px;
    height: 175px;
    margin-bottom: 5px;
}

.video-description {
    display: flex;
    flex-direction: row;
}

.channel-dp-container-2 {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: inline-block;
    justify-self: flex-start;
}

.channel-dp-2 {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.video-details {
    width: 200px;
    margin-top: 3px;
    margin-left: 10px;
    justify-self: flex-end;
}

.video-title {
    font-weight: bold;
    text-decoration: none;
    color: black;
    margin-bottom: 5px;
}

.channel-name {
    color: rgb(99, 95, 94);
    text-decoration: none;
    display: block;
    margin-top: 5px;
}

.channel-name:hover {
    color: rgb(53, 50, 49);
}

.views {
    color: rgb(99, 95, 94);
    text-decoration: none;
}

.fa-circle {
    color: rgb(99, 95, 94);
    font-size: 2px;
    transform: translateY(-3px);
}

.time {
    text-decoration: none;
    color: rgb(99, 95, 94);
}

footer p {
    text-align: right;
    color: rgb(99, 95, 94);
    margin-right: 20px;
}

@media all and (max-width: 255px) {
    .video-description {
        padding-left: 5px;
        padding-right: 5px;
    }
}

@media all and (max-width: 300px) {
    nav {
        flex-wrap: wrap;
    }

    #search-bar {
        order: 1;
        flex: 1 1 100%;
        justify-self: center;
    }
}

@media all and (max-width: 315px) {
    .images {
        width: 100%;
    }
}

@media all and (max-width: 550px) {
    #side-bar-section {
        display: none;
    }

    #video-section {
        margin-left: 0;
    }

    #youtube-logo-container {
        margin-left: 0;
    }
}
