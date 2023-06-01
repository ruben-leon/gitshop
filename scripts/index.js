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
                
                    <div class="productImages";
                    style="width: 24rem;
                    height: 18rem;
                    background-image: url('${card.image}'); 
                    background-position: center; background-size: cover;">
                    
                    <div class="hover" hidden style="
                    width: 24rem;
                    height: 18rem;
                    background-color: rgba(0, 0, 0, 0.562);
                ">
                    <p class="img-text" style="color: white;text-align: center; line-height: 17rem; font-weight: 150; font-size: 1.7rem; z-index: 1000;">See more</p>
                    </div>
                    </div>
                
                </div>
                </div>
                `
                section.insertAdjacentHTML("afterbegin", cardInfo);

                const productImages = section.querySelector(".productImages");
                const hover = section.querySelector(".hover");

                productImages.addEventListener("mouseover", () => {
                    hover.removeAttribute("hidden");
                });

                productImages.addEventListener("mouseout", () => {
                    hover.setAttribute("hidden", "true");
                });
            }
        });
    });
});

const firstAcousticGuitar = parsedGuitars.acoustic[0];
console.log(firstAcousticGuitar);


const acousticOne = document.querySelector("#acoustic-one");

if (firstAcousticGuitar.idNum === acousticOne.id) {
    let guitOneInfo = `
      <div 
        style="width: 24rem;
        height: 18rem;
        background-color: blue; 
        background-position: center; background-size: cover;">
      </div>                
    `;
    acousticOne.insertAdjacentHTML("afterbegin", guitOneInfo);
}


