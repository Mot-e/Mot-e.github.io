var posts=["2025/04/01/hello-world/","2025/04/01/博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };