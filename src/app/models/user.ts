interface User {
    id: string;
    login: string;
    passwordHash?: string;
    token?: string;

    isAdmin?: boolean;
}

export { User };