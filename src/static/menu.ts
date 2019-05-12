import { MenuItem } from 'models/menuItem';

const siteMenu: Array<MenuItem> = [
    {
        name: 'Videos',
        link: 'videos'
    },
    {
        name: 'Employees',
        link: 'employees'
    },
    {
        name: 'User',
        link: 'user',
        position: 1
    },
    {
        name: 'Vacations',
        link: 'vacations'
    },
    {
        name: 'Login',
        link: 'login',
        position: 2,
        withoutRoot: true
    }
];

export { siteMenu };