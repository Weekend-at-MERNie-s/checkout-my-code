import React from "react";
import css from "./style.css";
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from "../../utils/queries";

function Main() {

  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);

  return (


    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>{/* PRINT THOUGHT LIST */}</div>
      </div>
    </main>
  );


}
export default Main;
