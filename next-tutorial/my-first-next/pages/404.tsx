import React from "react";
import Link from 'next/link'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
    const router = useRouter()
    useEffect(() =>{
        setTimeout(() =>{
            router.push('/')
        }, 3000)
    }, [])
  return <div><h1>Oooops....</h1>
  <h2>That page cannot be found</h2>
  <p>go back to the page</p>
    <p>Go back the <Link href="/"><a>Homepage</a></Link></p>
  </div>;
}
