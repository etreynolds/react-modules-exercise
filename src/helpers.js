/** Returns a randomly selected item from array of fruits */

function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}


/** Removes the first matching item from items, if item exists, and returns it.
 * 
 * Otherwise, returns undefined.
 * 
*/

function remove(item, items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, 1), ...items.slice(i + 1)]
        }
    }
}

export { choice, remove }