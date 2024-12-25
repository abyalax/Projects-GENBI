import dynamic from "next/dynamic";
import AdminLayout from "../layout"
import { useEffect, useState } from "react";
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import { events } from "@/utils/dummy-data";
import interactionPlugin from '@fullcalendar/interaction';

const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false });

const AdminAgenda = () => {
    const [windowWidth, setWindowWidth] = useState(1024);

    useEffect(() => {
        const updateWindowWidth = () => setWindowWidth(window.innerWidth);

        if (typeof window !== 'undefined') {
            updateWindowWidth(); // Set nilai awal
            window.addEventListener('resize', updateWindowWidth);
        }

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    const handleEventClick = (info: any) => {
        const event = info.event;
        let eventDetails = `Event: ${event.title}\n`;
        eventDetails += `Description: ${event.extendedProps.description}\n`;
        eventDetails += `Location: ${event.extendedProps.location}\n`;
        if (event.extendedProps.additionalInfo) {
            eventDetails += `Additional Info: ${event.extendedProps.additionalInfo}\n`;
        }
        if (event.extendedProps.participants) {
            eventDetails += `Participants:\n`;
            event.extendedProps.participants.forEach((participant: any) => {
                eventDetails += `- ${participant.name} (${participant.location})\n`;
            });
        }
        alert(eventDetails);
    };
    return (
        <AdminLayout>
            <h2 className="text-2xl font-semibold my-8">Agenda Management</h2>
            <div className="ml:px-24 sm:px-16 xs:px-4 px-2 ml:text-base sm:text-sm text-xs">
                <FullCalendar
                    key={windowWidth}
                    plugins={[
                        resourceTimelinePlugin,
                        dayGridPlugin,
                        interactionPlugin,
                        timeGridPlugin
                    ]}
                    initialView="dayGridMonth"
                    dateClick={(info) => alert(`Tanggal yang diklik: ${info.dateStr}`)}
                    events={events}
                    eventClick={handleEventClick}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: windowWidth < 680 ? '' : 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    contentHeight="auto"
                    aspectRatio={2}
                />
            </div>
        </AdminLayout >
    )
}

export default AdminAgenda
