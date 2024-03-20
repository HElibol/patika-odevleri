const posts = [
    {name: "JS nedir?", content: "JS senkron calisir."},
    {name: "Node.js nedir?", content: "Node.js bir javascript gelistirme ortamidir"}
];

const postList = () =>{
    posts.forEach(post => {
        console.log(post.name);
        console.log(post.content);
        console.log("----------------");
    })
}

const addPost = (newPost) => {
    const promise = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
      });
    
      return promise;
}

let newName = process.argv[2];
let newContent = process.argv[3];

let newPost = {name: newName, content : newContent};

async function showPost() {
    try {
      await addPost(newPost);
      postList();
    } catch (error) {
      console.log(error);
    }
  }

showPost();