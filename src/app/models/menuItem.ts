interface IMenuItem {
    name: string;
    childs?: Array<IMenuItem>;
    isActive: boolean;
    link?: string;
}

export { IMenuItem };