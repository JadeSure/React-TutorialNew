import React from "react";
import Link from 'next/link';
import styles from './index.module.scss';
import Button from '../ui/Button'

export default function EventItem(props) {
    const {item} = props; 
    const {title, image, date, location, id} = item;
    const handleReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(',', '\n');
    const exploreLink = `/events/${id}`

   
  return <div>
    <li className={styles.item}>
        <img src={'/'+image} alt="" />
        <div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <time>{handleReadableDate}</time>
            </div>
            <div>
                <address>{formattedAddress}</address>
            </div>
            <div>
                <Button href={exploreLink}>Explore Event</Button>
            </div>
        </div>
    </li>
  </div>
  
}
