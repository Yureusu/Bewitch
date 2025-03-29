import { renderHome, renderContracts} from "./script.js";
import { playerInventory, getValue, setValue} from "./inventory.js";

export function renderSage(){
    console.log(`Potions: ${getValue().potion}`);
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

    //Sage

    const contractWrapper = document.createElement("div");
    contractWrapper.setAttribute("id", "contract-wrapper");

    const contractImg = document.createElement("img");
    contractImg.setAttribute("id", "contract-img");
    contractImg.src = "assets/contracts/Sage.png";

    const contractInfoWrapper = document.createElement("div");
    contractInfoWrapper.setAttribute("id", "contractinfo-wrapper");

    const contractName = document.createElement("p");
    contractName.setAttribute("id", "contract-name");
    contractName.textContent = `Sage`;

    const contractInfo = document.createElement("p");
    contractInfo.setAttribute("id", "contract-info");
    contractInfo.textContent = `Sage is a witch renowned for her mastery of fire magic. 
                Her presence is as commanding as the flames she conjures, she has a trusted familiar, 
                a sleek black cat named Ember. With a coat that shimmers like obsidian and piercing 
                golden eyes that seem to see into one's soul, Ember is more than a companion—
                he’s an extension of Sage's fiery magic.`;

    const duelBtn = document.createElement("span");
    duelBtn.setAttribute("id", "duel-btn");
    duelBtn.textContent = "Duel";

    const contractCardsWrapper = document.createElement("div");
    contractCardsWrapper.setAttribute("id", "contractcards-wrapper");

    const contractCardsTitle = document.createElement("p");
    contractCardsTitle.setAttribute("id", "contractcards-title");
    contractCardsTitle.textContent = "Sage Cards: ";

    content.appendChild(contractWrapper);
    contractWrapper.appendChild(contractImg);
    contractWrapper.appendChild(contractInfoWrapper);
    contractInfoWrapper.appendChild(contractName);
    contractInfoWrapper.appendChild(contractInfo);
    contractInfoWrapper.appendChild(duelBtn);
    content.appendChild(contractCardsWrapper);
    contractCardsWrapper.appendChild(contractCardsTitle);

    const contractCards = [
        "assets/cards/Sage/passage.png", "assets/cards/Sage/witch-potion.png", "assets/cards/Sage/witch-cat.png", 
        "assets/cards/Sage/fire-spell.png", "assets/cards/Sage/fiery-flame.png", "assets/cards/Sage/crystal-ball.png"
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
        duelPopup();
    });

    catalogBackBtn.addEventListener("click", () => {
        content.style.height = "100vh";
        content.style.justifyContent = "space-around";
        content.removeChild(contractWrapper);
        content.removeChild(contractCardsWrapper);
        topNav.removeChild(catalogBackBtn);
        topNav.removeChild(catalogBackText);
        renderContracts();
    });
    catalogBackText.addEventListener("click", () => {
        content.style.height = "100vh";
        content.style.justifyContent = "space-around";
        content.removeChild(contractWrapper);
        content.removeChild(contractCardsWrapper);
        topNav.removeChild(catalogBackBtn);
        topNav.removeChild(catalogBackText);
        renderContracts();
    });
}

const player = {
    health: 10,
    round: 1,
    prompt: "Open a card. Finish 10 rounds to beat Selene."
}

function duelSage(){
    content.style.height = "auto";
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
        "assets/cards/Sage/witch-potion.png", "assets/cards/Sage/fire-spell.png", "assets/cards/Sage/fiery-flame.png",
        "assets/cards/Sage/witch-cat.png", "assets/cards/Sage/crystal-ball.png", "assets/cards/Sage/passage.png"
        
    ];

    //display all
    updateHealth();
    updateRound();
    updatePrompt();
    createCards();
    renderBag();

    cardField.style.justifyContent = "flex-start";
    cardField.style.flexWrap = "wrap";

    //create cards
    function createCards(){
        const shuffledCards = shuffleArray(cardsArr);
        shuffledCards.forEach((index) => {
            const cardWrapper = document.createElement("div");
            cardWrapper.setAttribute("id", "sage-card-wrapper");
    
            const card = document.createElement("div");
            card.setAttribute("id", "card");
    
            const frontFace = document.createElement("div");
            frontFace.setAttribute("id", "front-face");
    
            const backFace = document.createElement("div");
            backFace.setAttribute("id", "back-face");
            const backFaceImg = document.createElement("img");
            backFaceImg.setAttribute("id", "sage-backface-img");
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
    
                if(targetCard === "assets/cards/Sage/witch-potion.png"){
                    const frontFaceImg = document.createElement("img");
                    frontFaceImg.setAttribute("id", "sage-frontface-img");
                    frontFaceImg.src = index; 
                    frontFace.appendChild(frontFaceImg); 
                     
                    const healthWrapper = document.getElementById("health-wrapper");
                    playerInfo.removeChild(healthWrapper);
                    const roundWrapper = document.getElementById("round-wrapper");
                    playerInfo.removeChild(roundWrapper);    
                    const promptWrapper = document.getElementById("prompt-wrapper");
                    playerInfo.removeChild(promptWrapper);

                    player.health += 2;
                    updateHealth();
                    updateRound();
                    player.prompt = "Witch Potion: Gain 2 heart.";
                    updatePrompt();
                }
                else if(targetCard === "assets/cards/Sage/fire-spell.png"){
                    const frontFaceImg = document.createElement("img");
                    frontFaceImg.setAttribute("id", "sage-frontface-img");
                    frontFaceImg.src = index; 
                    frontFace.appendChild(frontFaceImg); 
                  
                    const healthWrapper = document.getElementById("health-wrapper");
                    playerInfo.removeChild(healthWrapper);    
                    const roundWrapper = document.getElementById("round-wrapper");
                    playerInfo.removeChild(roundWrapper);       
                    const promptWrapper = document.getElementById("prompt-wrapper");
                    playerInfo.removeChild(promptWrapper);

                    player.health -= 2;
                    updateHealth();
                    updateRound();
                    player.prompt = "Fire Spell: Lose 2 heart.";
                    updatePrompt();
                }
                else if(targetCard === "assets/cards/Sage/fiery-flame.png"){
                    const frontFaceImg = document.createElement("img");
                    frontFaceImg.setAttribute("id", "sage-frontface-img");
                    frontFaceImg.src = index;
                    frontFace.appendChild(frontFaceImg); 
      
                    const healthWrapper = document.getElementById("health-wrapper");
                    playerInfo.removeChild(healthWrapper)  
                    const roundWrapper = document.getElementById("round-wrapper");
                    playerInfo.removeChild(roundWrapper);
                    const promptWrapper = document.getElementById("prompt-wrapper");
                    playerInfo.removeChild(promptWrapper);

                    player.health -= 3;
                    updateHealth();
                    updateRound();
                    player.prompt = "Fiery Flame: Lose 3 hearts.";
                    updatePrompt();
                }
                else if(targetCard === "assets/cards/Sage/witch-cat.png"){
                    const frontFaceImg = document.createElement("img");
                    frontFaceImg.setAttribute("id", "sage-frontface-img");
                    frontFaceImg.src = index;
                    frontFace.appendChild(frontFaceImg); 
      
                    const healthWrapper = document.getElementById("health-wrapper");
                    playerInfo.removeChild(healthWrapper)  
                    const roundWrapper = document.getElementById("round-wrapper");
                    playerInfo.removeChild(roundWrapper);
                    const promptWrapper = document.getElementById("prompt-wrapper");
                    playerInfo.removeChild(promptWrapper);

                    updateHealth();
                    updateRound();
                    player.prompt = "Witch Cat : Reshuffle.";
                    updatePrompt();

                    setTimeout(() => {
                        cardsArr.forEach(() => {
                            const removeAll = document.getElementById("sage-card-wrapper");
                            removeAll.remove();
                        });
                    }, 2000); 
                    
                    setTimeout(() => {
                        createCards();
                    }, 2000); 
                }
                else if(targetCard === "assets/cards/Sage/crystal-ball.png"){
                    const frontFaceImg = document.createElement("img");
                    frontFaceImg.setAttribute("id", "sage-frontface-img");
                    frontFaceImg.src = index;
                    frontFace.appendChild(frontFaceImg); 
      
                    const healthWrapper = document.getElementById("health-wrapper");
                    playerInfo.removeChild(healthWrapper)  
                    const roundWrapper = document.getElementById("round-wrapper");
                    playerInfo.removeChild(roundWrapper);
                    const promptWrapper = document.getElementById("prompt-wrapper");
                    playerInfo.removeChild(promptWrapper);
                    
                    player.health -= 1;
                    updateHealth();
                    player.round += 1;
                    updateRound();
                    player.prompt = "Crystal Ball: Lose 1 heart, Skip 1 round.";
                    updatePrompt();
                }
                else if(targetCard === "assets/cards/Sage/passage.png"){
                    const frontFaceImg = document.createElement("img");
                    frontFaceImg.setAttribute("id", "sage-frontface-img");
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
                            const removeAll = document.getElementById("sage-card-wrapper");
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
        setTimeout(() => {
            defeatPopup();
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
        setTimeout(() => {
            victoryPopup();
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

function victoryPopup(){
    const victoryPopupWrapper = document.createElement("div");
    victoryPopupWrapper.setAttribute("id", "victory-popup-wrapper");

    const closePopupBtn = document.createElement("i");
    closePopupBtn.setAttribute("id", "close-popup-btn");
    closePopupBtn.setAttribute("class", "fa-solid fa-circle-xmark");

    const victoryImgArr = [
        "assets/victory/victory-one.png", "assets/victory/victory-two.png"
    ]

    const shuffledVictoryImg = shuffleArray(victoryImgArr);

    const victoryImg = document.createElement("img");
    victoryImg.setAttribute("id", "victory-img");
    victoryImg.src = shuffledVictoryImg[0];

    const victoryText = document.createElement("p");
    victoryText.setAttribute("id", "victory-text");
    victoryText.textContent = `Sage has been defeated. You won!`;

    const victoryRewardWrapper = document.createElement("div");
    victoryRewardWrapper.setAttribute("id", "victory-reward-wrapper");

    const victoryRewardText = document.createElement("p");
    victoryRewardText.setAttribute("id", "victory-reward-text");
    victoryRewardText.textContent = `You got: `;    

    const victoryRewardPentacleAmount = document.createElement("p");
    victoryRewardPentacleAmount.setAttribute("id", "victory-reward-text");
    victoryRewardPentacleAmount.textContent = "3"; 

    const victoryRewardPentacle = document.createElement("img");
    victoryRewardPentacle.setAttribute("id", "victory-reward-img");
    victoryRewardPentacle.src = "assets/img/pentacle.png";

    const victoryRewardPotionAmount = document.createElement("p");
    victoryRewardPotionAmount.setAttribute("id", "victory-reward-text");
    victoryRewardPotionAmount.textContent = "1"; 

    const victoryRewardPotion = document.createElement("img");
    victoryRewardPotion.setAttribute("id", "victory-reward-img");
    victoryRewardPotion.src = "assets/img/health-potion.png";

    content.appendChild(victoryPopupWrapper);
    victoryPopupWrapper.appendChild(closePopupBtn);
    victoryPopupWrapper.appendChild(victoryImg);
    victoryPopupWrapper.appendChild(victoryText);

    victoryPopupWrapper.appendChild(victoryRewardWrapper);
    victoryRewardWrapper.appendChild(victoryRewardText);
    victoryRewardWrapper.appendChild(victoryRewardPentacleAmount);
    victoryRewardWrapper.appendChild(victoryRewardPentacle);
    victoryRewardWrapper.appendChild(victoryRewardPotionAmount);
    victoryRewardWrapper.appendChild(victoryRewardPotion);

    const incPentacle = getValue().pentacle += 3;
    const incPotion = getValue().potion += 1;
    const readCrystal = getValue().crystal;
    const readSageLock = getValue().sageLock;
    setValue({
        pentacle: incPentacle,
        potion: incPotion,
        crystal: readCrystal,
        sageLock: readSageLock
    });

    closePopupBtn.addEventListener("click", () => {
        content.removeChild(victoryPopupWrapper);
        player.health = 10;
        updateHealth();
        player.round = 1;
        updateRound();
        player.prompt = "Open a card. Finish 10 rounds to beat Sage.";
        updatePrompt();
        renderSage();
    });
}

function defeatPopup(){
    const defeatPopupWrapper = document.createElement("div");
    defeatPopupWrapper.setAttribute("id", "defeat-popup-wrapper");

    const closePopupBtn = document.createElement("i");
    closePopupBtn.setAttribute("id", "close-popup-btn");
    closePopupBtn.setAttribute("class", "fa-solid fa-circle-xmark");

    const defeatImgArr = [
        "assets/defeat/defeat-one.png", "assets/defeat/defeat-two.png"
    ]

    const shuffledDefeatImg = shuffleArray(defeatImgArr);

    const defeatImg = document.createElement("img");
    defeatImg.setAttribute("id", "defeat-img");
    defeatImg.src = shuffledDefeatImg[0];

    const defeatText = document.createElement("p");
    defeatText.setAttribute("id", "defeat-text");
    defeatText.textContent = `You have been defeated. You lost!`;

    const defeatRewardWrapper = document.createElement("div");
    defeatRewardWrapper.setAttribute("id", "defeat-reward-wrapper");
    
    const defeatRewardText = document.createElement("p");
    defeatRewardText.setAttribute("id", "defeat-reward-text");
    defeatRewardText.textContent = `Sage took: `;    

    const defeatRewardPentacleAmount = document.createElement("p");
    defeatRewardPentacleAmount.setAttribute("id", "defeat-reward-text");
    defeatRewardPentacleAmount.textContent = "3"; 

    const defeatRewardPentacle = document.createElement("img");
    defeatRewardPentacle.setAttribute("id", "defeat-reward-img");
    defeatRewardPentacle.src = "assets/img/pentacle.png";

    content.appendChild(defeatPopupWrapper);
    defeatPopupWrapper.appendChild(closePopupBtn);
    defeatPopupWrapper.appendChild(defeatImg);
    defeatPopupWrapper.appendChild(defeatText);

    defeatPopupWrapper.appendChild(defeatRewardWrapper);
    defeatRewardWrapper.appendChild(defeatRewardText);
    defeatRewardWrapper.appendChild(defeatRewardPentacleAmount);
    defeatRewardWrapper.appendChild(defeatRewardPentacle);

    if(!(getValue().pentacle == 0)){
        const decPentacle = getValue().pentacle -= 3;
        const readPotion = getValue().potion;
        const readCrystal = getValue().crystal;
        const readSageLock = getValue().sageLock;
        setValue({
            pentacle: decPentacle,
            potion: readPotion,
            crystal: readCrystal,
            sageLock: readSageLock
        });
    }

    closePopupBtn.addEventListener("click", () => {
        player.health = 10;
        updateHealth();
        player.round = 1;
        updateRound();
        player.prompt = "Open a card. Finish 10 rounds to beat Sage.";
        updatePrompt();
        renderSage();
    });
}

function renderBag(){
    console.log(getValue().potion);
    const bagWrapper = document.createElement("div");
    bagWrapper.setAttribute("id", "bag-wrapper");

    const content = document.getElementById("content");
    content.appendChild(bagWrapper);

    const bagImg = document.createElement("img");
    bagImg.setAttribute("id", "bag-img");
    bagImg.src = "assets/img/bag.png";

    bagWrapper.appendChild(bagImg);

    const potionArr = [];
    let potionCounter = getValue().potion;
    console.log(`Potion Counter: ${potionCounter}`);

    for(let i = 1; i <= potionCounter; i++){
        potionArr.push(`Potion${i}`);
    }

    console.log(`Potion array: ${potionArr}`);

    const healthPotionWrapper = document.createElement("div");
    healthPotionWrapper.setAttribute("id", "health-potion-wrapper");
    bagWrapper.appendChild(healthPotionWrapper);

    if(potionCounter != 0){
        potionArr.forEach((index) => {
            const healthPotion = document.createElement("div");
            healthPotion.setAttribute("id", "health-potion");

            const healthPotionImg = document.createElement("img");
            healthPotionImg.setAttribute("id", "health-potion-img");
            healthPotionImg.src = "assets/img/health-potion.png";
            healthPotionImg.setAttribute("name", index);
            
            healthPotionWrapper.appendChild(healthPotion);
            healthPotion.appendChild(healthPotionImg);

            healthPotion.addEventListener("click", (event) => {
                // const targetPotion = event.target.getAttribute("name");
                // alert(targetPotion);
                const useBtn = document.createElement("span");
                useBtn.setAttribute("id", "use-btn");
                useBtn.textContent = "Use";

                healthPotion.appendChild(useBtn);

                useBtn.addEventListener("click", () => {
                    const playerInfo = document.getElementById("player-info");

                    const healthWrapper = document.getElementById("health-wrapper");
                    playerInfo.removeChild(healthWrapper); 
                    const roundWrapper = document.getElementById("round-wrapper");
                    playerInfo.removeChild(roundWrapper);
                    const promptWrapper = document.getElementById("prompt-wrapper");
                    playerInfo.removeChild(promptWrapper); 

                    player.health += 1;
                    updateHealth();
                    updateRound();
                    player.prompt = "Health Potion: Gain 1 heart.";
                    updatePrompt();
                    const readPentacle = getValue().pentacle;
                    const decPotion = getValue().potion -= 1;
                    const readCrystal = getValue().crystal;
                    const readSageLock = getValue().sageLock;
                    setValue({
                        pentacle: readPentacle,
                        potion: decPotion,
                        crystal: readCrystal,
                        sageLock: readSageLock
                    });
                    console.log({Potion: playerInventory.potion})
                    const deletePotion = potionArr[0];
                    healthPotion.remove(deletePotion);

                    if(getValue().potion == 0){
                        bagWrapper.removeChild(healthPotionWrapper);
                        const bagText = document.createElement("p");
                        bagText.setAttribute("id", "bag-text");
                        bagText.textContent = "Your bag is empty.";
                
                        bagWrapper.appendChild(bagText);
                    }
                });
            });
        });
    }
}

function duelPopup(){
    const duelPopupWrapper = document.createElement("div");
    duelPopupWrapper.setAttribute("id", "duel-popup-wrapper");

    const closePopupBtn = document.createElement("i");
    closePopupBtn.setAttribute("id", "close-popup-btn");
    closePopupBtn.setAttribute("class", "fa-solid fa-circle-xmark");

    const duelImg = document.createElement("img");
    duelImg.setAttribute("id", "duel-img");
    duelImg.src = "assets/contracts/Sage.png";

    const duelRewardWrapper = document.createElement("div");
    duelRewardWrapper.setAttribute("id", "duel-reward-wrapper");

    const duelRewardTitle = document.createElement("p");
    duelRewardTitle.setAttribute("id", "duel-reward-title");
    duelRewardTitle.textContent = "Sage rewards:";

    content.appendChild(duelPopupWrapper);
    duelPopupWrapper.appendChild(closePopupBtn);
    duelPopupWrapper.appendChild(duelImg);
    duelPopupWrapper.appendChild(duelRewardWrapper);
    duelRewardWrapper.appendChild(duelRewardTitle);

    const duelRewardPentacleAmount = document.createElement("p");
    duelRewardPentacleAmount.setAttribute("id", "victory-reward-text");
    duelRewardPentacleAmount.textContent = "3";

    const duelRewardPentacle = document.createElement("img");
    duelRewardPentacle.setAttribute("id", "victory-reward-img");
    duelRewardPentacle.src = "assets/img/pentacle.png";

    const duelRewardPotionAmount = document.createElement("p");
    duelRewardPotionAmount.setAttribute("id", "victory-reward-text");
    duelRewardPotionAmount.textContent = "1";

    const duelRewardPotion = document.createElement("img");
    duelRewardPotion.setAttribute("id", "victory-reward-img");
    duelRewardPotion.src = "assets/img/health-potion.png";

    duelRewardWrapper.appendChild(duelRewardPentacleAmount);
    duelRewardWrapper.appendChild(duelRewardPentacle);
    duelRewardWrapper.appendChild(duelRewardPotionAmount);
    duelRewardWrapper.appendChild(duelRewardPotion);

    closePopupBtn.addEventListener("click", () => {
        content.removeChild(duelPopupWrapper);
    });

    console.log(getValue().sageLock);
    let contractKey = getValue().sageLock;
    isUnlocked(contractKey);
}

function isUnlocked(key){
    const duelPopupWrapper = document.getElementById("duel-popup-wrapper");
    
    const duelLockedBtn = document.createElement("span");
    duelLockedBtn.setAttribute("id", "duel-locked-btn");
    duelLockedBtn.textContent = `Unlock for 10 `;

    const duelUnlockedBtn = document.createElement("span");
    duelUnlockedBtn.setAttribute("id", "duel-unlocked-btn");
    duelUnlockedBtn.style.width = "100px";
    duelUnlockedBtn.textContent = `Play`;

    const duelBtnPrice = document.createElement("img");
    duelBtnPrice.setAttribute("id", "duel-btn-price");
    duelBtnPrice.src = "assets/img/pentacle.png";
    duelLockedBtn.appendChild(duelBtnPrice);

    if(key == false){
        duelPopupWrapper.appendChild(duelLockedBtn);
        duelLockedBtn.addEventListener("click", () => {
            if(key == false && getValue().pentacle >= 10){
                const decPentacle = getValue().pentacle -= 10;
                const updateSage = getValue().sageLock = true;
                const readPotion = getValue().potion;
                const readCrystal = getValue().crystal;
                setValue({
                    pentacle: decPentacle,
                    potion: readPotion,
                    crystal: readCrystal,
                    sageLock: updateSage
                });
                console.log(`sageLock:${key}`);
                alert("Sage Unlocked.");
                content.removeChild(duelPopupWrapper);
                duelSage();
            }   
            else if(key == false && getValue().pentacle <= 10){
                alert("You don't have enough Pentacle.");
            }
        });
    }
    else{
        duelPopupWrapper.appendChild(duelUnlockedBtn);
        duelUnlockedBtn.addEventListener("click", () => {
            content.removeChild(duelPopupWrapper);
            duelSage();
        });
    }
}