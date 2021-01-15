interface News {
  id: number;
  uri:string;
  title:string;
  category: string;
}

const newsItems: News[] = [
  {
    id: 1,
    uri:'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
    title:"Adidas",
    category: "Fashion",
  },
  {
    id: 2,
    uri:'https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg',
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

export default newsItems;
export type NewsType = News;
