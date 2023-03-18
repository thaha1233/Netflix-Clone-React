import { useState, useEffect } from "react";

import "./Search.css";
const Search = () => {

  const [query, setQuery] = useState("")

  const [posts, setPost] = useState(null);
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
      .then(response => {
        console.log(response.ok)
        if (!response.ok) {
          throw Error('Can not connect to the server!.');
        }
        return response.json();
      }).then(data => {
        setPost(data.results)
      }).catch(e => {
        console.log(e.message);
      });
  }, []);

  return (
    <div className="container">
      <input
        placeholder="Search to movies"
        onChange={event => setQuery(event.target.value)}
        
      />

      {posts &&
        posts.filter(post => {
          if (query === '') {
            return post;
          } else if (post.original_title.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map((post) => (
          <div className="box" >
            <h1>{post.original_title}

            </h1>
            <img src={`https://image.tmdb.org/t/p/original${post && post.backdrop_path}`} />
            <p>{post.overview.slice(0,)}</p>
            <a href={post.video}></a>

          </div>
        ))
      }
    </div >
  );
}



export default Search;