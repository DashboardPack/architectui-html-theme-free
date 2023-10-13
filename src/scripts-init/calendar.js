/**
 * @description Fullcalendar Plugin Init
 * @see https://fullcalendar.io/docs
 */

import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');

 if (calendarEl != undefined) {
   const calendar = new Calendar(calendarEl, {
     plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
     headerToolbar: {
       left: 'prev,next today',
       center: 'title',
       right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
     },
     initialDate: '2023-01-12',
     navLinks: true, // can click day/week names to navigate views
     editable: true,
     dayMaxEvents: true, // allow "more" link when too many events
     events: [
       {
         title: 'All Day Event',
         start: '2023-01-01',
       },
       {
         title: 'Long Event',
         start: '2023-01-07',
         end: '2023-01-10'
       },
       {
         groupId: 999,
         title: 'Repeating Event',
         start: '2023-01-09T16:00:00'
       },
       {
         groupId: 999,
         title: 'Repeating Event',
         start: '2023-01-16T16:00:00'
       },
       {
         title: 'Conference',
         start: '2023-01-11',
         end: '2023-01-13'
       },
       {
         title: 'Meeting',
         start: '2023-01-12T10:30:00',
         end: '2023-01-12T12:30:00'
       },
       {
         title: 'Lunch',
         start: '2023-01-12T12:00:00'
       },
       {
         title: 'Meeting',
         start: '2023-01-12T14:30:00'
       },
       {
         title: 'Happy Hour',
         start: '2023-01-12T17:30:00'
       },
       {
         title: 'Dinner',
         start: '2023-01-12T20:00:00'
       },
       {
         title: 'Birthday Party',
         start: '2023-01-13T07:00:00'
       },
       {
         title: 'Click for Google',
         url: 'http://google.com/',
         start: '2023-01-28'
       }
     ]
   });

   calendar.render();
 }
});