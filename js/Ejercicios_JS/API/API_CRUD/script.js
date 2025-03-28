const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Función para obtener y mostrar los posts
async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    const posts = await response.json();
    const postsTable = document.getElementById("postsTable");
    postsTable.innerHTML = ""; // Limpiar la tabla antes de agregar nuevos datos

    for (let i = 0; i < posts.length; i++) {
    const post = posts[i]; // Obtenemos cada post del array
    const row = `
      <tr>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editPost(${post.id})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="deletePost(${post.id})">Eliminar</button>
        </td>
      </tr>
    `;
    postsTable.innerHTML += row; // Agregamos la fila a la tabla
  }

   /*
    posts.forEach(post => {
      const row = `
        <tr>
          <td>${post.id}</td>
          <td>${post.title}</td>
          <td>${post.body}</td>
          <td>
            <button class="btn btn-warning btn-sm" onclick="editPost(${post.id})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="deletePost(${post.id})">Eliminar</button>
          </td>
        </tr>
      `;
      postsTable.innerHTML += row;
    });
  */
  
  } catch (error) {
    console.error("Error al obtener los posts:", error);
  }
}

// Función para crear un nuevo post
async function createPost(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, userId: 1 }), // userId es requerido por la API
    });
    const newPost = await response.json();
    console.log("Post creado:", newPost);
    fetchPosts(); // Actualizar la lista de posts
    document.getElementById("postForm").reset(); // Limpiar el formulario
  } catch (error) {
    console.error("Error al crear el post:", error);
  }
}

// Función para eliminar un post
async function deletePost(id) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    console.log("Post eliminado:", id);
    fetchPosts(); // Actualizar la lista de posts
  } catch (error) {
    console.error("Error al eliminar el post:", error);
  }
}

// Función para editar un post (solo simulación, ya que JSONPlaceholder no guarda cambios)
async function editPost(id) {
  const newTitle = prompt("Ingresa el nuevo título:");
  const newBody = prompt("Ingresa el nuevo contenido:");

  if (newTitle && newBody) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, body: newBody, userId: 1 }),
      });
      const updatedPost = await response.json();
      console.log("Post actualizado:", updatedPost);
      fetchPosts(); // Actualizar la lista de posts
    } catch (error) {
      console.error("Error al actualizar el post:", error);
    }
  }
}

// Evento para crear un post
document.getElementById("postForm").addEventListener("submit", createPost);

// Cargar los posts al iniciar la página
fetchPosts();