import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/services'; // Importa la función getPosts desde services.js
import Table from 'react-bootstrap/Table';


const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Obtiene los datos de los posts al montar el componente
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
        <div className="container">
            <br/>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
                  {/* Renderiza los datos de los posts en filas de la tabla */}
                  {posts.map(post => (
                  <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                  </tr>
                  ))}
              </tbody>
          </Table>
          </div>
    </div>
  );
};

export default Home;
