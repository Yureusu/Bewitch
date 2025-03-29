import { renderSelene } from "./selene.js";
import { renderSage } from "./sage.js";
import { playerInventory, setValue, getValue} from "./inventory.js";

export function renderHome(){
    console.log({Pentacle: playerInventory.pentacle, Potion: playerInventory.potion, 
        Crystal: playerInventory.crystal});

    const topNav = document.createElement("div");
    topNav.setAttribute("id", "top-nav");
    const howtoPlay = document.createElement("span");
    howtoPlay.setAttribute("id", "howto-play");
    howtoPlay.textContent = "Tutorial";
    const stats = document.createElement("span");
    stats.setAttribute("id", "stats");
    stats.textContent = "Achievements";
    const coffee = document.createElement("span");
    coffee.setAttribute("id", "coffee");
    coffee.textContent = "Donate";

    const tagLineWrapper = document.createElement("div");
    tagLineWrapper.setAttribute("id", "tagline-wrapper");
    
    const tagLine = document.createElement("p");
    tagLine.setAttribute("id", "tag-line");
    tagLine.textContent = `"Magic is your guide, strategy is your edge, and luck is your fate."`;

    const gameNav = document.createElement("div");
    gameNav.setAttribute("id", "game-nav");

    const gameNavCatalog = document.createElement("div");
    gameNavCatalog.setAttribute("id", "gamenav-catalog");

    const catalog = document.createElement("img");
    catalog.setAttribute("id", "catalog");
    catalog.src = "assets/img/catalog.png";

    const gameNavContracts = document.createElement("div");
    gameNavContracts.setAttribute("id", "gamenav-contracts");

    const contracts = document.createElement("img");
    contracts.setAttribute("id", "contracts");
    contracts.src = "assets/img/contracts.png";

    const gameNavShop = document.createElement("div");
    gameNavShop.setAttribute("id", "gamenav-shop");

    const shop = document.createElement("img");
    shop.setAttribute("id", "shop");
    shop.src = "assets/img/shop.png";
    
    const catalogTitle = document.createElement("p");
    catalogTitle.setAttribute("id", "catalog-title");
    catalogTitle.textContent = "Catalog";
    const contractsTitle = document.createElement("p");
    contractsTitle.setAttribute("id", "contracts-title");
    contractsTitle.textContent = "Contracts";
    const shopTitle = document.createElement("p");
    shopTitle.setAttribute("id", "shop-title");
    shopTitle.textContent = "Shop";
    
    const introduction = document.createElement("p");
    introduction.setAttribute("id", "introduction");
    introduction.textContent = `In a world where the threads of magic weave reality itself, 
    witches reign supreme. Each commands unique and powerful spells, their knowledge passed down 
    through secret rituals and dangerous pacts. Yet, deep within the arcane archives, 
    whispers speak of a legendary magic—the ultimate force that could crown its wielder as 
    the greatest sorcerer of all time.`;
    
    content.appendChild(topNav);
    topNav.appendChild(howtoPlay);
    topNav.appendChild(stats);
    topNav.appendChild(coffee);
    content.appendChild(tagLineWrapper);
    tagLineWrapper.appendChild(tagLine);
    content.appendChild(gameNav);
    gameNav.appendChild(gameNavCatalog);
    gameNavCatalog.appendChild(catalog);
    gameNav.appendChild(gameNavContracts);
    gameNavContracts.appendChild(contracts);
    gameNav.appendChild(gameNavShop);
    gameNavShop.appendChild(shop);
    gameNavCatalog.appendChild(catalogTitle);
    gameNavContracts.appendChild(contractsTitle);
    gameNavShop.appendChild(shopTitle);
    content.appendChild(introduction);

    gameNavCatalog.addEventListener("click", () => {
        renderCatalog();
    });

    gameNavContracts.addEventListener("click", () => {
        topNav.removeChild(howtoPlay);
        topNav.removeChild(stats);
        topNav.removeChild(coffee);
        content.removeChild(tagLineWrapper);
        content.removeChild(gameNav);
        content.removeChild(introduction);
        renderContracts();
    });

    gameNavShop.addEventListener("click", () => {
        renderShop();
    });

    function renderCatalog(){
        topNav.removeChild(howtoPlay);
        topNav.removeChild(stats);
        topNav.removeChild(coffee);
        content.removeChild(tagLineWrapper);
        content.removeChild(gameNav);
        content.removeChild(introduction);
    
        topNav.style.justifyContent = "flex-start";
    
        //adding spells
    
        const spellImgs = [
            "assets/spells/amulet.png", "assets/spells/bag.png", "assets/spells/burner.png", "assets/spells/candle (1).png", "assets/spells/candle.png", "assets/spells/cat.png",
            "assets/spells/cauldron.png", "assets/spells/chiromancy.png", "assets/spells/constellation.png", "assets/spells/crystal.png", "assets/spells/crystal-ball.png", "assets/spells/cup.png",
            "assets/spells/dragon.png", "assets/spells/eye.png", "assets/spells/fairy.png", "assets/spells/feather.png", "assets/spells/flame.png", "assets/spells/fortune-wheel.png",
            "assets/spells/hamsa.png", "assets/spells/incense-stick (2).png", "assets/spells/incense-stick.png", "assets/spells/ingredients.png", "assets/spells/magic.png", "assets/spells/magic-box.png",
            "assets/spells/magic-dust.png", "assets/spells/magic-mirror.png", "assets/spells/magic-ring.png", "assets/spells/magic-wand.png", "assets/spells/moon.png", "assets/spells/mortar.png",
            "assets/spells/ouija-board.png", "assets/spells/pentacle.png", "assets/spells/potion (1).png", "assets/spells/potion (2).png", "assets/spells/potion.png", "assets/spells/root.png",
            "assets/spells/rune.png", "assets/spells/scroll.png", "assets/spells/skull.png", "assets/spells/spell.png", "assets/spells/spellbook (2).png", "assets/spells/spellbook.png",
            "assets/spells/sword.png", "assets/spells/tarot.png", "assets/spells/tasseography.png", "assets/spells/triquetra.png", "assets/spells/unicorn.png", "assets/spells/voodoo-doll.png",
        ];
    
        const spellNames = [
            "Witch Amulet", "Witch Pouch", "Burner", "Celebration Candle", "Ceremony Candle", "Witch Cat", 
            "Cauldron", "Chiromancy", "Constellation", "Witch Crystal", "Crystall Ball", "Witch Cup",
            "Dragon Wing", "Eye of Passage", "Spell Fairy", "Magic Feather", "Demonic Flame", "Fortune Wheel",
            "Hamsa", "Incense Smoke", "Incense Sticks", "Spell Ingredients", "Witch Table", "Witch Box",
            "Magic Dust", "Witch Mirror", "Witch Ring", "Magic Wand", "Witching Moon", "Deadman's Mortar",
            "Ouija Board", "Pentacle", "Witch Fragrance", "Witch Potion", "Bottle o' Elixir", "Witch Root",
            "Dark Runes", "Witch Contract", "Sacrificial Skull", "Fire Spell", "Magic Book", "Spell Book", 
            "Witch Dagger", "Magic Tarot", "Tasseography", "Triquetra", "Magic Horn", "Voodoo Doll"
        ]
    
        content.style.height = "auto";
    
        const spellWrapper = document.createElement("div");
        spellWrapper.setAttribute("id", "spell-wrapper");
    
        content.appendChild(spellWrapper);
    
        spellImgs.forEach((index, item) => {
            const spellImgWrapper = document.createElement("div");
            spellImgWrapper.setAttribute("id", "spellimg-wrapper");
    
            const spellImg = document.createElement("img");
            spellImg.setAttribute("id", "spell-img");
            spellImg.src = index;
    
            const spellTitle = document.createElement("p");
            spellTitle.setAttribute("id", "spell-title");
            spellTitle.textContent = `${spellNames[item]}`;
    
            spellWrapper.appendChild(spellImgWrapper);
            spellImgWrapper.appendChild(spellImg);
            spellImgWrapper.appendChild(spellTitle);
        });

        const catalogBackBtn = document.createElement("i");
        catalogBackBtn.setAttribute("id", "catalog-backbtn");
        catalogBackBtn.setAttribute("class", "fa-solid fa-chevron-left");
    
        const catalogBackText = document.createElement("p");
        catalogBackText.setAttribute("id", "catalog-backtext");
        catalogBackText.textContent = "Go back";
    
        topNav.appendChild(catalogBackBtn);
        topNav.appendChild(catalogBackText);
    
        catalogBackBtn.addEventListener("click", () => {
            content.style.height = "auto";
            content.removeChild(spellWrapper);
            content.removeChild(topNav);
            renderHome();
        });
        catalogBackText.addEventListener("click", () => {
            content.style.height = "auto";
            content.removeChild(spellWrapper);
            content.removeChild(topNav);
            renderHome();
        });
    }
    
    function renderShop(){
        topNav.removeChild(howtoPlay);
        topNav.removeChild(stats);
        topNav.removeChild(coffee);
        content.removeChild(tagLineWrapper);
        content.removeChild(gameNav);
        content.removeChild(introduction);
    
        topNav.style.justifyContent = "flex-start";
        content.style.height = "100vh";
    
        const contractsBackBtn = document.createElement("i");
        contractsBackBtn.setAttribute("id", "contracts-backbtn");
        contractsBackBtn.setAttribute("class", "fa-solid fa-chevron-left");
    
        const contractsBackText = document.createElement("p");
        contractsBackText.setAttribute("id", "contracts-backtext");
        contractsBackText.textContent = "Go back";
    
        topNav.appendChild(contractsBackBtn);
        topNav.appendChild(contractsBackText);

        //Shop
        const shopWrapper = document.createElement("div");
        shopWrapper.setAttribute("id", "shop-wrapper");

        content.appendChild(shopWrapper);

        //potion
        const buyPotionWrapper = document.createElement("div");
        buyPotionWrapper.setAttribute("id", "buy-potion-wrapper");

        const buyPotionImg = document.createElement("img");
        buyPotionImg.setAttribute("id", "buy-potion-img");
        buyPotionImg.src = "assets/img/health-potion.png";

        const buyPotionTitle = document.createElement("p");
        buyPotionTitle.setAttribute("id", "buy-potion-title");
        buyPotionTitle.textContent = "Health Potion";

        const buyPotionInfo = document.createElement("p");
        buyPotionInfo.setAttribute("id", "buy-potion-info");
        buyPotionInfo.textContent = "A highly sought-after health potion crafted by witches to restore 1 heart.";

        const buyPotionBtn = document.createElement("span");
        buyPotionBtn.setAttribute("id", "buy-potion-btn");
        buyPotionBtn.textContent = "Buy";

        //crystal
        const buyCrystalWrapper = document.createElement("div");
        buyCrystalWrapper.setAttribute("id", "buy-crystal-wrapper");

        const buyCrystalImg = document.createElement("img");
        buyCrystalImg.setAttribute("id", "buy-crystal-img");
        buyCrystalImg.src = "assets/img/witch-crystal.png";

        const buyCrystalTitle = document.createElement("p");
        buyCrystalTitle.setAttribute("id", "buy-crystal-title");
        buyCrystalTitle.textContent = "Witch Crystal";

        const buyCrystalInfo = document.createElement("p");
        buyCrystalInfo.setAttribute("id", "buy-crystal-info");
        buyCrystalInfo.textContent = "A rare valuable crystal coveted by witches that can reveal a passage.";

        const buyCrystalBtn = document.createElement("span");
        buyCrystalBtn.setAttribute("id", "buy-crystal-btn");
        buyCrystalBtn.textContent = "Buy";

        shopWrapper.appendChild(buyPotionWrapper);
        buyPotionWrapper.appendChild(buyPotionImg);
        buyPotionWrapper.appendChild(buyPotionTitle);
        buyPotionWrapper.appendChild(buyPotionInfo);
        buyPotionWrapper.appendChild(buyPotionBtn);

        shopWrapper.appendChild(buyCrystalWrapper);
        buyCrystalWrapper.appendChild(buyCrystalImg);
        buyCrystalWrapper.appendChild(buyCrystalTitle);
        buyCrystalWrapper.appendChild(buyCrystalInfo);
        buyCrystalWrapper.appendChild(buyCrystalBtn);

        buyPotionBtn.addEventListener("click", () => {
            alert("You bought 1 health potion.")
            if(playerInventory.pentacle != 0){
                const decPentacle = getValue().pentacle -= 1;
                const incPotion = getValue().potion += 1;
        
                setValue({ 
                    pentacle: decPentacle,
                    potion: incPotion
                 }); 

                console.log({Pentacle: getValue().pentacle, Potion: getValue().potion});
            }
            else{
                alert("Sorry, you don't have enough pentacle.");
            }
        });

        buyCrystalBtn.addEventListener("click", () => {
            alert("Coming Soon.");
            // if(!(playerInventory.pentacle <= 2)){
            //     const decPentacle = getValue().pentacle -= 3;
            //     const incCrystal = getValue().crystal += 1;
        
            //     setValue({ 
            //         pentacle: decPentacle,
            //         crystal: incCrystal
            //      }); 

            //     console.log({Pentacle: getValue().pentacle, Crystal: getValue().crystal});
            // }
            // else{
            //     alert("Sorry, you don't have enough pentacle.")
            // }
        });

        //
        contractsBackBtn.addEventListener("click", () => {
            content.style.height = "auto";
            content.style.justifyContent = "space-around";
            content.removeChild(shopWrapper);
            content.removeChild(topNav);
            renderHome();
        });
        contractsBackText.addEventListener("click", () => {
            content.style.height = "auto";
            content.style.justifyContent = "space-around";
            content.removeChild(shopWrapper);
            content.removeChild(topNav);
            renderHome();
        });
    }
}

renderHome();

export function renderPlayerBag(){
    const playerBag = document.getElementById("player-bag");

    playerBag.addEventListener("click", () => {
        const content = document.getElementById("content");
        
        const playerBagPopupWrapper = document.createElement("div");
        playerBagPopupWrapper.setAttribute("id", "player-bag-popup-wrapper");

        const closePlayerBagBtn = document.createElement("i");
        closePlayerBagBtn.setAttribute("id", "close-player-bag-btn");
        closePlayerBagBtn.setAttribute("class", "fa-solid fa-circle-xmark");

        const pentacleWrapper = document.createElement("div");
        pentacleWrapper.setAttribute("id", "pentacle-wrapper");

        const pentacleImg = document.createElement("img");
        pentacleImg.setAttribute("id", "pentacle-img");
        pentacleImg.src = "assets/img/pentacle.png";

        const pentacleTextAmount =  document.createElement("p");
        pentacleTextAmount.setAttribute("id", "pentacle-text-amount");
        pentacleTextAmount.textContent = getValue().pentacle;

        const inventoryWrapper = document.createElement("div");
        inventoryWrapper.setAttribute("id", "inventory-wrapper");

        const potionArr = [];
        let potionCounter = getValue().potion;
        console.log(`Potion Counter: ${potionCounter}`);

        for(let i = 1; i <= potionCounter; i++){
            potionArr.push(`Potion${i}`);
        }

        potionArr.forEach(() => {
            if(potionCounter >= 17){
                inventoryWrapper.style.paddingLeft = "24px";
                inventoryWrapper.style.overflowY = "scroll";
            }
            const inventoryPotionImg = document.createElement("img");
            inventoryPotionImg.setAttribute("id", "inventory-potion-img");
            inventoryPotionImg.src = "assets/img/health-potion.png";
            inventoryWrapper.appendChild(inventoryPotionImg);
        });

        content.appendChild(playerBagPopupWrapper);
        playerBagPopupWrapper.appendChild(closePlayerBagBtn);
        playerBagPopupWrapper.appendChild(pentacleWrapper);
        pentacleWrapper.appendChild(pentacleImg);
        pentacleWrapper.appendChild(pentacleTextAmount);
        playerBagPopupWrapper.appendChild(inventoryWrapper);

        closePlayerBagBtn.addEventListener("click", () => {
            content.removeChild(playerBagPopupWrapper);
        });
    });
}

renderPlayerBag();

export function renderContracts(){
    const topNav = document.getElementById("top-nav");
    const content = document.getElementById("content");
    const howtoPlay = document.getElementById("howto-play");
    const stats = document.getElementById("stats");
    const coffee = document.getElementById("coffee");
    const tagLineWrapper = document.getElementById("tagline-wrapper");
    const gameNav = document.getElementById("game-nav");
    const introduction = document.getElementById("introduction");

    topNav.style.justifyContent = "flex-start";
    content.style.height = "100vh";
    content.style.justifyContent = "flex-start";

    const contractsBackBtn = document.createElement("i");
    contractsBackBtn.setAttribute("id", "contracts-backbtn");
    contractsBackBtn.setAttribute("class", "fa-solid fa-chevron-left");

    const contractsBackText = document.createElement("p");
    contractsBackText.setAttribute("id", "contracts-backtext");
    contractsBackText.textContent = "Go back";

    topNav.appendChild(contractsBackBtn);
    topNav.appendChild(contractsBackText);

    //adding witches
    const witchImgs = [
        "assets/contracts/Selene.png", "assets/contracts/Sage.png", "assets/contracts/Willow.png", 
        "assets/contracts/Lilith.png", "assets/contracts/Aspen.png", "assets/contracts/Demise.png",
    ];

    const witchesName = [
        "Selene", "Sage", "Willow", "Lilith", "Aspen", "Demise"
    ];

    const witchWrapper = document.createElement("div");
    witchWrapper.setAttribute("id", "witch-wrapper");

    content.appendChild(witchWrapper);

    witchImgs.forEach((index, item) => {
        const witchImgWrapper = document.createElement("div");
        witchImgWrapper.setAttribute("id", "witchimg-wrapper");

        const witchImg = document.createElement("img");
        witchImg.setAttribute("id", "witch-img");
        witchImg.src = index;
        witchImg.setAttribute("name", `${witchesName[item]}`);

        const witchName = document.createElement("p");
        witchName.setAttribute("id", "witch-name");
        witchName.textContent = `${witchesName[item]}`;

        witchWrapper.appendChild(witchImgWrapper);
        witchImgWrapper.appendChild(witchImg);
        witchImgWrapper.appendChild(witchName);

        witchImg.addEventListener("click", (event) => {
            const targetWitch = event.target.getAttribute("name");
            if(targetWitch === "Selene"){
                content.removeChild(witchWrapper);
                renderSelene();
            }
            else if(targetWitch === "Sage"){
                content.removeChild(witchWrapper);
                renderSage();
            }
            else if(targetWitch === "Willow"){
                alert(`You clicked: ${witchesName[item]}`);
            }
            else if(targetWitch === "Lilith"){
                alert(`You clicked: ${witchesName[item]}`);
            }
            else if(targetWitch === "Aspen"){
                alert(`You clicked: ${witchesName[item]}`);
            }
            else if(targetWitch === "Demise"){
                alert(`You clicked: ${witchesName[item]}`);
            }
            else{
                alert(`There's no witch with that name.`);
            }
        });
    });

    contractsBackBtn.addEventListener("click", () => {
        content.style.height = "auto";
        content.style.justifyContent = "space-around";
        content.removeChild(witchWrapper);
        content.removeChild(topNav);
        renderHome();
    });
    contractsBackText.addEventListener("click", () => {
        content.style.height = "auto";
        content.style.justifyContent = "space-around";
        content.removeChild(witchWrapper);
        content.removeChild(topNav);
        renderHome();
    });
}
