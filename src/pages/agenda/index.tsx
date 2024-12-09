import Navbar from "@/component/navbar";
import dynamic from 'next/dynamic';
import interactionPlugin from '@fullcalendar/interaction';
import Footer from "@/component/footer";
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import { events } from "@/utils/dummy-data";

const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false });

const AgendaPage = () => {

  const handleEventClick = (info: any) => {
    const event = info.event;
    // Membuat string untuk menampilkan semua informasi yang diinginkan
    let eventDetails = `Event: ${event.title}\n`;
    eventDetails += `Description: ${event.extendedProps.description}\n`;
    eventDetails += `Location: ${event.extendedProps.location}\n`;
    // Menambahkan informasi tambahan jika ada
    if (event.extendedProps.additionalInfo) {
      eventDetails += `Additional Info: ${event.extendedProps.additionalInfo}\n`;
    }
    // Menambahkan peserta jika ada, dengan format Nama (Lokasi)
    if (event.extendedProps.participants) {
      eventDetails += `Participants:\n`;
      event.extendedProps.participants.forEach((participant: any) => {
        eventDetails += `- ${participant.name} (${participant.location})\n`;
      });
    }
    // Menampilkan semua informasi dalam alert
    alert(eventDetails);
  };

  return (
    <main className="w-full bg-[#edf0f7] min-h-screen pt-20 text-gray-700">
      <Navbar />

      <h2 className="text-3xl font-semibold text-[#1C8383] text-center mt-4">Agenda </h2>
      <h2 className="text-3xl font-semibold text-[#1C8383] text-center">GENBI Universitas Islam Kadiri-Kediri</h2>
      <p className="text-center font-semibold">
        Get the latest information about upcoming events and important dates!
      </p>

      <div className="px-40 pt-8">
        <FullCalendar
          plugins={[
            resourceTimelinePlugin,
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin
          ]}
          initialView="dayGridMonth"
          weekends={false}
          dateClick={handleEventClick}
          events={events}
          eventClick={handleEventClick} // Menampilkan detail saat event diklik
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
        />
      </div>
      <Footer />
    </main>
  )
};

export default AgendaPage;
