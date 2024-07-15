type User = {
    username: string;
    platform: string;
    masteryRank: number;
    descendant: Descendant;
}

type Descendant = {
    Name: string;
    Image: string;
    Level: number;
    Stats: DescedantStat[];
    moduleCapacity: number;
    moduleMaxCapacity: number;
    modules: Module[]
}

type DescedantStat = {
    name: string;
    value: number;
}

