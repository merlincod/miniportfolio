const config = {
    username: "Ton Nom ici",
    profilePicture: "", 
    backgroundImage: "", 
    message: "Bienvenue sur mon mini portfolio !",
    socialLinks: [
        { icon: "fab fa-github", url: "https://github.com/tongithub" },
        { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/tongithub/" },
        { icon: "fab fa-twitter", url: "https://twitter.com/tongithub" }
    ]
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("username").textContent = config.username;
    document.getElementById("profile-picture").src = config.profilePicture;
    document.getElementById("message-box").textContent = config.message;
    document.body.style.backgroundImage = `url(${config.backgroundImage})`;

    const socialIconsContainer = document.getElementById("social-icons");
    config.socialLinks.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.className = link.icon;
        socialIconsContainer.appendChild(a);
    });
});
