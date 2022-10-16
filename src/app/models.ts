export interface Game {
    id:string;
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
    platforms:any;
    developers:Array<Developers>;
    stores:Array<Store>;
    series:any;
}

export interface APIResponse<T> {
    results: Array<T>
    next:any;
    count:any;
}

interface Genre {
    name:string
}

interface ParentPlatform {
    platform: {
        name:string;
        slug:string;
    }
}

interface Publishers {
    name: string;
}

interface Rating {
    id: number;
    count: number;
    title: string;
}

interface Screenshots {
    image: string,
    id: string,
}

interface Trailer {
    data: {
        max: string;
    }
}

interface Developers {
    name:string,
    image:string,
    positions: any
}

interface Store {
    store: {
        name:string,
        domain:string
    }
    
}