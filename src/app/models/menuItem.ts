interface MenuItem {
    position?: number;
    name: string;
    childs?: Array<MenuItem>;
    isActive?: boolean;
    link?: string;
    withoutRoot?: boolean;
}

export { MenuItem };