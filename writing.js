const searchBar = document.getElementById("writingSearch");

addEventListener("DOMContentLoaded", function (){
    const mainBody = document.getElementsByTagName("body")[0];
    const mainContainer = document.getElementById("mainContainer");

    const textContainer = document.createElement("section");
    textContainer.classList.add("textContainer");

    fetch("writing.json")
        .then(response => response.json())
        
        .then(links =>{
            const texts = Object.values(links.texts);
            data = texts.map((text) => {

                const textBlock = document.createElement("a");
                textBlock.href = `writing_subpage.html?book=${text.linkTitle}`
                textBlock.classList.add("textBlock")

                const textImage = document.createElement("img");
                textImage.src = text.image;
                const textType = document.createElement("p");
                textType.textContent = text.textType;
                const textTitle = document.createElement("h2");
                textTitle.textContent = text.title;

                textBlock.appendChild(textImage);
                textBlock.appendChild(textType);
                textBlock.appendChild(textTitle);
                textContainer.appendChild(textBlock);

                return { title: text.title, element: textBlock};
            })
        })

    mainContainer.appendChild(textContainer);
})

let data = [];

searchBar.addEventListener("input", function (input){
    const inputValue = input.target.value.toLowerCase().replace(/\s+/g, '');
    console.log(inputValue)
    data.forEach(text => {
        const visible = text.title.toLowerCase().replace(/\s+/g, '').includes(inputValue)
        text.element.classList.toggle("hidden", !visible)  
    })
    console.log(data);
})