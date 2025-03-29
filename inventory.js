
export let playerInventory = {
    pentacle: 2, 
    potion: 20,
    crystal: 0
}

export function getValue() {
    return playerInventory;
}
  
export function setValue(newValue) {
    playerInventory = newValue;
}

