export function getFromStorage (key) {
    if (!key) {
        return null;
    }

    try {
        const valStr = localStorage.getItem(key);
        if (valStr) {
            return JSON.parse(valStr);
        }
        return null;
    } catch (err) {
        return null;
    }
}

export function setInStorage(key, obj) {
    if (!key) {
        console.error('Error: Key is missing');
    }

    try {
        localStorage.setItem(key, JSON.stringify(obj));
    } catch (err) {
        console.error(err);
    }


}