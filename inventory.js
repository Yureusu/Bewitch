
export let playerInventory = {
    pentacle: 12, 
    potion: 2,
    crystal: 0,
    sageLock: false
}

export function getValue() {
    return playerInventory;
}
  
export function setValue(newValue) {
    playerInventory = newValue;
}

