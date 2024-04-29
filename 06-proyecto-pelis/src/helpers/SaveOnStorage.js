export const SaveOnStorage = (key, item) => {
    let items = JSON.parse(localStorage.getItem(key));
    if (Array.isArray(items)) {
        items.push(item)
    } else {
        items = [item]
    }
    console.log(items)
    
    localStorage.setItem(key, JSON.stringify(items))
    return item;
}