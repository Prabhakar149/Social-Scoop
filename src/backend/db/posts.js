// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

// export const posts = [
//   {
//     _id: uuid(),
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "adarshbalika",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: uuid(),
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "shubhamsoni",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
// ];


//-----------------------------------------------------------

export const posts = [
  {
    _id: "MTYtVhecCj",
    content:
      "You are never too old to set another goal or to dream a new dream.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalak",
    createdAt: "2022-03-17T02:20:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "xhzTkUi2Nt",
    content: "Sunday morning ! Only for Cricket 😀",
    mediaURL: "https://res.cloudinary.com/dlni6frrw/image/upload/v1688889480/Gully-Cricket_hxg9hj.jpg",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "okzxcf",
        username: "adarshbalak",
        text: "Yes, so are you going this Sunday? Plz let me know..🤞🏾",
      },
    ],
    username: "rohit45",
    createdAt: "2022-03-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "siFFxfYI1s",
    content: "what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?what is in your pocket?",
    mediaURL:"",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "carlsmith",
    createdAt: "2022-07-23T08:40:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "siFmxcYI1s",
    content: "Going to India to explore the numrous culture of India.",
    mediaURL:"https://res.cloudinary.com/dlni6frrw/image/upload/v1688888902/India_wq3kve.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [ 
      {
      _id: "Mk3Dcf",
      username: "rohit45",
      text: "Welcome to India."      
    },
    {
      _id: "7m9Zc2",
      username: "janedoe",
      text: "Awesome, Enjoy and explore. Happy Journey !"      
    },
    {
      _id: "qk9xcA",
      username: "adarshbalak",
      text: "When you reached, just let me know."      
    },
  ],
    username: "johndoe",
    createdAt: "2023-03-23T08:40:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP1fg",
    content: "Anyone done rafting?",
    mediaURL:"https://res.cloudinary.com/dlni6frrw/image/upload/v1688888768/rafting_image8_zigjdh.jpg",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nImWvImxo",
        username: "johndoe",
        text: "Yes, you must do",
      },
    ],
    username: "janedoe",
    createdAt: "2023-10-01T05:23:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "1XHvaP1Zg",
    content: "The weather is really awesome, can't sit in home !",
    mediaURL:"https://res.cloudinary.com/dlni6frrw/image/upload/v1688889048/weather_j0ul00.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6lImWvbmxo",
        username: "adarshbalak",
        text: "Wait for me, I am also coming",
      },
    ],
    username: "janedoe",
    createdAt: "2022-08-01T05:23:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP9kC",
    content: "Yayy! Its my Birthday Today. Going to temple",
    mediaURL:"https://res.cloudinary.com/dlni6frrw/image/upload/v1688887987/cake_milzdg.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9n8",
        username: "carlsmith",
        text: "Happy Birthday! Enjoy your Day!!",
      },
      {
        _id: "QK52wf6HI1",
        username: "janedoe",
        text: "Wow! Happy Birthday!",
      },
    ],
    username: "adarshbalak",
    createdAt: "2022-12-04T11:10:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "tHaThLyFQh",
    content:
      "Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "QK5c9B6Hu2",
        username: "carlsmith",
        text: "Nice bro",
      },
    ],
    username: "adarshbalak",
    createdAt: "2022-04-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "G-Gi3lSZP9",
    content: "When you have a dream, you’ve got to grab it and never let go.",
    mediaURL: "",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalak",
    createdAt: "2022-05-10T03:10:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "G-vi7lSqP9",
    content: "It's boring day😥",
    mediaURL: "",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "alexmaxwell",
    createdAt: "2021-06-20T03:10:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "GeMUAdi9mh",
    content:
      "No matter what people tell you, words and ideas can change the world.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalak",
    createdAt: "2022-09-30T12:17:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "IyUlYXTrzZ",
    content: "Who's up for Pineapple Pastry?",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014828/ecommerce/pineapplemuffin1.webp",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nIffvImxo",
        username: "sophiajones",
        text: "Oh! That looks Delicious!"
      },
    ],
    username: "rohit45",
    createdAt: "2022-11-25T06:40:08+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "SeMUcdi10h",
    content:
      "Switching to ReactJS from Angular.",
    mediaURL: "https://res.cloudinary.com/dlni6frrw/image/upload/v1688889570/reactjs_logo_icon_170805_rhtrg7.png",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6niffFmm9o",
        username: "alexmaxwell",
        text: "React is awesome, just go for it."
      },
      {
        _id: "1BeffAmm0o",
        username: "rohit45",
        text: "You will really enojoy it."
      },
    ],
    username: "sophiajones",
    createdAt: "2021-02-12T12:17:08+05:30",
    updatedAt: formatDate(),
  },

 

 
];