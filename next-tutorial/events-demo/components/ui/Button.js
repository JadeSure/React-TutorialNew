import React from "react";
import styles from './index.module.scss'
import Link from 'next/link'


export default function Button(props) {
    if(!props.href){
        return <button className={styles.btn} onClick={props.onClick}>{props.children}</button>
    }

  return <Link href={props.href}>
      <a className={styles.btn}>{props.children}</a>
  </Link>
}
