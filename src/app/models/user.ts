interface User {
    id: string; // todo: delete when server
    login: string;
    passwordHash?: string;
    token?: string;

    isAdmin?: boolean;
}

export { User };