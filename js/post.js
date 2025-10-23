function loadpost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displaypost(data));
}

/**
 * 1. get the container where you want to add the new elements
 * 2. create child element
 * 3. set innerText or innerHTML
 * 4. appendChild to the container
 */

function displaypost(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    console.log(post);
    div.innerHTML = `
            <h4>User-${post.userId}<h4>
            <h5> post: ${post.title}title</h5>
            <p>post Description ${post.body}</p>
            `;
    postContainer.appendChild(div);
  }
}

loadpost();
