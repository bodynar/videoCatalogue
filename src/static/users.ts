import { User } from 'models/user';

const mockUsers: Array<User> = [
    {
        id: '0001',
        login: 'admin',
        passwordHash: 'admin',
        isAdmin: true
    },
    {
        id: '0002',
        login: 'moder',
        passwordHash: 'moder',
        isAdmin: false
    },
    {
        id: '0003',
        login: 'user',
        passwordHash: 'user',
        isAdmin: false
    }
];

export { mockUsers };