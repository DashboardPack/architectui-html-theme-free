// Sliders & Carousels

import 'fullcalendar';

$(document).ready(() => {

    $('#calendar-list').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'listDay,listWeek,month'
        },
        themeSystem: 'bootstrap4',
        bootstrapFontAwesome: true,
        // customize the button names,
        // otherwise they'd all just say "list"
        views: {
            listDay: { buttonText: 'list day' },
            listWeek: { buttonText: 'list week' }
        },

        defaultView: 'listWeek',
        defaultDate: '2018-03-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2018-03-01'
            },
            {
                title: 'Long Event',
                start: '2018-03-07',
                end: '2018-03-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2018-03-11',
                end: '2018-03-13'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T10:30:00',
                end: '2018-03-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2018-03-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2018-03-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2018-03-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2018-03-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-03-28'
            }
        ]
    });

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        themeSystem: 'bootstrap4',
        bootstrapFontAwesome: true,
        defaultDate: '2018-03-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2018-03-01'
            },
            {
                title: 'Long Event',
                start: '2018-03-07',
                end: '2018-03-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2018-03-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2018-03-11',
                end: '2018-03-13'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T10:30:00',
                end: '2018-03-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2018-03-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2018-03-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2018-03-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2018-03-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2018-03-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2018-03-28'
            }
        ]
    });

    $('#calendar-bg-events').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
        },
        themeSystem: 'bootstrap4',
        bootstrapFontAwesome: true,
        defaultDate: '2018-03-12',
        navLinks: true, // can click day/week names to navigate views
        businessHours: true, // display business hours
        editable: true,
        events: [
            {
                title: 'Business Lunch',
                start: '2018-03-03T13:00:00',
                constraint: 'businessHours'
            },
            {
                title: 'Meeting',
                start: '2018-03-13T11:00:00',
                constraint: 'availableForMeeting', // defined below
                color: '#257e4a'
            },
            {
                title: 'Conference',
                start: '2018-03-18',
                end: '2018-03-20'
            },
            {
                title: 'Party',
                start: '2018-03-29T20:00:00'
            },

            // areas where "Meeting" must be dropped
            {
                id: 'availableForMeeting',
                start: '2018-03-11T10:00:00',
                end: '2018-03-11T16:00:00',
                rendering: 'background'
            },
            {
                id: 'availableForMeeting',
                start: '2018-03-13T10:00:00',
                end: '2018-03-13T16:00:00',
                rendering: 'background'
            },

            // red areas where no events can be dropped
            {
                start: '2018-03-24',
                end: '2018-03-28',
                overlap: false,
                rendering: 'background',
                color: 'var(--danger)'
            },
            {
                start: '2018-03-06',
                end: '2018-03-08',
                overlap: false,
                rendering: 'background',
                color: 'var(--success)'
            }
        ]
    });

});