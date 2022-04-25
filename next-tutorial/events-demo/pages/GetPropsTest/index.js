import React from "react";
import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'

export default function index(props) {
    const {products} = props;
  return <div>
        <ul>
            {products.map(product =><li key={product.id}><Link href={`/GetPropsTest/${product.id}`}>{product.title}</Link></li>)}
        </ul>
      </div>;
}

// first call this function
export  async function getStaticProps(){
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.js');
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData);
  return {
    props: {
        products: data.products
    }
  }
}