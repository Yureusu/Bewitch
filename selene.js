import { renderHome } from "./script.js";

export function renderSelene(){
    renderHome();

    const content = document.getElementById("content");
    content.style.height = "auto";
    content.innerHTML = "";

    const topNav = document.createElement("div");
    topNav.setAttribute("id", "top-nav");
    topNav.style.justifyContent = "flex-start";

    const catalogBackBtn = document.createElement("i");
    catalogBackBtn.setAttribute("id", "catalog-backbtn");
    catalogBackBtn.setAttribute("class", "fa-solid fa-chevron-left");

    const catalogBackText = document.createElement("p");
    catalogBackText.setAttribute("id", "catalog-backtext");
    catalogBackText.textContent = "Go back";

    content.appendChild(topNav);
    topNav.appendChild(catalogBackBtn);
    topNav.appendChild(catalogBackText);

    //Selene

    const contractWrapper = document.createElement("div");
    contractWrapper.setAttribute("id", "contract-wrapper");

    const contractImg = document.createElement("img");
    contractImg.setAttribute("id", "contract-img");
    contractImg.src = "assets/contracts/Selene.png";

    const contractInfoWrapper = document.createElement("div");
    contractInfoWrapper.setAttribute("id", "contractinfo-wrapper");

    const contractName = document.createElement("p");
    contractName.setAttribute("id", "contract-name");
    contractName.textContent = `Selene`;

    const contractInfo = document.createElement("p");
    contractInfo.setAttribute("id", "contract-info");
    contractInfo.textContent = `Selene seeks to become the greatest voodoo witch in the entire magic world, 
                she has a deep connection to the spirit world and often serves as an intermediary between 
                the living and the spirits. She believes that mastering the art of voodoo is the key to true wisdom.`;

    const duelBtn = document.createElement("span");
    duelBtn.setAttribute("id", "duel-btn");
    duelBtn.textContent = "Duel";

    const contractCardsWrapper = document.createElement("div");
    contractCardsWrapper.setAttribute("id", "contractcards-wrapper");

    const contractCardsTitle = document.createElement("p");
    contractCardsTitle.setAttribute("id", "contractcards-title");
    contractCardsTitle.textContent = "Selene Cards: ";

    content.appendChild(contractWrapper);
    contractWrapper.appendChild(contractImg);
    contractWrapper.appendChild(contractInfoWrapper);
    contractInfoWrapper.appendChild(contractName);
    contractInfoWrapper.appendChild(contractInfo);
    contractInfoWrapper.appendChild(duelBtn);
    content.appendChild(contractCardsWrapper);
    contractCardsWrapper.appendChild(contractCardsTitle);

    const contractCards = [
        "assets/cards/Selene/elixir.png", "assets/cards/Selene/voodoo.png", 
        "assets/cards/Selene/dagger.png", "assets/cards/Selene/passage.png",
    ];

    const contractCardsImgWrapper = document.createElement("div");
    contractCardsImgWrapper.setAttribute("id", "contractcardsimg-wrapper");

    contractCardsWrapper.appendChild(contractCardsImgWrapper);

    contractCards.forEach((index) => {
        const contractCardImg = document.createElement("img");
        contractCardImg.setAttribute("id", "contractcards-img");
        contractCardImg.src = index;
        contractCardsImgWrapper.appendChild(contractCardImg);
    });

    duelBtn.addEventListener("click", () => {
        alert("Duel Selene");
        duelSelene();
    });

    catalogBackBtn.addEventListener("click", () => {
        content.style.height = "100vh";
        content.style.justifyContent = "space-around";
        content.removeChild(contractWrapper);
        content.removeChild(contractCardsWrapper);
        content.removeChild(topNav);
        renderHome();
    });
    catalogBackText.addEventListener("click", () => {
        content.style.height = "100vh";
        content.style.justifyContent = "space-around";
        content.removeChild(contractWrapper);
        content.removeChild(contractCardsWrapper);
        content.removeChild(topNav);
        renderHome();
    });
}

const player = {
    health: 10,
    round: 1,
    prompt: "Open a card. Finish 10 rounds to beat Selene."
}

function duelSelene(){
    content.style.height = "100vh";
    const contractWrapper = document.getElementById("contract-wrapper");
    content.removeChild(contractWrapper);
    const contractCardsWrapper = document.getElementById("contractcards-wrapper");
    content.removeChild(contractCardsWrapper);
    const topNav = document.getElementById("top-nav");
    content.removeChild(topNav);
    console.log(`Remaining health: ${player.health}, Round: ${player.round}`);

    //playfield

    const playField = document.createElement("div");
    playField.setAttribute("id", "play-field");

    const cardField = document.createElement("div");
    cardField.setAttribute("id", "card-field");

    const playerInfo = document.createElement("div");
    playerInfo.setAttribute("id", "player-info");

    content.appendChild(playField);
    playField.appendChild(cardField);
    playField.appendChild(playerInfo);

    const cardsArr = [
        "assets/cards/Selene/elixir.png", "assets/cards/Selene/voodoo.png", 
        "assets/cards/Selene/dagger.png", "assets/cards/Selene/passage.png", 
    ];

    //display all
    updateHealth();
    updateRound();
    updatePrompt();
    createCards();

    //create cards
    function createCards(){
        const shuffledCards = shuffleArray(cardsArr);
        shuffledCards.forEach((index) => {
            const cardWrapper = document.createElement("div");
            cardWrapper.setAttribute("id", "card-wrapper");
    
            const card = document.createElement("div");
            card.setAttribute("id", "card");
    
            const frontFace = document.createElement("div");
            frontFace.setAttribute("id", "front-face");
    
            const backFace = document.createElement("div");
            backFace.setAttribute("id", "back-face");
            const backFaceImg = document.createElement("img");
            backFaceImg.setAttribute("id", "backface-img");
            backFaceImg.src = "assets/cards/card-back.png";
            backFaceImg.setAttribute("name", index);
    
            cardField.appendChild(cardWrapper);
            cardWrapper.appendChild(card);
            card.appendChild(frontFace);
            card.appendChild(backFace);
            
            backFace.appendChild(backFaceImg);
    
            backFaceImg.addEventListener("click", (event) => {
                const targetCard = event.target.getAttribute("name");
                card.style.transform = "rotateY(180deg)";
    
                if(targetCard === "assets/cards/Selene/elixir.png"){
                    const frontFaceImg = document.createElement("img");
                    frontFaceImg.setAttribute("id", "frontface-img");
                    frontFaceImg.src = index;
                    frontFace.appendChild(frontFaceImg);  
                     
                    const healthWrapper = document.getElementById("health-wrapper");
                    playerInfo.removeChild(healthWrapper);
                    const roundWrapper = document.getElementById("round-wrapper");
                    playerInfo.removeChild(roundWrapper);    
                    const promptWrapper = document.getElementById("prompt-wrapper");
                    playerInfo.removeChild(promptWrapper);

                    player.health += 1;
                    updateHealth();
                    updateRound();
                    player.prompt = "Bottle o' Elixir: Gain 1 heart.";
                    updatePrompt();
                }
                else if(targetCard === "assets/cards/Selene/voodoo.png"){
                    const frontFaceImg = document.createElement("img");
                    frontFaceImg.setAttribute("id", "frontface-img");
                    frontFaceImg.src = index;
                    frontFace.appendChild(frontFaceImg); 
                  
                    const healthWrapper = document.getElementById("health-wrapper");
                    playerInfo.removeChild(healthWrapper);    
                    const roundWrapper = document.getElementById("round-wrapper");
                    playerInfo.removeChild(roundWrapper);       
                    const promptWrapper = document.getElementById("prompt-wrapper");
                    playerInfo.removeChild(promptWrapper);

                    player.health -= 1;
                    updateHealth();
                    updateRound();
                    player.prompt = "Voodoo Doll: Lose 1 heart.";
                    updatePrompt();
                }
                else if(targetCard === "assets/cards/Selene/dagger.png"){
                    const frontFaceImg = document.createElement("img");
                    frontFaceImg.setAttribute("id", "frontface-img");
                    frontFaceImg.src = index;
                    frontFace.appendChild(frontFaceImg); 
      
                    const healthWrapper = document.getElementById("health-wrapper");
                    playerInfo.removeChild(healthWrapper)  
                    const roundWrapper = document.getElementById("round-wrapper");
                    playerInfo.removeChild(roundWrapper);
                    const promptWrapper = document.getElementById("prompt-wrapper");
                    playerInfo.removeChild(promptWrapper);

                    player.health -= 2;
                    updateHealth();
                    updateRound();
                    player.prompt = "Witch Dagger: Lose 2 hearts.";
                    updatePrompt();
                }
                else if(targetCard === "assets/cards/Selene/passage.png"){
                    const frontFaceImg = document.createElement("img");
                    frontFaceImg.setAttribute("id", "frontface-img");
                    frontFaceImg.src = index;
                    frontFace.appendChild(frontFaceImg); 

                    const healthWrapper = document.getElementById("health-wrapper");
                    playerInfo.removeChild(healthWrapper);
                    const roundWrapper = document.getElementById("round-wrapper");
                    playerInfo.removeChild(roundWrapper);
                    const promptWrapper = document.getElementById("prompt-wrapper");
                    playerInfo.removeChild(promptWrapper);

                    updateHealth();
                    player.round += 1;
                    updateRound();
                    player.prompt = "Eye o' Passage: Proceed to next round.";
                    updatePrompt();
                    
                    setTimeout(() => {
                        cardsArr.forEach(() => {
                            const removeAll = document.getElementById("card-wrapper");
                            removeAll.remove();
                        });
                    }, 2000); 
                    
                    setTimeout(() => {
                        createCards();
                    }, 2000);   
                }
            });
        });
    }
}

function updateHealth(){
    const playerInfo = document.getElementById("player-info");

    const healthWrapper = document.createElement("div");
    healthWrapper.setAttribute("id", "health-wrapper");

    const healthImg = document.createElement("img");
    healthImg.setAttribute("id", "health-img");
    healthImg.src = "assets/img/heart.png";

    const displayHealth = document.createElement("p");
    displayHealth.setAttribute("id", "health-display");
    displayHealth.textContent = player.health;

    playerInfo.appendChild(healthWrapper);
    healthWrapper.appendChild(healthImg);
    healthWrapper.appendChild(displayHealth);

    if(player.health <= 0){
        alert("You have been defeated.");
        setTimeout(() => {
            // const content = document.getElementById("content");
            // content.style.height = "100vh";
            // content.style.justifyContent = "space-around";
            // const playField = document.getElementById("play-field");
            // content.removeChild(playField);
            // renderHome();
            location.reload();
        }, 2000);  
    }
}

function updateRound(){
    const playerInfo = document.getElementById("player-info");

    const roundWrapper = document.createElement("div");
    roundWrapper.setAttribute("id", "round-wrapper");

    const roundImg = document.createElement("img");
    roundImg.setAttribute("id", "round-img");
    roundImg.src = "assets/img/round.png";

    const displayRound = document.createElement("p");
    displayRound.setAttribute("id", "round-display");
    displayRound.textContent = player.round;

    playerInfo.appendChild(roundWrapper);
    roundWrapper.appendChild(roundImg);
    roundWrapper.appendChild(displayRound);

    if(player.round == 11){
        alert("Selene has been defeated. You won!");
        setTimeout(() => {
            // const content = document.getElementById("content");
            // content.style.height = "100vh";
            // content.style.justifyContent = "space-around";
            // const playField = document.getElementById("play-field");
            // content.removeChild(playField);
            // renderHome();
            location.reload();
        }, 2000); 
    }
}

function updatePrompt(){
    const playerInfo = document.getElementById("player-info");

    const promptWrapper = document.createElement("div");
    promptWrapper.setAttribute("id", "prompt-wrapper");

    const promptText = document.createElement("p");
    promptText.setAttribute("id", "prompt-text");
    promptText.textContent = player.prompt;

    playerInfo.appendChild(promptWrapper);
    promptWrapper.appendChild(promptText);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}