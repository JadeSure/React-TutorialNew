import React from "react";
import {useRouter} from 'next/router';
import EventList from '../../components/events/EventList'
// import { getFilteredEvents } from "../../dummy-data";
import { getFilteredEvents } from "../../helpers/api-util";

// for server side render
// export default function FilteredEventsPage(props) {
//   if(props.hasError) {
//       return <div>
//         <h1>Wrong input filtered data here!</h1>
//       </div>
//   }

  
//   if(props.filteredEvents.length === 0 || !props.filteredEvents){
//     return  <>
//             <h2>No events found for the chosen filter</h2>
//         </>
// }

//   return <>
//       <EventList items={props.filteredEvents}/>
//   </>
// }

// export async function getServerSideProps(context){
//     const {params} = context;
//     const filterData = params.slug;

//     if(!filterData){
//         return <p>Loading....</p>
//     }
//     const year = +filterData[0]
//     const month = +filterData[1]
//    if(isNaN(year) || isNaN(month) || year>2030 || year<2021 || month<1 || month>12){
//        return{
//             props: {hasError: true},
//             // notFound: true
//         //    redirect: {
//         //        description: "/error"
//         //    }
//        }
//    }

//     const filteredEvents = await getFilteredEvents({year, month})

//     return {
//         props:{
//             filteredEvents
//         }
//     }
// }

// for client side render
import useSWR from 'swr';
import {useEffect, useState} from 'react'
export default function FilteredEventsPage(){
    const router = useRouter();
    const [loadedEvents, setLoadedEvents] = useState()

    const filterData = router.query.slug;
    const fetcher = (url) => fetch(url).then(res => res.json())
    const {data, error} =  useSWR('https://nextjs-course-3d63a-default-rtdb.firebaseio.com/events.json', fetcher);
    console.log(data);
    useEffect(() => {
   
        if(data){
            const events = [];
            for(const key in data){
                events.push({
                    id: key,
                    ...data[key]
                })
            }
            setLoadedEvents(events);
        }
    }
    , [data])

    console.log(loadedEvents, 666);

    if(!loadedEvents){
        return <p className="center">Loading...</p>
    }


    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numYear) || isNaN(numMonth) || numYear>2030 || numYear<2021 || numMonth<1 || numMonth>12){
        return <>
            <h2>Invalid year and month input</h2>
        </>
      
    }

    const filteredEvents = loadedEvents.filter(event => {
        console.log(event, 87888);
        const eventDate = new Date(event.date)
        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth -1;
    })

    if(filteredEvents.length === 0 || !filteredEvents){
        return  <>
                <h2>No events found for the chosen filter</h2>
            </>
    }

    return <>
     <EventList items={filteredEvents}/>
     </>
}

