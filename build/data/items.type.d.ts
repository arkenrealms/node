export declare enum ItemsBonusType {
    FIRE = "fire",
    SWIMMING = "swimming",
    CLIMBING = "climbing",
    JUMPING = "jumping"
}
export declare enum ItemsMainCategoriesType {
    WEAPONS = "weapon",
    SHIELDS = "shield",
    ARMORS = "armor",
    ACCESSORIES = "accessory",
    RUNES = "rune",
    OTHER = "runeword"
}
export declare enum ItemCategoriesType {
    WEAPON = "weapon",
    SHIELD = "shield",
    ARMOR = "armor",
    GREAVE = "greave",
    HELM = "helm",
    RUNE = "rune",
    ACCESSORY = "accessory"
}
export declare type ItemDetails = {
    [key: string]: string;
};
export declare type ItemAttributeMap = {
    [key: string]: string;
};
export declare type ItemAttribute = {
    id: number;
    min: number;
    max?: number;
    value?: number;
    name: string;
    map: ItemAttributeMap;
};
export declare type ItemBranch = {
    description: string | string[];
    attributes: ItemAttribute[];
};
export declare type ItemRarity = {
    id: number;
    name: string;
};
export declare type ItemType = {
    id?: number;
    name: string;
    rarity?: ItemRarity;
    category: ItemCategoriesType;
    branches?: ItemBranch[];
    icon: string;
    video?: string;
    value: string;
    description: string | string[];
    details?: ItemDetails;
    bonus?: ItemsBonusType;
    attributes?: ItemAttribute[];
    isNew?: boolean;
    isDisabled?: boolean;
    tokenId?: string;
    tokenIds?: string[];
    isCraftable?: boolean;
    isTradeable?: boolean;
    isEquipable?: boolean;
    isUnequipable?: boolean;
    isTransferable?: boolean;
    isUpgradable?: boolean;
    isRuneword?: boolean;
    shorthand?: string;
    slotId?: number;
    perfection?: number;
};
export declare type ItemsPage = {
    items: ItemType[];
    mainCategory: ItemsMainCategoriesType;
    page: number;
};
export declare type ItemsType = {
    [key: string]: ItemType[];
};
