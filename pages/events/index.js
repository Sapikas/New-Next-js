import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from '../../components/events/event-list';
import EventSearch from "../../components/events/events-search";

function EventsPage(){
    const router = useRouter();
    const events = getAllEvents();

    function findsEventHandler(year, month){
        const fullpath = `/events/${year}/${month}`;

        router.push(fullpath);
    }
    return (
        <>
            <EventSearch onSearch={findsEventHandler}/>
            <EventList items={events}/>
        </>
    )
}

export default EventsPage;