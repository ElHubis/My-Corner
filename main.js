addEventListener("DOMContentLoaded", function () {
    const mainBody = document.getElementsByTagName("body")[0];

    const landingContent = document.createElement("div");
    landingContent.className = "landingContent";

    const welcomeText = document.createElement("h1");
    welcomeText.className = ("introText");
    welcomeText.innerHTML = (`Hi, I'm <span>Ruben</span> <br></br> And this is my <span>corner</span>`);
    landingContent.appendChild(welcomeText);

    const aboutPage = document.createElement("div");
    aboutPage.className = ("aboutPage");

    const aboutPageHeader = document.createElement("h1");
    aboutPageHeader.innerHTML = (`<span>What</span> the hell is <span>this</span>...`);

    const aboutPageText = document.createElement("p");
    aboutPageText.innerHTML = (`Well, it's not really supposed to 'be' anything really. It's kind of a challenge to myself. I've always made projects together with others but this time I wanted to make it all myself. I wanted to see if I can make something when I have sole control over it. <br></br> 
                                    Now, as for what's going to populate this experiment, that's also kind of a challenge to myself. For a while I've found it kind of boring not to have a place to show the things I've made. So I'm creating that place myself, and placing a bet that this will motivate me to create even more. I'm placing a bet on myself, you know.`);
    aboutPage.appendChild(aboutPageHeader);
    aboutPage.appendChild(aboutPageText);

    const aboutMe = document.createElement("h1");

    mainBody.appendChild(landingContent);
    mainBody.appendChild(aboutPage);
})