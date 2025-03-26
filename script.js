import { renderSelene } from "./selene.js";

export function renderHome(){
    const topNav = document.createElement("div");
    topNav.setAttribute("id", "top-nav");
    const howtoPlay = document.createElement("span");
    howtoPlay.setAttribute("id", "howto-play");
    howtoPlay.textContent = "Tutorial";
    const stats = document.createElement("span");
    stats.setAttribute("id", "stats");
    stats.textContent = "Statistics";
    const coffee = document.createElement("span");
    coffee.setAttribute("id", "coffee");
    coffee.textContent = "Donate";

    const tagLineWrapper = document.createElement("div");
    tagLineWrapper.setAttribute("id", "tagline-wrapper");
    
    const tagLine = document.createElement("p");
    tagLine.setAttribute("id", "tag-line");
    tagLine.textContent = `"Luck is your guide, strategy is your edge, and magic is your fate."`;

    const gameNav = document.createElement("div");
    gameNav.setAttribute("id", "game-nav");

    const catalog = document.createElement("img");
    catalog.setAttribute("id", "catalog");
    catalog.src = "assets/img/catalog.png";

    const contracts = document.createElement("img");
    contracts.setAttribute("id", "contracts");
    contracts.src = "assets/img/contracts.png";

    const shop = document.createElement("img");
    shop.setAttribute("id", "shop");
    shop.src = "assets/img/shop.png";

    const gameNavInfo = document.createElement("div");
    gameNavInfo.setAttribute("id", "gamenav-info");
    
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
    introduction.textContent = `Oh no, you've been cursed by witches! There's no turning back now—
    you must face them one by one, my friend. You can open the catalog to review all the spells 
    you've unlocked so far and get acquainted with them. Use the contracts to challenge the witches 
    to duels in order to break the curse. Additionally, you can visit the shop to purchase items to aid you 
    in your battles. That’s all for now—good luck, my friend!`;
    
    content.appendChild(topNav);
    topNav.appendChild(howtoPlay);
    topNav.appendChild(stats);
    topNav.appendChild(coffee);
    content.appendChild(tagLineWrapper);
    tagLineWrapper.appendChild(tagLine);
    content.appendChild(gameNav);
    gameNav.appendChild(catalog);
    gameNav.appendChild(contracts);
    gameNav.appendChild(shop);
    content.appendChild(gameNavInfo);
    gameNavInfo.appendChild(catalogTitle);
    gameNavInfo.appendChild(contractsTitle);
    gameNavInfo.appendChild(shopTitle);
    content.appendChild(introduction);

    catalog.addEventListener("click", () => {
        renderCatalog();
    });

    contracts.addEventListener("click", () => {
        renderContracts();
    });

    function renderCatalog(){
        topNav.removeChild(howtoPlay);
        topNav.removeChild(stats);
        topNav.removeChild(coffee);
        content.removeChild(tagLineWrapper);
        content.removeChild(gameNav);
        content.removeChild(gameNavInfo);
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
    
    function renderContracts(){
        topNav.removeChild(howtoPlay);
        topNav.removeChild(stats);
        topNav.removeChild(coffee);
        content.removeChild(tagLineWrapper);
        content.removeChild(gameNav);
        content.removeChild(gameNavInfo);
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
    
        //adding witches
        const witchImgs = [
            "assets/contracts/Selene.png", "assets/contracts/Sage.png", "assets/contracts/Willow.png", 
            "assets/contracts/Lilith.png", "assets/contracts/Aspen.png", "assets/contracts/Demise.png",
        ];

        const witchesName = [
            "Selene", "Sage", "Willow", "Lilith", "Aspen", "Demise"
        ];

        content.style.justifyContent = "flex-start";

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
                    alert(`You clicked: ${witchesName[item]}`);
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
            content.style.height = "100vh";
            content.style.justifyContent = "space-around";
            content.removeChild(witchWrapper);
            content.removeChild(topNav);
            renderHome();
        });
        contractsBackText.addEventListener("click", () => {
            content.style.height = "100vh";
            content.style.justifyContent = "space-around";
            content.removeChild(witchWrapper);
            content.removeChild(topNav);
            renderHome();
        });
    }
    
}

renderHome();
