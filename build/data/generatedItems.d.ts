declare const _default: ({
    id: number;
    name: string;
    icon: string;
    image: string;
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
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
            })[];
            perfection: any[];
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
                    min: number;
                    max: number;
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
                    min: any[];
                    max: any[];
                    value: any[];
                    map: {
                        "": any[];
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "412": string[];
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
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "494": string[];
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
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "480": string[];
                    };
                };
                paramType2?: undefined;
                paramType3?: undefined;
                paramValue1?: undefined;
                param2?: undefined;
                paramValue2?: undefined;
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
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: any[];
                    max: any[];
                    value: any[];
                    map: {
                        "": any[];
                    };
                };
                paramValue1?: undefined;
                param2?: undefined;
                paramType2?: undefined;
                paramValue2?: undefined;
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
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "474": string[];
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
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
                        "409"?: undefined;
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
                        "409": string;
                        "6"?: undefined;
                        "7"?: undefined;
                        "8"?: undefined;
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
                        "409"?: undefined;
                    };
                };
            })[];
            perfection: any[];
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
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
                influences?: undefined;
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
                    value?: undefined;
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
                    min: any;
                    max: any;
                    map?: undefined;
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
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "409": string[];
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
                    };
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
                paramType3?: undefined;
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
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
                        "410"?: undefined;
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
                        "410": string;
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
                        "3": string;
                        "8"?: undefined;
                        "9"?: undefined;
                        "10"?: undefined;
                        "410"?: undefined;
                    };
                };
            })[];
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "457,": string[];
                        ",3,"?: undefined;
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
                param1: {
                    spec: string;
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        ",3,": string[];
                        "457,"?: undefined;
                    };
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
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
                        "9"?: undefined;
                        "10"?: undefined;
                        "11"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
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
                    min: any;
                    max: any;
                    map: {
                        "9"?: undefined;
                        "10"?: undefined;
                        "11"?: undefined;
                    };
                };
            })[];
            perfection: any[];
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
                    min: number;
                    max: number;
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "455": string[];
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
                    min: any;
                    max: any;
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
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
                        "429"?: undefined;
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
                        "429": string;
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
                        "2": string;
                        "9"?: undefined;
                        "10"?: undefined;
                        "11"?: undefined;
                        "429"?: undefined;
                    };
                };
            })[];
            perfection: any[];
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
                    };
                };
                description?: undefined;
                paramValue1?: undefined;
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
                paramType3?: undefined;
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
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
                        "430"?: undefined;
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
                        "430": string;
                        "11"?: undefined;
                        "12"?: undefined;
                        "13"?: undefined;
                        "14"?: undefined;
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
                param1?: undefined;
            })[];
            perfection: any[];
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
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue1?: undefined;
                influences?: undefined;
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
                param1: {
                    spec: string;
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "4,5,,": string[];
                        "21"?: undefined;
                        "475"?: undefined;
                    };
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
                        "4,5,,"?: undefined;
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "475": string[];
                        "4,5,,"?: undefined;
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
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
                        "467": string;
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
                    min: any;
                    max: any;
                    map: {
                        "467"?: undefined;
                    };
                    value?: undefined;
                };
            })[];
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "471": string[];
                        "24"?: undefined;
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
                paramType3?: undefined;
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
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
                    map: {
                        "11"?: undefined;
                        "12"?: undefined;
                        "13"?: undefined;
                        "14"?: undefined;
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
                description: string;
                param1: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "11"?: undefined;
                        "12"?: undefined;
                        "13"?: undefined;
                        "14"?: undefined;
                    };
                    value?: undefined;
                };
            })[];
            perfection: any[];
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
                    };
                };
                description?: undefined;
                paramValue1?: undefined;
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "481": string[];
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
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
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
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                param1: {
                    spec: string;
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "4,7,": string[];
                        "460"?: undefined;
                    };
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "460": string[];
                        "4,7,"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: any[];
                    max: any[];
                    value: any[];
                    map: {
                        "": any[];
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
                    value?: undefined;
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
                paramValue2?: undefined;
                paramType3?: undefined;
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
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
            })[];
            perfection: any[];
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
                    spec: string;
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "419": string[];
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
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
                        "12": string;
                        "13": string;
                        "14": string;
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
                    min: any;
                    max: any;
                    map: {
                        "12"?: undefined;
                        "13"?: undefined;
                        "14"?: undefined;
                    };
                    value?: undefined;
                };
            })[];
            perfection: any[];
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
                    value?: undefined;
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "7,,2": string[];
                        "472"?: undefined;
                    };
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "472": string[];
                        "7,,2"?: undefined;
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
                paramType3?: undefined;
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
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: any[];
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
                };
                paramValue1?: undefined;
            })[];
            perfection: any[];
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
                paramType2: string;
                param1: {
                    spec: string;
                    min: any[];
                    max: any[];
                    map: {
                        "": any[];
                        "529"?: undefined;
                    };
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "529": string[];
                        ""?: undefined;
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
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: any[];
                    max: any[];
                    value: any[];
                    map: {
                        "": any[];
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
                        "14": string;
                        "15": string;
                        "16": string;
                    };
                    value?: undefined;
                };
            })[];
            perfection: any[];
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
                    min: any;
                    max: any;
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "454": string[];
                    };
                };
                paramType2?: undefined;
                paramType3?: undefined;
                paramValue1?: undefined;
                param2?: undefined;
                paramValue2?: undefined;
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
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "476": string[];
                    };
                };
                paramType2?: undefined;
                paramType3?: undefined;
                paramValue1?: undefined;
                param2?: undefined;
                paramValue2?: undefined;
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
    skills: number[];
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: any[];
                    max: any[];
                    value: any[];
                    map: {
                        "": any[];
                    };
                };
                paramValue1?: undefined;
                paramType2?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
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
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                paramType2?: undefined;
                paramValue1?: undefined;
                param1?: undefined;
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
                };
                paramType2?: undefined;
                paramValue1?: undefined;
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
                };
                paramType2?: undefined;
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
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                influences?: undefined;
                paramValue1?: undefined;
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
                    value?: undefined;
                };
                param2: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                    map: {
                        "109": string;
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
                    };
                    value?: undefined;
                };
                paramType3?: undefined;
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
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                paramType2: string;
                param1: {
                    spec: string;
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "7,,,3": string[];
                        "516,451"?: undefined;
                    };
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "516,451": string[];
                        "7,,,3"?: undefined;
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
                paramValue2: string;
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
    materials: number[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: any;
                    max: any;
                };
                param2: {
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
                    min: any;
                    max: any;
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
                    map: {};
                };
            })[];
            perfection: any[];
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
                    min: any;
                    max: any;
                    map: {};
                    value?: undefined;
                };
                influences?: undefined;
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
    icon: string;
    image: string;
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
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "527": string[];
                    };
                };
                paramValue1?: undefined;
            })[];
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "499": string[];
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
                        "526"?: undefined;
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
                        "526": string;
                        "3"?: undefined;
                        "4"?: undefined;
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
                    min: any;
                    max: any;
                    map: {
                        "3"?: undefined;
                        "4"?: undefined;
                        "5"?: undefined;
                        "526"?: undefined;
                    };
                    value?: undefined;
                };
            })[];
            perfection: any[];
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
                    min: any;
                    max: any;
                    map: {
                        "3"?: undefined;
                        "4"?: undefined;
                        "5"?: undefined;
                    };
                    value?: undefined;
                };
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "501": string[];
                        "21"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
            perfection: any[];
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
                    min: any;
                    max: any;
                    map: {
                        "13"?: undefined;
                        "14"?: undefined;
                        "15"?: undefined;
                    };
                    value?: undefined;
                };
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
                    map: {};
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
                    min: any;
                    max: any;
                    map: {};
                    value?: undefined;
                };
                paramType2?: undefined;
                paramValue2?: undefined;
                influences?: undefined;
                param2?: undefined;
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
    icon: string;
    image: string;
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
                    min: any;
                    max: any;
                    map: {
                        "0"?: undefined;
                        "1"?: undefined;
                        "2"?: undefined;
                        "19"?: undefined;
                    };
                    value?: undefined;
                };
            })[];
            perfection: any[];
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
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "493,535": string[];
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
            perfection: any[];
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
    image?: undefined;
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
                nature: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
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
                };
                paramValue1?: undefined;
            })[];
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
    image?: undefined;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                        "463,472"?: undefined;
                    };
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "109"?: undefined;
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
                        "463,472"?: undefined;
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "463,472": string[];
                        "3"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    skills: number[];
    materials: any[];
    category: string;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                        "517,"?: undefined;
                    };
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map: {
                        "9"?: undefined;
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
                    min: any;
                    max: any;
                    map?: undefined;
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
                    value: number;
                    map?: undefined;
                };
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    map?: undefined;
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "517,": string[];
                        "23"?: undefined;
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                paramType3?: undefined;
                param2?: undefined;
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
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        ",445": string[];
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
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
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value?: undefined;
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
                nexusLink: string;
                param1: {
                    spec: string;
                    min: number;
                    max: number;
                    value: number;
                };
                game?: undefined;
                paramType1?: undefined;
                paramValue1?: undefined;
                nature?: undefined;
                description?: undefined;
            })[];
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "450": string[];
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
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "448,427": string[];
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
                    };
                };
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
    materials: number[];
    category: string;
    image?: undefined;
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: any[];
                    max: any[];
                    value: any[];
                    map: {
                        "": any[];
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
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
    materials: number[];
    category: string;
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
    image?: undefined;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
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
    image?: undefined;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
    slots?: undefined;
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
    icon: string;
    image: string;
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
                nature: string;
                influences: string;
                description: string;
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "471": string[];
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
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "448": string[];
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
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    value?: undefined;
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
                    value?: undefined;
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
                    min: any[];
                    max: any[];
                    value: any[];
                    map: {
                        "": any[];
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
                param2: {
                    spec: string;
                    min: any;
                    max: any;
                    value?: undefined;
                    map?: undefined;
                };
                paramValue2?: undefined;
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
} | {
    id: number;
    name: string;
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: number;
                    max: number;
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "511": string[];
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
                    };
                };
                paramType3?: undefined;
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
    skills: number[];
    materials: any[];
    category: string;
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
                        "537"?: undefined;
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
                        "537": string;
                        "6"?: undefined;
                        "7"?: undefined;
                        "8"?: undefined;
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
                    };
                    value?: undefined;
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
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
    icon: string;
    image: string;
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
            perfection: any[];
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
                        ""?: undefined;
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
                    min: any[];
                    max: any[];
                    value: any[];
                    map: {
                        "": any[];
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
            perfection: any[];
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
                    min: any[];
                    max: any[];
                    value: any[];
                    map: {
                        "": any[];
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
                paramType3?: undefined;
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
    icon: string;
    image: string;
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
                    map: {};
                    min?: undefined;
                    max?: undefined;
                };
            })[];
            perfection: any[];
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
                        "6"?: undefined;
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
                        "6": string;
                        "9"?: undefined;
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        ",433": string[];
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
                        ",433"?: undefined;
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
                        "9"?: undefined;
                        "6"?: undefined;
                    };
                };
                paramValue1?: undefined;
                paramValue2?: undefined;
                nature?: undefined;
                influences?: undefined;
                description?: undefined;
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
    image?: undefined;
    type?: undefined;
    subType?: undefined;
    specificType?: undefined;
    slots?: undefined;
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
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "501,442": string[];
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
            perfection: any[];
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
                    min: any[];
                    max: any[];
                    value: any[];
                    map: {
                        "": any[];
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
            perfection: any[];
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
                nature: string;
                influences: string;
                description: string;
                param1: {
                    spec: string;
                    min: any[];
                    max: any[];
                    value: any[];
                    map: {
                        "": any[];
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
                        "109"?: undefined;
                    };
                    min?: undefined;
                    max?: undefined;
                    value?: undefined;
                };
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
            perfection: any[];
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
                    min: number[];
                    max: number[];
                    value: number[];
                    map: {
                        "401": string[];
                    };
                };
                paramType2?: undefined;
                paramValue1?: undefined;
                paramValue2?: undefined;
                param2?: undefined;
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
    icon: string;
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
    image?: undefined;
    type?: undefined;
    slots?: undefined;
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
} | {
    id: number;
    name: string;
    icon: string;
    value: string;
    type: number;
    subType: number;
    specificType: number;
    slots: any[];
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
    icon: string;
    image: string;
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
    icon: string;
    image: string;
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
    icon: string;
    image: string;
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
    icon: string;
    image: string;
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
            perfection: any[];
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
                    min: any[];
                    max: any[];
                    value: any[];
                    map: {
                        "": any[];
                    };
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
                    value?: undefined;
                    map?: undefined;
                };
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
})[];
export default _default;
