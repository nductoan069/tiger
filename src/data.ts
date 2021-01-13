interface News {
    id: number;
    uri:string;
    title:string;
    category: string;
}

const NewsItem: News[] =[
    {
        id: 1,
        uri:'https://reactnative.dev/img/tiny_logo.png',
        title:"Adidas",
        category: "Fashion",
    },
    {
        id: 2,
        uri:'https://reactnative.dev/img/tiny_logo.png',
        title:"Nike",
        category: "Shoes",
    },
    {
        id: 3,
        uri:'https://reactnative.dev/img/tiny_logo.png',
        title:"Canifa",
        category: "Fashion",
    },
    {
        id: 4,
        uri:'https://reactnative.dev/img/tiny_logo.png',
        title:"Cycling",
        category: "Sport",
    },
    {
        id: 5,
        uri:'https://reactnative.dev/img/tiny_logo.png',
        title:"Running",
        category: "Sport",
    },
    {
        id: 6,
        uri:'https://reactnative.dev/img/tiny_logo.png',
        title:"Adidas",
        category: "Sport",
    },
    {
        id: 7,
        uri:'https://reactnative.dev/img/tiny_logo.png',
        title:"Youtube",
        category: "Website",
    },
    {
        id: 8,
        uri:'https://reactnative.dev/img/tiny_logo.png',
        title:"Anime",
        category: "Movie",
    },
    {
        id: 9,
        uri:'https://reactnative.dev/img/tiny_logo.png',
        title:"Facebook",
        category: "SNS",
    },
    {
        id: 10,
        uri:'https://reactnative.dev/img/tiny_logo.png',
        title:"Instagram",
        category: "SNS",
    },
];

export {NewsItem};
export type NewsType = News;
