// Funções de manipulação do LocalStorage

// Salva um item no LocalStorage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Obtém um item do LocalStorage
function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Remove um item do LocalStorage
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}
