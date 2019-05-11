interface MenuItem {
    position?: number;
    name: string;
    childs?: Array<MenuItem>;
    isActive?: boolean;
    link?: string;
}

export { MenuItem };