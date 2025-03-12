addEventListener("DOMContentLoaded", function () {
    const mainBody = document.getElementsByTagName("body")[0];

    // Div and content for the welcome text
    const landingContent = document.createElement("div");
    landingContent.className = "landingContent";

    const welcomeText = document.createElement("h1");
    welcomeText.className = ("introText");
    welcomeText.innerHTML = (`Hi, I'm <span>Ruben</span> <br></br> And this is my <span>corner</span>`);
    landingContent.appendChild(welcomeText);

    // Div and content for the about the page section 
    const aboutPage = document.createElement("div");
    aboutPage.className = ("aboutPage");

    const aboutPageHeader = document.createElement("h1");
    aboutPageHeader.innerHTML = (`<span>What</span> the hell is <span>this</span>...`);

    const aboutPageText = document.createElement("p");
    aboutPageText.innerHTML = (`Well, it's not really supposed to 'be' anything really. It's kind of a challenge to myself. I've always made projects together with others but this time I wanted to make it all myself. I wanted to see if I can make something when I have sole control over it. <br></br> 
                                    Now, as for what's going to populate this experiment, that's also kind of a challenge to myself. For a while I've found it kind of boring not to have a place to show the things I've made. So I'm creating that place myself, and placing a bet that this will motivate me to create even more. I'm placing a bet on myself, you know.`);
    aboutPage.appendChild(aboutPageHeader);
    aboutPage.appendChild(aboutPageText);

    // Div and content for the about me section
    const aboutMe = document.createElement("div");
    aboutMe.className = ("aboutMe");

    const aboutMeHeader = document.createElement("h1");
    aboutMeHeader.innerHTML = (`...and <span>who</span> the hell am <span>I</span>?`);

    const aboutMeText = document.createElement("p");
    aboutMeText.innerHTML = (`Ahh, an age old question, as old as humanity itself, really. Possibly even older. But without pretending to some sort of sophisticated philosopher, I'll introduce myself.<br></br>
                            I'm Ruben. I'm 19 and I live in Sweden. I like making things, and that's mostly why I made this page, to show those things to others. More specifically I like writing, design, programing and construction. I also really like cooking, training and the color <span>purple</span> (surprise) but I'm probably not going to post any of that...unless?<br></br>
                            But yeah that's what I'm offering you, and if you would be so kind as to scroll down a bit you're going to see a few links. Feel free to click them! Or not, but that would be kind of sad :(`);
    aboutMe.appendChild(aboutMeHeader);
    aboutMe.appendChild(aboutMeText);

    // Link blocks for navigating to subpages
    const linkBlocks = document.createElement("div");
    linkBlocks.className = ("linkBlocks");

    // Writing block
    const writingBlock = document.createElement("div")
    writingBlock.className = ("blockStylesLeft");

    const writingImage = document.createElement("img");
    writingImage.src = ("images/skriver-på-papper.jpg");
    writingBlock.appendChild(writingImage)

    const writingHeader = document.createElement("h1");
    writingHeader.innerHTML = (`Writing`);
    writingBlock.appendChild(writingHeader);

    linkBlocks.appendChild(writingBlock);

    // Design block
    const designBlock = document.createElement("div")
    designBlock.className = ("blockStylesRight");

    const linkImage = document.createElement("img");
    linkImage.src = ("images/retro-poster.jpg");
    designBlock.appendChild(linkImage)

    const linkHeader = document.createElement("h1");
    linkHeader.innerHTML = (`Design`);
    designBlock.appendChild(linkHeader);

    linkBlocks.appendChild(designBlock);
    
    // Appending children to the body
    mainBody.appendChild(landingContent);
    mainBody.appendChild(aboutPage);
    mainBody.appendChild(aboutMe);
    mainBody.appendChild(linkBlocks)
})