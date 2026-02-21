import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

function FetchData() {
    const [postId, setPostId] = useState(1)

    const { isLoading, error, data } = useQuery(['post', postId], () =>
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.data)
    )
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>An error has occurred: {error.message}</div>
      ) : (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          <button onClick={() => setPostId(postId + 1)}>Next Post</button>
          <button onClick={() => setPostId(postId - 1)}>Previous Post</button>
        </div>
      )}
    </div>
  )
}

export default FetchData