const URLparam = new URLSearchParams(window.location.search);
const textId = URLparam.get('text');

window.addEventListener("load", function () {
    fetch("writing.json")

    .then(response => response.json())

    .then(data => {
        const texts = data.texts;

        const pageTitle = `My Corner - Writing - ${texts[textId].title || "saknar titel"}`; 
        document.title = pageTitle;

        const textHeader = document.getElementById("textHeader");
        const textInfo = document.getElementById("textInfo");
        const textBody = document.getElementById("textBody")

        const textCover = document.createElement("img");
        textCover.src = texts[textId].image;

        textTitle = document.createElement("h1");
        textTitle.textContent = texts[textId].title;

        const bodyText = document.createElement("p");
        bodyText.textContent = texts[textId].content


        textHeader.appendChild(textCover);
        textHeader.appendChild(textTitle);
        textBody.appendChild(bodyText);

    })

})