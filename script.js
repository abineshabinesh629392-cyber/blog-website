document.addEventListener("DOMContentLoaded", loadComments);
document.getElementById("postBtn").addEventListener("click", addComment);

function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const list = document.getElementById("commentsList");
  list.innerHTML = "";

  comments.forEach((comment, index) => {
    const div = document.createElement("div");
    div.className = "commentBox";

    const text = document.createElement("div");
    text.className = "commentText";
    text.textContent = comment;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "deleteBtn";
    delBtn.onclick = () => deleteComment(index);

    div.appendChild(text);
    div.appendChild(delBtn);
    list.appendChild(div);
  });
}

function addComment() {
  const input = document.getElementById("commentInput");
  const text = input.value.trim();
  if (text === "") {
    alert("Please enter a comment!");
    return;
  }

  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(text);
  localStorage.setItem("comments", JSON.stringify(comments));
  input.value = "";
  loadComments();
}

function deleteComment(index) {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.splice(index, 1);
  localStorage.setItem("comments", JSON.stringify(comments));
  loadComments();
}
