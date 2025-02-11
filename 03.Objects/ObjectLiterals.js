const student = {
  name: "Srikanth",
  age: 21,
  mrks: 93,
};

let item = {
  price: 99.99,
  discount: 50,
  colors: ["red", "pink"],
};
console.log(item);

const post = {
  username: "@srikanth",
  content: "This is my first post",
  likes: 150,
  reposts: 5,
  tags: ["@modi", "@ktr"],
};
console.log(post["username"]);
console.log(post.content);
let porperty = "likes";
console.log(post[porperty]);

delete post.reposts;
console.log(post);
