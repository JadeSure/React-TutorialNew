import React from "react";

export default function index(props) {
  return <div>{props.username}</div>;
}


export async function getServerSideProps(context){
    const {params, req, res} = context;
    return {
        props: {
            username: 'Max'
        }
    }
}