import { getAllEvents } from "../../dummy-data";
import EventList from '../../components/events/event-list';
import EventSearch from "../../components/events/events-search";

function EventsPage(){
    const events = getAllEvents();
    return (
        <div>
            <EventSearch/>
            <EventList items={events}/>
        </div>
    )
}

export default EventsPage;