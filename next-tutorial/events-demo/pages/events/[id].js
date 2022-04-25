import React from "react";
import { useRouter } from 'next/router'; 
// import {getEventById} from '../../dummy-data'
import { getEventById, getAllEvents, getFeaturedEvents} from "../../helpers/api-util";

export default function EventDetailsPage(props) {

    const {event} = props

    if(!event){
        return <p>Loading...</p>
    }

  return <div>
            <div>{event.title}</div>
            <div>{event.date}</div>
            <div>{event.location}</div>
            <div>{event.description}</div>
      </div>;
}

export async function getStaticProps(context){
    const eventId = context.params.id;
    const event = await getEventById(eventId)
    return {
        props: {
            event
        },
        revalidate: 30
    }
}

export async function getStaticPaths(){
    const events = await getFeaturedEvents()
    const paths = events.map(event => ({params: {id: event.id}}))
    return {
        paths,
        // false: all path will be pre generated
        // fallback: false
        // true: more than more pages that we prepared here already
        // fallback: true
        // blocking: after finishing reder, it will show the page 
        fallback: blocking
    }
}
