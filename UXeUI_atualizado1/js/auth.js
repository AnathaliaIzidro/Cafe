function login(username, password) {
    const users = getFromLocalStorage('users') || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        saveToLocalStorage('currentUser', user);
        return user;
    } else {
        showAlert('Usuário ou senha incorretos', 'error');
        return null;
    }
}

function logout() {
    removeFromLocalStorage('currentUser');
}

function getCurrentUser() {
    return getFromLocalStorage('currentUser');
}

function isAdmin() {
    const user = getCurrentUser();
    return user && user.role === 'admin';
}

// Função para registrar um novo usuário
function register(username, password, role) {
    const users = getFromLocalStorage('users') || [];
    const user = { username, password, role };
    users.push(user);
    saveToLocalStorage('users', users);
}

// Registro de alguns usuários para teste
register('admin', 'admin123', 'admin');
register('employee', 'employee123', 'employee');
