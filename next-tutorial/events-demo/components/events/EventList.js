import React from "react";
import EventItem from './EventItem';
import styles from './index.module.scss';

export default function EventList(props) {
    const {items} = props;
    // if(items.length === 0){
    //     return <p>No more content</p>
    // }
  return <ul>
      {items.map(item=>{
          return <EventItem key={item.id} item={item}/>
      })}
  </ul>;
}
