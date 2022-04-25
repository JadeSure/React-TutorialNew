import React from "react";
import EventList from '../../components/events/EventList'
// import {getAllEvents} from '../../dummy-data'
import { getFeaturedEvents } from "../../helpers/api-util";
import EventSearch from '../../components/events/EventSearch'
import {useRouter} from 'next/router'

export default function Index(props) {
    const {featuredEvents} = props
    // const allEvents = await getFeaturedEvents();
    
    const router = useRouter()

    const findEventsHandler=(year, month)=>{
        const fullPath=`/events/${year}/${month}`
        router.push(fullPath)
    }
  return <>
    <EventSearch onSearch={findEventsHandler}/>
    <EventList items={featuredEvents}/>
  </>;
}

// more meaningful
export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents()
    return {
        props: {
            featuredEvents
        },
        revalidate: 1800
    }
}

