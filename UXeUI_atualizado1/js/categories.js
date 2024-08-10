// Funções para gerenciar categorias de produtos, se necessário.

// Adiciona uma categoria
function addCategory(categoryName) {
    const categories = getAllCategories();
    categories.push(categoryName);
    saveCategories(categories);
}

// Obtém todas as categorias
function getAllCategories() {
    return getFromLocalStorage('categories') || [];
}

// Salva as categorias no LocalStorage
function saveCategories(categories) {
    saveToLocalStorage('categories', categories);
}

// Remove uma categoria
function removeCategory(categoryName) {
    let categories = getAllCategories();
    categories = categories.filter(cat => cat !== categoryName);
    saveCategories(categories);
}
