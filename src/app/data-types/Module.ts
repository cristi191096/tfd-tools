type Module = {
    name: string;
    image: string;
    type?: string | null;
    tier: string;
    socketType: string;
    class: string;
    slotID: string;
    enchantLevel: number;
    stats: ModuleStat[];
}

type ModuleStat = {
    level: number;
    capacity: number;
    value: string;
}