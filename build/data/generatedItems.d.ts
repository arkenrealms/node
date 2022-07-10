declare const _default: ({
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution: string;
        Date: string;
        "Max Supply": string;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution: string;
        Date: string;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "6": string;
                    "7": string;
                    "8": string;
                    "1"?: undefined;
                };
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {
                    "6"?: undefined;
                    "7"?: undefined;
                    "8"?: undefined;
                    "1"?: undefined;
                };
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map: {
                    "1": string;
                    "6"?: undefined;
                    "7"?: undefined;
                    "8"?: undefined;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                value?: undefined;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution: string;
        Date: string;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "8": string;
                    "9": string;
                    "10": string;
                    "3"?: undefined;
                };
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {
                    "8"?: undefined;
                    "9"?: undefined;
                    "10"?: undefined;
                    "3"?: undefined;
                };
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map: {
                    "3": string;
                    "8"?: undefined;
                    "9"?: undefined;
                    "10"?: undefined;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution: string;
        Date: string;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "9": string;
                    "10": string;
                    "11": string;
                };
            } | {
                id: number;
                description: string;
                map: {
                    "9"?: undefined;
                    "10"?: undefined;
                    "11"?: undefined;
                };
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description?: undefined;
                min?: undefined;
                max?: undefined;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution: string;
        Date: string;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "9": string;
                    "10": string;
                    "11": string;
                    "2"?: undefined;
                };
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {
                    "9"?: undefined;
                    "10"?: undefined;
                    "11"?: undefined;
                    "2"?: undefined;
                };
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map: {
                    "2": string;
                    "9"?: undefined;
                    "10"?: undefined;
                    "11"?: undefined;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                value: number;
                description?: undefined;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution: string;
        Date: string;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "11": string;
                    "12": string;
                    "13": string;
                    "14": string;
                };
            } | {
                id: number;
                description: string;
                map: {
                    "11"?: undefined;
                    "12"?: undefined;
                    "13"?: undefined;
                    "14"?: undefined;
                };
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        Distribution: string;
        Date: string;
        "Rune Word"?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution: string;
        Date: string;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "11": string;
                    "12": string;
                    "13": string;
                    "14": string;
                };
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {
                    "11"?: undefined;
                    "12"?: undefined;
                    "13"?: undefined;
                    "14"?: undefined;
                };
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                value: number;
                description?: undefined;
                map?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        Distribution: string;
        Date: string;
        "Rune Word"?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "12": string;
                    "13": string;
                    "14": string;
                };
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {
                    "12"?: undefined;
                    "13"?: undefined;
                    "14"?: undefined;
                };
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
            } | {
                id: number;
                description?: undefined;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        Distribution: string;
        Date: string;
        "Rune Word"?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {};
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        Distribution: string;
        Date: string;
        "Rune Word"?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "14": string;
                    "15": string;
                    "16": string;
                };
                value?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                value: number;
                description?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        Distribution: string;
        "Rune Word"?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "3": string;
                    "4": string;
                    "5": string;
                    "6": string;
                };
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        Date: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "0": string;
                    "1": string;
                    "2": string;
                };
                value?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "7": string;
                    "8": string;
                    "9": string;
                    "10": string;
                    "11": string;
                    "12": string;
                    "13": string;
                    "14": string;
                    "15": string;
                    "16": string;
                    "17": string;
                };
                value?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: {
                id: number;
                description: string;
                min: number;
                max: number;
            }[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
            } | {
                id: number;
                description?: undefined;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: any;
                max: any;
                map: {};
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: any[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "3": string;
                    "4": string;
                    "5": string;
                };
            } | {
                id: number;
                description: string;
                map: {
                    "3"?: undefined;
                    "4"?: undefined;
                    "5"?: undefined;
                };
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "3": string;
                    "4": string;
                    "5": string;
                };
                value?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                value: number;
                description?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {
                    "3"?: undefined;
                    "4"?: undefined;
                    "5"?: undefined;
                };
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "13": string;
                    "14": string;
                    "15": string;
                    "16": string;
                    "17": string;
                };
                value?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                value: number;
                description?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "13": string;
                    "14": string;
                    "15": string;
                };
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {
                    "13"?: undefined;
                    "14"?: undefined;
                    "15"?: undefined;
                };
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                value: number;
                description?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "0": string;
                    "1": string;
                    "2": string;
                };
            } | {
                id: number;
                description: string;
                map: {
                    "0"?: undefined;
                    "1"?: undefined;
                    "2"?: undefined;
                };
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "16": string;
                    "17": string;
                    "18": string;
                    "19": string;
                    "20": string;
                    "21": string;
                    "22": string;
                    "23": string;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
            }[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: any[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: number[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: {
                id: number;
                description: string;
            }[];
            perfection: any[];
        };
        "3": {
            attributes: {
                id: number;
                description: string;
            }[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word": string;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: {
                id: number;
                description: string;
                min: number;
                max: number;
            }[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: number[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type?: undefined;
        Subtype?: undefined;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: any[];
            perfection: any[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: any[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        "Rune Word": string;
        Type?: undefined;
        Subtype?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: {
            id: number;
            quantity: number;
        }[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: any[];
            perfection: any[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: any[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: {
                id: number;
                description: string;
                min: number;
                max: number;
            }[];
            perfection: number[];
        };
        "2": {
            attributes: {
                id: number;
                description: string;
                map: {};
            }[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "3": string;
                    "4": string;
                    "5": string;
                    "6": string;
                };
                value?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                value: number;
                description?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: {
                id: number;
                description: string;
                map: {};
            }[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "3": string;
                    "4": string;
                    "5": string;
                    "6": string;
                };
                value?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: number[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {};
            })[];
            perfection: number[];
        };
        "2": {
            attributes: {
                id: number;
                description: string;
            }[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                min: number;
                max: number;
                description?: undefined;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    value: string;
    specificType: number;
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Subtype: string;
        Type?: undefined;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: any[];
            perfection: any[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: any[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
    type?: undefined;
    subType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "11": string;
                    "12": string;
                    "13": string;
                    "14": string;
                };
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {
                    "11"?: undefined;
                    "12"?: undefined;
                    "13"?: undefined;
                    "14"?: undefined;
                };
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "5": string;
                    "6": string;
                    "7": string;
                };
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {
                    "5"?: undefined;
                    "6"?: undefined;
                    "7"?: undefined;
                };
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
                value?: undefined;
            } | {
                id: number;
                map: {};
                description?: undefined;
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
                value?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "20": string;
                    "21": string;
                    "22": string;
                    "23": string;
                    "24": string;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: {
                id: number;
                description: string;
            }[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: number[];
    materials: any[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Distribution: string;
        Date: string;
        Type?: undefined;
        Subtype?: undefined;
        "Rune Word"?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: any[];
            perfection: any[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: any[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Distribution: string;
        Date: string;
        "Max Supply": string;
        Type?: undefined;
        Subtype?: undefined;
        "Rune Word"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: any[];
            perfection: any[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: any[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                value?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                value: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "7": string;
                    "8": string;
                    "9": string;
                    "10": string;
                    "11": string;
                    "12": string;
                    "13": string;
                    "14": string;
                    "15": string;
                    "16": string;
                    "17": string;
                    "18": string;
                };
                value?: undefined;
            } | {
                id: number;
                description: string;
                map: {
                    "7"?: undefined;
                    "8"?: undefined;
                    "9"?: undefined;
                    "10"?: undefined;
                    "11"?: undefined;
                    "12"?: undefined;
                    "13"?: undefined;
                    "14"?: undefined;
                    "15"?: undefined;
                    "16"?: undefined;
                    "17"?: undefined;
                    "18"?: undefined;
                };
                min?: undefined;
                max?: undefined;
                value?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {};
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    subType: number;
    specificType: number;
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Subtype: string;
        Type?: undefined;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: any[];
            perfection: any[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: any[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
    type?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Type: string;
        Subtype: string;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min?: undefined;
                max?: undefined;
                map?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "22": string;
                    "23": string;
                    "24": string;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: any[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    specificType: number;
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Subtype: string;
        Distribution: string;
        Date: string;
        "Max Supply": string;
        Type?: undefined;
        "Rune Word"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                map: {};
            } | {
                id: number;
                description: string;
                map?: undefined;
            })[];
            perfection: any[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                map: {};
            } | {
                id: number;
                description: string;
                map?: undefined;
            })[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                map: {};
            } | {
                id: number;
                description: string;
                map?: undefined;
            })[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    type?: undefined;
    subType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    specificType: number;
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Subtype: string;
        "Max Supply": string;
        Type?: undefined;
        "Rune Word"?: undefined;
        Distribution?: undefined;
        Date?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                map: {};
            } | {
                id: number;
                description: string;
                map?: undefined;
            })[];
            perfection: any[];
        };
        "2": {
            attributes: ({
                id: number;
                description: string;
                map: {};
            } | {
                id: number;
                description: string;
                map?: undefined;
            })[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                map: {};
            } | {
                id: number;
                description: string;
                map?: undefined;
            })[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    type?: undefined;
    subType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Distribution: string;
        Date: string;
        "Max Supply": string;
        Type?: undefined;
        Subtype?: undefined;
        "Rune Word"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: any[];
            perfection: any[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: any[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    value: string;
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Date: string;
        "Max Supply": string;
        Type?: undefined;
        Subtype?: undefined;
        "Rune Word"?: undefined;
        Distribution?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: any[];
            perfection: any[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: any[];
            perfection: any[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    icon?: undefined;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    specificType: number;
    isNew: boolean;
    isSecret: boolean;
    isUltraSecret: boolean;
    isPaused: boolean;
    isRetired: boolean;
    isDisabled: boolean;
    isCraftable: boolean;
    isEnabled: boolean;
    isEquipable: boolean;
    isUnequipable: boolean;
    isTradeable: boolean;
    isTransferable: boolean;
    isUpgradable: boolean;
    isPublishable: boolean;
    isRuneword: boolean;
    createdDate: number;
    hotness: number;
    numPerfectionRolls: number;
    attributes: any[];
    details: {
        Subtype: string;
        Distribution: string;
        Date: string;
        Type?: undefined;
        "Rune Word"?: undefined;
        "Max Supply"?: undefined;
    };
    recipe: {
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: ({
                id: number;
                description: string;
                min: number;
                max: number;
                map: {
                    "1": string;
                    "2": string;
                    "3": string;
                    "4": string;
                    "5": string;
                    "6": string;
                };
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                description: string;
                map: {};
                min?: undefined;
                max?: undefined;
            } | {
                id: number;
                description: string;
                min: number;
                max: number;
                map?: undefined;
            })[];
            perfection: number[];
        };
        "4": {
            attributes: any[];
            perfection: any[];
        };
        "5": {
            attributes: any[];
            perfection: any[];
        };
    };
    skills: any[];
    materials: any[];
    category: string;
    type?: undefined;
    subType?: undefined;
    slots?: undefined;
})[];
export default _default;
