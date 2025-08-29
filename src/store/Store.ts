
export function getStore(itemName: string) {
    return JSON.parse(<any>localStorage.getItem(itemName));
}

export function setStore(itemName: string, itemValue: any) {
    localStorage.setItem(itemName, JSON.stringify(itemValue))
}

export function getId(model: string) {
    const key = `last${model}Id`
    const lastId = parseInt(localStorage.getItem(key) || "0");

    const id = lastId + 1;
    localStorage.setItem(key, id.toString())

    return id.toString();
}
