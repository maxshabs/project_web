import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import maxres from './maxresdefault.jpg';

const initialComments = [
  {
    videoId: 1,
    comments: [
      { id: 1, text: 'best vid ever', username: 'Mike Hawk', date: '10 hours', img: pic3 },
      { id: 2, text: 'u suck', username: 'Mike dover', date: '2 hours', img: maxres },
      { id: 3, text: 'first', username: 'ben dover', date: '1 day', img: pic4 },
      { id: 4, text: 'hello world', username: 'Mike test', date: '3 hours', img: maxres },
    ],
  },
  {
    videoId: 2,
    comments: [
      { id: 1, text: 'Comment 1 for Video 2', username: 'Mike test', date: '3 hours', img: maxres  },
      { id: 2, text: 'Comment 2 for Video 2', username: 'ben dover', date: '1 day', img: pic4  },
    ],
  },
  {
    videoId: 3,
    comments: [
      { id: 1, text: 'Comment 1 for Video 3', username: 'Mike test', date: '3 hours', img: maxres  },
      { id: 2, text: 'Comment 2 for Video 3', username: 'ben dover', date: '1 day', img: pic4  },
    ],
  },
  {
    videoId: 4,
    comments: [
      { id: 1, text: 'Comment 1 for Video 4', username: 'Mike test', date: '3 hours', img: maxres  },
      { id: 2, text: 'Comment 2 for Video 4', username: 'ben dover', date: '1 day', img: pic4  },
    ],
  },
  {
    videoId: 5,
    comments: [
      { id: 1, text: 'Comment 1 for Video 5', username: 'Mike test', date: '3 hours', img: maxres  },
      { id: 2, text: 'Comment 2 for Video 5', username: 'ben dover', date: '1 day', img: pic4  },
    ],
  },
  {
    videoId: 6,
    comments: [
      { id: 1, text: 'Comment 1 for Video 6', username: 'Mike test', date: '3 hours', img: maxres  },
      { id: 2, text: 'Comment 2 for Video 6', username: 'ben dover', date: '1 day', img: pic4  },
    ],
  },
];

export default initialComments;