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

        const textCover = document.getElementById("textCover");
        textCover.src = texts[textId].image;

        const textTitle = document.getElementById("textTitle");
        textTitle.textContent = texts[textId].title;

        const typeText = document.getElementById("typeText");
        typeText.textContent = texts[textId].textType;
        const yearText = document.getElementById("yearText");
        yearText.textContent = texts[textId].year;
        const genreText = document.getElementById("genreText");
        genreText.textContent = texts[textId].genre;
        const authorText = document.getElementById("authorText");
        authorText.textContent = texts[textId].author;

        const bodyText = document.createElement("p");
        bodyText.textContent = texts[textId].content

        textBody.appendChild(bodyText);

    })

})