const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Función para obtener los datos de los posts
export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
  }
};

// Función para obtener los datos de un post por su ID
export const getPostById = async (postId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener el post con ID ${postId}:`, error);
  }
};
