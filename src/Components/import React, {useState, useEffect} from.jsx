import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DataFetching = () => {

    const [post, setPosts] = useState([])
    // const [id, setId]=useState(1)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
  return (
    <div className='text-center'>
      <ul>{
        post.map(post =>(
            <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {/* <input type="text" value={id}  onChange={e=> setId(e.target.value)} />
      <div>{post.title}</div> */}
    </div>
  );
}

export default DataFetching;
