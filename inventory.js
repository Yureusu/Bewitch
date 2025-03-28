
export let playerInventory = {
    pentacle: 4, 
    potion: 2,
    crystal: 0
}

export function getValue() {
    return playerInventory;
}
  
export function setValue(newValue) {
    playerInventory = newValue;
}

