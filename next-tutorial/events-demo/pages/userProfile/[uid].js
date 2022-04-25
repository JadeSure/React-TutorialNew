import React from "react";

export default function uid(props) {
  return <div>{props.id}</div>;
}


export async function getServerSideProps(context){
    const {params} = context;
    const userId = params.uid;

    return {
        props: {
            id: 'userid-' + userId,
        }
    }
}