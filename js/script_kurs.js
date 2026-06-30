// карточки с фактами
const facts = [
    {
        name: "Годы написания",
        description: "1837-1839"
    },

    {
        name: "Жанр",
        description: "Социально-психологический роман"
    },

    {
        name: "Тема",
        description: "Конфликт личности и общества"
    },

    {
        name: "Особенность",
        description: "Построение композиции"
    }
]

let container = document.getElementById("facts-container")
facts.forEach(fact => {
    container.innerHTML += `
        <div class="card-fact">
            <h4>${fact.name}</h4>
            <p>${fact.description}</p>
        </div>
    `;
});


// анимация печати цитаты
$(document).ready(function() {
    const lines = [
        "«История души человеческой, хотя",
        "бы самой мелкой души, едва ли",
        "не любопытнее и не полезнее истории",
        "целого народа»"
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    let $typedText = $('#typed-text');
    
    function typeText() {
        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                $typedText.append(lines[lineIndex][charIndex]);
                charIndex++;
                setTimeout(typeText, 50);
            } else {
                // конец строки
                lineIndex++;
                charIndex = 0;

                // добавляем перенос только если это не последняя строка
                if (lineIndex < lines.length) {
                    $typedText.append('<br>');
                }

                setTimeout(typeText, 100);
            }
        } else {
            $('#cursor').fadeOut(500);
        }
    }
    
    typeText();
});


// const lines = [
//     "«История души человеческой, хотя",
//     "бы самой мелкой души, едва ли",
//     "не любопытнее и не полезнее истории",
//     "целого народа»"
// ];

// let lineIndex = 0;
// let charIndex = 0;

// const quote = document.getElementById("typed-text");

// function typeText() {

//     if (lineIndex < lines.length) {

//         if (charIndex < lines[lineIndex].length) {
//             quote.innerHTML += lines[lineIndex][charIndex];
//             charIndex++;
//         } else {
//             quote.innerHTML += "<br>";
//             lineIndex++;
//             charIndex = 0;
//         }
//     }
//     else {
//         clearInterval(timer);
//         document.getElementById("cursor").style.display = "none";
//     }
// }

// let timer = setInterval(typeText, 50);


// галерея
const galleryImages = [
    "images/гнв/10.jpg",
    "images/гнв/2.jpg",
    "images/гнв/12.jpg",
    "images/гнв/7.jpg",
    "images/гнв/vera_pechorin2.jpg",
    "images/гнв/1.jpg",
    "images/гнв/11.jpg",
    "images/гнв/24.jpg",
    "images/гнв/9.jpg",
    "images/гнв/29.jpg",
    "images/гнв/6.jpg"
];

const gallery = document.getElementById("gallery");

let startIndex = 0;
function renderGallery() {
    gallery.innerHTML = "";

    for (let i=0; i<5; i++) {
        const index = (startIndex + i) % galleryImages.length;
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("galleryItem");

        // эл-ты по краям п/прозрачные
        if (i===0 || i===4) {
            galleryItem.classList.add("side");
        }

        galleryItem.innerHTML = `<img src="${galleryImages[index]}" alt="Иллюстрация к роману" loading="lazy">`;

        gallery.append(galleryItem);
    }
}

renderGallery();


// стрелки
document.getElementById("next").addEventListener("click", () => {
       startIndex = (startIndex + 1) % galleryImages.length;
    renderGallery();
});

document.getElementById("prev").addEventListener("click", () => {
    startIndex = (startIndex - 1 + galleryImages.length) % galleryImages.length;
    renderGallery();
});


