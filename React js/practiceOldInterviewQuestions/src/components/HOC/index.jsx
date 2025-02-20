import React from "react";
// import useFetch from "./use-fetch";
import withFetch from './with-fetch'

// eslint-disable-next-line react-refresh/only-export-components
const UseFetchComponent = ({loading,data,error}) => {
//   const { data, loading, error } = useFetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   console.log(data);
  if (loading) {
    return <div>loading....</div>;
  }
  if (error) {
    return <div>Error : {error.message}</div>;
  }
  return (
    <div>
      <div>Posts list</div>

      {data && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withFetch("https://jsonplaceholder.typicode.com/posts")(UseFetchComponent);
