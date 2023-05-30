import { stringifyGuitars } from "./data.js";
const parsedGuitars = JSON.parse(stringifyGuitars);
console.log(Object.entries(parsedGuitars));


Object.entries(parsedGuitars).forEach((guitarType) => {

    console.log(guitarType);

    const sections = [
        document.querySelector("#acoustic"),
        document.querySelector("#electric"),
    ];

    guitarType[1].map((card) => {

        console.log(card);
        sections.forEach((section) => {
            if (card.type === section.id) {
                let cardInfo = `
                <div style="display: flex; justify-content: space-evenly; align-items: center; 
                flex-direction: row">
                <div class="card-image" style="border: 1px white solid">
                    <div style="width: 24rem;
                    height: 18rem;
                    background-image: url('${card.image}'); 
                    background-position: center; background-size: cover;">
                    </div>
                </div>
                </div>
                `
                section.insertAdjacentHTML("afterbegin", cardInfo);
            }
        });
    });
});



