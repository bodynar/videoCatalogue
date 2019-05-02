import { IMenuItem } from 'src/app/models/menuItem';

const siteMenu: Array<IMenuItem> = [
    {
        name: 'Videos',
        isActive: true,
        link: '/videos/'
    },
    {
        name: 'Employees',
        isActive: true,
        link: '/employees/'
    }
];

export { siteMenu };