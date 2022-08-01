declare const _default: ({
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "0": string;
                        "1": string;
                        "2": string;
                    };
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "4"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "4": string;
                        "109"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "109"?: undefined;
                        "4"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
            }[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                game?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                paramValue2: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                nature?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "412": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                param1: {
                    spec: string;
                    map: {
                        "412"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                param2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                paramType1?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "494": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
                param2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: any[];
    isPolled: boolean;
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
        requirement: any[];
    };
    description: string;
    shortDescription: string;
    visualDescription: string;
    branches: {
        "1": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            }[];
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
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
            }[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "3": string;
                        "109"?: undefined;
                        "2"?: undefined;
                        "476"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "3"?: undefined;
                        "2"?: undefined;
                        "476"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "2": string;
                        "3"?: undefined;
                        "109"?: undefined;
                        "476"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "476": string;
                        "3"?: undefined;
                        "109"?: undefined;
                        "2"?: undefined;
                    };
                };
                paramType3?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "480": string;
                    };
                };
                paramType2?: undefined;
                paramType3?: undefined;
                paramValue1?: undefined;
                param2?: undefined;
                paramValue2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
            }[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                game?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "9"?: undefined;
                        "496"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                        "109"?: undefined;
                        "496"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "496": string;
                        "109"?: undefined;
                        "9"?: undefined;
                    };
                };
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
                paramValue1?: undefined;
                param2?: undefined;
                paramType2?: undefined;
                paramValue2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                influences?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "474": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "6": string;
                        "7": string;
                        "8": string;
                        "1"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "6"?: undefined;
                        "7"?: undefined;
                        "8"?: undefined;
                    };
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "201": string;
                        "1"?: undefined;
                    };
                };
                paramValue1?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        1: string;
                        "201"?: undefined;
                    };
                };
                paramValue1?: undefined;
                influences?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "1"?: undefined;
                        "4"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "1"?: undefined;
                        "4"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                paramValue2: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                nature?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                param1: {
                    spec: string;
                    map: {
                        "409"?: undefined;
                        "1"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "4"?: undefined;
                    };
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "4": string;
                        "1"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "409": string;
                        "1"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "409": string;
                        "1"?: undefined;
                    };
                };
                param2: {
                    spec: string;
                    map: {
                        "1"?: undefined;
                        "4"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                description?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        1: string;
                        "409"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "8": string;
                        "9": string;
                        "10": string;
                        "7"?: undefined;
                        "3"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "7": string;
                        "8"?: undefined;
                        "9"?: undefined;
                        "10"?: undefined;
                        "3"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        3: string;
                        "8"?: undefined;
                        "9"?: undefined;
                        "10"?: undefined;
                        "7"?: undefined;
                    };
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                game?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramValue1?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
                influences?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                        "4"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "4": string;
                        "9"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "9": string;
                        "10": string;
                        "11": string;
                        "6"?: undefined;
                        "4"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "6": string;
                        "9"?: undefined;
                        "10"?: undefined;
                        "11"?: undefined;
                        "4"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        4: string;
                        "9"?: undefined;
                        "10"?: undefined;
                        "11"?: undefined;
                        "6"?: undefined;
                    };
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    map: {
                        "4"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramValue1?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        4: string;
                    };
                };
                paramValue1?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                influences?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "9"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "455": string;
                        "4"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        4: string;
                        "455"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "9": string;
                        "10": string;
                        "11": string;
                        "5"?: undefined;
                        "2"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "5": string;
                        "9"?: undefined;
                        "10"?: undefined;
                        "11"?: undefined;
                        "2"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        2: string;
                        "9"?: undefined;
                        "10"?: undefined;
                        "11"?: undefined;
                        "5"?: undefined;
                    };
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    map: {
                        "2"?: undefined;
                        "11"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                influences?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        2: string;
                        "11"?: undefined;
                    };
                };
                influences?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                description?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "11": string;
                        "2"?: undefined;
                    };
                };
                description?: undefined;
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "6"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "1"?: undefined;
                        "6"?: undefined;
                    };
                    value?: undefined;
                };
                paramValue2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "6"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "6": string;
                        "1"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    map: {
                        "2"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        2: string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "11": string;
                        "12": string;
                        "13": string;
                        "14": string;
                        "8"?: undefined;
                        "6"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "8": string;
                        "11"?: undefined;
                        "12"?: undefined;
                        "13"?: undefined;
                        "14"?: undefined;
                        "6"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        6: string;
                        "11"?: undefined;
                        "12"?: undefined;
                        "13"?: undefined;
                        "14"?: undefined;
                        "8"?: undefined;
                    };
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "430": string;
                        "6"?: undefined;
                    };
                };
                paramValue1?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        6: string;
                        "430"?: undefined;
                    };
                };
                paramValue1?: undefined;
                influences?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                param1: {
                    spec: string;
                    map: {
                        "21"?: undefined;
                        "475"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "21": string;
                        "475"?: undefined;
                    };
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "9"?: undefined;
                    };
                    value?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "475": string;
                        "21"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "3": string;
                        "5"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        5: string;
                        "3"?: undefined;
                    };
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "467": string;
                        "5"?: undefined;
                    };
                };
                influences?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        5: string;
                        "467"?: undefined;
                    };
                };
                influences?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "496"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "496": string;
                        "109"?: undefined;
                    };
                };
                influences?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "24": string;
                        "471"?: undefined;
                        "5"?: undefined;
                    };
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "471": string;
                        "24"?: undefined;
                        "5"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        5: string;
                        "24"?: undefined;
                        "471"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "11": string;
                        "12": string;
                        "13": string;
                        "14": string;
                        "7"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "11": string;
                        "12"?: undefined;
                        "13"?: undefined;
                        "14"?: undefined;
                        "7"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        7: string;
                        "11"?: undefined;
                        "12"?: undefined;
                        "13"?: undefined;
                        "14"?: undefined;
                    };
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                game?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {
                        "11"?: undefined;
                        "7"?: undefined;
                        "101"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "11": string;
                        "7"?: undefined;
                        "101"?: undefined;
                    };
                };
                influences?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        7: string;
                        "11"?: undefined;
                        "101"?: undefined;
                    };
                };
                influences?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                description?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "101": string;
                        "11"?: undefined;
                        "7"?: undefined;
                    };
                };
                description?: undefined;
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "2": string;
                        "1"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                param1: {
                    spec: string;
                    map: {
                        "481"?: undefined;
                        "7"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "2"?: undefined;
                        "1"?: undefined;
                    };
                    value?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "481": string;
                        "7"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "2"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        7: string;
                        "481"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
            }[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                game?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "5"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                param1: {
                    spec: string;
                    map: {
                        "460"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "5": string;
                        "109"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "460": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                game?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "3"?: undefined;
                        "5"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "3": string;
                        "109"?: undefined;
                        "5"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                paramValue2: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                nature?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "109"?: undefined;
                        "3"?: undefined;
                        "5"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramValue2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "5": string;
                        "109"?: undefined;
                        "3"?: undefined;
                    };
                };
                paramValue2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
    hotness: string;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "9": string;
                        "10": string;
                        "11": string;
                    };
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
                nature?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                nature: string;
                influences: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                };
                paramType1?: undefined;
                paramValue1?: undefined;
                description?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                        "1"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "9"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "9"?: undefined;
                        "1"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                influences?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "9"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "419": string;
                        "31"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "31": string;
                        "419"?: undefined;
                    };
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "9"?: undefined;
                        "1"?: undefined;
                    };
                    value?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                param1: {
                    spec: string;
                    map: {
                        "419"?: undefined;
                        "31"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "9"?: undefined;
                        "1"?: undefined;
                    };
                    value?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "9": string;
                        "10": string;
                        "11": string;
                        "5"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        5: string;
                        "9"?: undefined;
                        "10"?: undefined;
                        "11"?: undefined;
                    };
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description?: undefined;
                param1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                };
                paramValue1?: undefined;
                influences?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                        "7"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                paramValue2: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                nature?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "9"?: undefined;
                        "7"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "7": string;
                        "9"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                param1: {
                    spec: string;
                    map: {
                        "472"?: undefined;
                        "5"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "472": string;
                        "5"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        5: string;
                        "472"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
            }[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                game?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "215": string;
                    };
                };
                influences?: undefined;
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "5"?: undefined;
                        "4"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "5": string;
                        "109"?: undefined;
                        "4"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "4": string;
                        "109"?: undefined;
                        "5"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "495": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: any[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        1: string;
                    };
                };
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                influences?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "5"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                param1: {
                    spec: string;
                    map: {
                        "529"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "5": string;
                        "109"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "109"?: undefined;
                        "5"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "529": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "0": string;
                        "1": string;
                        "2": string;
                        "3": string;
                        "4": string;
                        "5": string;
                        "6": string;
                        "7": string;
                        "8": string;
                        "9": string;
                        "10": string;
                        "11": string;
                        "12": string;
                    };
                };
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "7"?: undefined;
                        "2"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "7": string;
                        "109"?: undefined;
                        "2"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "2": string;
                        "109"?: undefined;
                        "7"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "9": string;
                        "10": string;
                        "11": string;
                    };
                    value?: undefined;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "213": string;
                    };
                };
                paramValue1?: undefined;
                influences?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "6": string;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramType3?: undefined;
                param2?: undefined;
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramType3?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramType3?: undefined;
                paramValue1?: undefined;
                param2?: undefined;
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramType3?: undefined;
                param2?: undefined;
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "454": string;
                    };
                };
                paramType2?: undefined;
                paramType3?: undefined;
                paramValue1?: undefined;
                param2?: undefined;
                paramValue2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
            }[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "4": string;
                        "9"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramType3?: undefined;
                param2?: undefined;
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                        "4"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramType3?: undefined;
                paramValue1?: undefined;
                param2?: undefined;
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "476": string;
                    };
                };
                paramType2?: undefined;
                paramType3?: undefined;
                paramValue1?: undefined;
                param2?: undefined;
                paramValue2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
            }[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                game?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "214": string;
                    };
                };
                paramValue1?: undefined;
                influences?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
                influences?: undefined;
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "460": string;
                    };
                };
                paramValue1?: undefined;
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "3": string;
                        "4": string;
                        "5": string;
                        "6": string;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "3": string;
                    };
                };
            }[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "3": string;
                        "4": string;
                        "5": string;
                        "6": string;
                    };
                };
                paramType2?: undefined;
                influences?: undefined;
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
                paramType2?: undefined;
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                paramType2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "0": string;
                        "1": string;
                        "2": string;
                    };
                    value?: undefined;
                };
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                influences?: undefined;
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                influences?: undefined;
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
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
                };
                influences?: undefined;
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                influences?: undefined;
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "2"?: undefined;
                        "1"?: undefined;
                        "16"?: undefined;
                        "17"?: undefined;
                        "18"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "2": string;
                        "109"?: undefined;
                        "1"?: undefined;
                        "16"?: undefined;
                        "17"?: undefined;
                        "18"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "109"?: undefined;
                        "2"?: undefined;
                        "16"?: undefined;
                        "17"?: undefined;
                        "18"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "16": string;
                        "17": string;
                        "18": string;
                        "109"?: undefined;
                        "2"?: undefined;
                        "1"?: undefined;
                    };
                    value?: undefined;
                };
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
            }[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                game?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                };
                influences?: undefined;
                description?: undefined;
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "1"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "109"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    map?: undefined;
                    value?: undefined;
                };
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
        "Max Supply": string;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "3": string;
                        "4": string;
                        "5": string;
                        "6": string;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "3": string;
                    };
                };
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                influences?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
                paramType2?: undefined;
                paramType3?: undefined;
                paramValue1?: undefined;
                influences?: undefined;
                description?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
                param2: {
                    spec: string;
                    map: {};
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
                paramType2?: undefined;
                paramType3?: undefined;
                influences?: undefined;
                param2?: undefined;
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
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        7: string;
                    };
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                influences?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        7: string;
                    };
                };
                influences?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {};
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "512": string;
                    };
                };
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                influences?: undefined;
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                influences?: undefined;
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                influences?: undefined;
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "4"?: undefined;
                        "2"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "4": string;
                        "109"?: undefined;
                        "2"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "2": string;
                        "109"?: undefined;
                        "4"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "499": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "3": string;
                        "4": string;
                        "5": string;
                        "24"?: undefined;
                        "6"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "24": string;
                        "3"?: undefined;
                        "4"?: undefined;
                        "5"?: undefined;
                        "6"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        6: string;
                        "3"?: undefined;
                        "4"?: undefined;
                        "5"?: undefined;
                        "24"?: undefined;
                    };
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "3": string;
                        "4": string;
                        "5": string;
                        "6"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        6: string;
                        "3"?: undefined;
                        "4"?: undefined;
                        "5"?: undefined;
                    };
                };
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                        "7"?: undefined;
                        "3"?: undefined;
                        "4"?: undefined;
                        "5"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "7": string;
                        "9"?: undefined;
                        "3"?: undefined;
                        "4"?: undefined;
                        "5"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "21": string;
                        "501"?: undefined;
                    };
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "9"?: undefined;
                        "7"?: undefined;
                        "3"?: undefined;
                        "4"?: undefined;
                        "5"?: undefined;
                    };
                    value?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "3": string;
                        "4": string;
                        "5": string;
                        "9"?: undefined;
                        "7"?: undefined;
                    };
                    value?: undefined;
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "501": string;
                        "21"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                nature: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType1?: undefined;
                paramValue1?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
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
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "13": string;
                        "14": string;
                        "15": string;
                        "4"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        4: string;
                        "13"?: undefined;
                        "14"?: undefined;
                        "15"?: undefined;
                    };
                };
            })[];
            perfection: number[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    map: {
                        "4"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        4: string;
                    };
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "0": string;
                        "1": string;
                        "2": string;
                        "19"?: undefined;
                        "4"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "19": string;
                        "0"?: undefined;
                        "1"?: undefined;
                        "2"?: undefined;
                        "4"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        4: string;
                        "0"?: undefined;
                        "1"?: undefined;
                        "2"?: undefined;
                        "19"?: undefined;
                    };
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                        "7"?: undefined;
                        "1"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "7": string;
                        "9"?: undefined;
                        "1"?: undefined;
                    };
                };
                paramValue2?: undefined;
                influences?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "9"?: undefined;
                        "7"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
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
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1?: undefined;
            })[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "22": string;
                    };
                };
            })[];
            perfection: any[];
        };
        "2": {
            attributes: any[];
            perfection: any[];
        };
        "3": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "22": string;
                    };
                };
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                nature: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType1?: undefined;
                description?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "19": string;
                    };
                };
                description?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
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
    materials: number[];
    category: string;
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramValue1?: undefined;
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
                description?: undefined;
                paramValue1?: undefined;
                paramType2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
            }[];
            perfection: any[];
        };
        "3": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "5": string;
                        "6": string;
                        "7": string;
                        "26"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "26": string;
                        "5"?: undefined;
                        "6"?: undefined;
                        "7"?: undefined;
                    };
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "1"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "3": string;
                    };
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "109"?: undefined;
                        "1"?: undefined;
                    };
                    value?: undefined;
                };
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                param1: {
                    spec: string;
                    map: {
                        "3"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "109"?: undefined;
                        "1"?: undefined;
                    };
                    value?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "109"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                game?: undefined;
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {
                        "3"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "0": string;
                        "1": string;
                        "2": string;
                        "27"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "27": string;
                        "0"?: undefined;
                        "1"?: undefined;
                        "2"?: undefined;
                    };
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType3?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "23": string;
                    };
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "9"?: undefined;
                        "1"?: undefined;
                        "16"?: undefined;
                        "17"?: undefined;
                        "18"?: undefined;
                        "19"?: undefined;
                        "20"?: undefined;
                        "21"?: undefined;
                    };
                    value?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                        "1"?: undefined;
                        "16"?: undefined;
                        "17"?: undefined;
                        "18"?: undefined;
                        "19"?: undefined;
                        "20"?: undefined;
                        "21"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "9"?: undefined;
                        "16"?: undefined;
                        "17"?: undefined;
                        "18"?: undefined;
                        "19"?: undefined;
                        "20"?: undefined;
                        "21"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "9"?: undefined;
                        "1"?: undefined;
                        "16"?: undefined;
                        "17"?: undefined;
                        "18"?: undefined;
                        "19"?: undefined;
                        "20"?: undefined;
                        "21"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "16": string;
                        "17": string;
                        "18": string;
                        "19": string;
                        "20": string;
                        "21": string;
                        "9"?: undefined;
                        "1"?: undefined;
                    };
                    value?: undefined;
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                paramType3?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {
                        "23"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                paramType3?: undefined;
                param2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "0": string;
                        "1": string;
                        "2": string;
                        "28"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "28": string;
                        "0"?: undefined;
                        "1"?: undefined;
                        "2"?: undefined;
                    };
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "1"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "109"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "109"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                description: string;
                paramType1: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
                game?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "3"?: undefined;
                        "1"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "3": string;
                        "109"?: undefined;
                        "1"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "450": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "109"?: undefined;
                        "3"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "1"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                    };
                };
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "9": string;
                        "10": string;
                        "11": string;
                        "29"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "29": string;
                        "9"?: undefined;
                        "10"?: undefined;
                        "11"?: undefined;
                    };
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "6": string;
                        "109"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "6"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
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
    slug: string;
    icon: string;
    value: string;
    isPolled: boolean;
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
    image?: undefined;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
            }[];
            perfection: number[];
        };
        "2": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "3": string;
                    };
                };
            }[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "3": string;
                        "4": string;
                        "5": string;
                        "6": string;
                    };
                    value?: undefined;
                };
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                description?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                description?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "23": string;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            })[];
            perfection: number[];
        };
        "2": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "3": string;
                    };
                };
            }[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "3": string;
                        "4": string;
                        "5": string;
                        "6": string;
                    };
                    value?: undefined;
                };
                influences?: undefined;
                paramType2?: undefined;
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                description?: undefined;
                influences?: undefined;
                paramType2?: undefined;
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "1": string;
                        "2": string;
                        "3": string;
                    };
                };
                paramValue1?: undefined;
            })[];
            perfection: number[];
        };
        "2": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string[];
                    min: number;
                    max: number;
                    value: number;
                };
            }[];
            perfection: any[];
        };
        "3": {
            attributes: ({
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "9"?: undefined;
                        "3"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                        "109"?: undefined;
                        "3"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "3": string;
                        "109"?: undefined;
                        "9"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "471": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType1?: undefined;
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "1"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "448": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "109"?: undefined;
                        "1"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramValue2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "109"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "109"?: undefined;
                    };
                };
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "497"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "109"?: undefined;
                        "497"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "497": string;
                        "109"?: undefined;
                    };
                };
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "3": string;
                        "4": string;
                        "5": string;
                    };
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                        "1"?: undefined;
                        "4"?: undefined;
                        "109"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "9"?: undefined;
                        "4"?: undefined;
                        "109"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "4": string;
                        "9"?: undefined;
                        "1"?: undefined;
                        "109"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "511": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "9"?: undefined;
                        "1"?: undefined;
                        "4"?: undefined;
                    };
                };
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    value: string;
    specificType: number;
    isPolled: boolean;
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
    image?: undefined;
    type?: undefined;
    subType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "0": string;
                        "1": string;
                        "2": string;
                        "36"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "36": string;
                        "0"?: undefined;
                        "1"?: undefined;
                        "2"?: undefined;
                    };
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                    };
                };
                paramType3?: undefined;
                param3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "23": string;
                        "479"?: undefined;
                    };
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "9"?: undefined;
                    };
                    value?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
                param3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                paramValue2: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param3: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "7": string;
                    };
                };
                nature?: undefined;
                influences?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "479": string;
                        "23"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
                param3?: undefined;
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
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                game?: undefined;
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "10": string;
                        "11": string;
                        "12": string;
                        "32"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "32": string;
                        "10"?: undefined;
                        "11"?: undefined;
                        "12"?: undefined;
                    };
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                param1: {
                    spec: string;
                    map: {
                        "489"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {};
                };
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "489": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "2"?: undefined;
                        "4"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "2": string;
                        "109"?: undefined;
                        "4"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "4": string;
                        "109"?: undefined;
                        "2"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "37": string;
                    };
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                        "6"?: undefined;
                        "5"?: undefined;
                        "1"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "6": string;
                        "9"?: undefined;
                        "5"?: undefined;
                        "1"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "5": string;
                        "9"?: undefined;
                        "6"?: undefined;
                        "1"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "9"?: undefined;
                        "6"?: undefined;
                        "5"?: undefined;
                    };
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
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
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "20": string;
                        "21": string;
                        "22": string;
                        "23": string;
                        "24": string;
                    };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    isPolled: boolean;
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
    image?: undefined;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    isPolled: boolean;
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
    image?: undefined;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "7": string;
                        "8": string;
                        "9": string;
                        "31"?: undefined;
                    };
                    value?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "31": string;
                        "7"?: undefined;
                        "8"?: undefined;
                        "9"?: undefined;
                    };
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "1"?: undefined;
                        "7"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "109"?: undefined;
                        "7"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "7": string;
                        "109"?: undefined;
                        "1"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
                paramType3?: undefined;
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "3"?: undefined;
                        "1"?: undefined;
                    };
                };
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "3": string;
                        "109"?: undefined;
                        "1"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramType3: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "1": string;
                        "109"?: undefined;
                        "3"?: undefined;
                    };
                };
                paramValue2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
                paramType3?: undefined;
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                };
                paramValue1?: undefined;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    map: {
                        "109"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
                influences?: undefined;
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "10": string;
                        "11": string;
                        "12": string;
                        "13": string;
                        "14": string;
                        "15": string;
                        "16": string;
                        "17": string;
                        "18": string;
                        "19": string;
                        "20": string;
                        "21": string;
                        "22": string;
                        "23": string;
                        "24": string;
                        "25": string;
                        "26": string;
                        "27": string;
                    };
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    map: {
                        "10"?: undefined;
                        "11"?: undefined;
                        "12"?: undefined;
                        "13"?: undefined;
                        "14"?: undefined;
                        "15"?: undefined;
                        "16"?: undefined;
                        "17"?: undefined;
                        "18"?: undefined;
                        "19"?: undefined;
                        "20"?: undefined;
                        "21"?: undefined;
                        "22"?: undefined;
                        "23"?: undefined;
                        "24"?: undefined;
                        "25"?: undefined;
                        "26"?: undefined;
                        "27"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
                        "9"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                paramValue2: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "9": string;
                        "109"?: undefined;
                    };
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "401": string;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    subType: number;
    specificType: number;
    isPolled: boolean;
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
    image?: undefined;
    type?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: number[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map?: undefined;
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map: {
                        "22": string;
                        "23": string;
                        "24": string;
                    };
                    value?: undefined;
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: any[];
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
            }[];
            perfection: any[];
        };
        "2": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
            }[];
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
    image?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    specificType: number;
    isPolled: boolean;
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
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
            }[];
            perfection: any[];
        };
        "2": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
            }[];
            perfection: any[];
        };
        "3": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
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
    type?: undefined;
    subType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    specificType: number;
    isPolled: boolean;
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
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
            }[];
            perfection: any[];
        };
        "2": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
            }[];
            perfection: any[];
        };
        "3": {
            attributes: {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
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
    type?: undefined;
    subType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    isPolled: boolean;
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
    slug: string;
    icon: string;
    value: string;
    isPolled: boolean;
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
    image?: undefined;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
    slots?: undefined;
} | {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    value: string;
    specificType: number;
    isPolled: boolean;
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
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
                };
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramValue1: string;
                nature: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
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
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
                paramType2?: undefined;
                paramValue1?: undefined;
            } | {
                id: number;
                name: string;
                isEnabled: boolean;
                game: string;
                nexusLink: string;
                paramType1: string;
                paramType2: string;
                paramValue1: string;
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    map?: undefined;
                };
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
