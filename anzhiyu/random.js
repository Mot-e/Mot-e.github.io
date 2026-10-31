var posts=["2024/09/28/博文/","2026/10/31/cloudflare-imgbed/","2025/04/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };