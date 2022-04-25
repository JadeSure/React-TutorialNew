import React from "react";
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json() 

  const paths = data.map(path => {
    return {
      params: {id: path.id.toString()}
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const data = await res.json()
  return {
    props: {nijia: data}
  }
}

export default function Details({nijia}) {

  
  return <div>
    <h1>Details Page666</h1>
    <h2>{nijia.title}</h2>
  </div>;
}
