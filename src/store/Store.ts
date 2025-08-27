
export function getStore(itemName: string) {
    return JSON.parse(localStorage.getItem(itemName));
}

export function setStore(itemName: string, itemValue: any) {
    localStorage.setItem(itemName, JSON.stringify(itemValue))
    return boolean;
}