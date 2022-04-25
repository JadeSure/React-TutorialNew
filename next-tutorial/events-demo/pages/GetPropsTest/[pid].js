import React from "react";
import path from 'path'
import fs from 'fs/promises'

export default function Pid(props) {
    const {product} = props;

    // if(!product) {
    //     return <p>Loading....</p>
    // }

  return <div>
      <p>{product.title}</p>
  </div>
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.js');
    // file streaming
    const jsonData = await fs.readFile(filePath)
    // parse streaming to json
    const data = JSON.parse(jsonData);

    return data
}

export async function getStaticProps(context){
    const {params} = context;
    const productId = params.pid;

   const data = await getData()

    const product = data.products.find(product=>{
        return product.id === productId;
    })

    return {
        props:{
            product
        }
    }
}

export async function getStaticPaths(){
    const data = await getData()
    const ids = data.products.map(product => product.id)
    const params = ids.map(id=> ({params: {pid: id}}))
    return {
        paths:
            params
            // {params: {pid: 'p2'}},
            // {params: {pid: 'p3'}},
        ,
        fallback: 'blocking'
    }
}
