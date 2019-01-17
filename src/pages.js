const pages = [

    // Dashboards

    {
        output: './index.html',
        content: {
            title: 'Analytics Dashboard',
            description: 'This is an example dashboard created using build-in elements and components.',
            heading_icon: 'pe-7s-car icon-gradient bg-mean-fruit'
        },
        template: './src/DemoPages/dashboards/dashboard-example-1.hbs'
    },
    // UI Elements
    {
        output: './elements-buttons-standard.html',
        content: {
            title: 'Standard Buttons',
            description: 'Wide selection of buttons that feature different styles for backgrounds, borders and hover options!',
            heading_icon: 'pe-7s-plane icon-gradient bg-tempting-azure'
        },
        template: './src/DemoPages/elements/buttons/standard.hbs'
    },

    {
        output: './elements-badges-labels.html',
        content: {
            title: 'Badges & Labels',
            description: 'Badges and labels are used to offer extra small pieces of info for your content.',
            heading_icon: 'pe-7s-voicemail icon-gradient bg-arielle-smile'
        },
        template: './src/DemoPages/elements/badges-labels.hbs'
    },
    {
        output: './elements-dropdowns.html',
        content: {
            title: 'Dropdowns',
            description: 'Multiple styles, actions and effects are available for the Archited Framework dropdown buttons.',
            heading_icon: 'pe-7s-umbrella icon-gradient bg-sunny-morning'
        },
        template: './src/DemoPages/elements/dropdowns.hbs'
    },
    {
        output: './elements-icons.html',
        content: {
            title: 'Icons',
            description: 'Wide icons selection including from flag icons to FontAwesome and other icons libraries.',
            heading_icon: 'pe-7s-phone icon-gradient bg-night-fade'
        },
        template: './src/DemoPages/elements/icons.hbs'
    },
    {
        output: './elements-cards.html',
        content: {
            title: 'Cards',
            description: 'Wide selection of cards with multiple styles, borders, actions and hover effects.',
            heading_icon: 'pe-7s-stopwatch icon-gradient bg-amy-crisp'
        },
        template: './src/DemoPages/elements/cards.hbs'
    },

    {
        output: './elements-list-group.html',
        content: {
            title: 'List Groups',
            description: 'These can be used with other components and elements to create stunning and unique new elements for your UIs.',
            heading_icon: 'pe-7s-paint icon-gradient bg-sunny-morning'
        },
        template: './src/DemoPages/elements/list-group.hbs'
    },
    {
        output: './elements-navigation.html',
        content: {
            title: 'Navigation Menus',
            description: 'Navigation menus are one of the basic building blocks for any web or mobile app.',
            heading_icon: 'pe-7s-photo-gallery icon-gradient bg-mean-fruit'
        },
        template: './src/DemoPages/elements/navigation.hbs'
    },

    {
        output: './elements-utilities.html',
        content: {
            title: 'Utilities',
            description: 'These are helpers that speed up the dev time for various components and effects.',
            heading_icon: 'pe-7s-wristwatch icon-gradient bg-deep-blue'
        },
        template: './src/DemoPages/elements/utilities.hbs'
    },

    // UI Components

    {
        output: './components-tabs.html',
        content: {
            title: 'Tabs',
            description: 'Tabs are used to split content between multiple sections. Wide variety available.',
            heading_icon: 'pe-7s-drawer icon-gradient bg-happy-itmeo'
        },
        template: './src/DemoPages/components/tabs.hbs'
    },
    {
        output: './components-accordions.html',
        content: {
            title: 'Accordions',
            description: 'Accordions represent collapsable component with extended functionality.',
            heading_icon: 'pe-7s-diamond icon-gradient bg-warm-flame'
        },
        template: './src/DemoPages/components/accordions.hbs'
    },
    {
        output: './components-notifications.html',
        content: {
            title: 'Notifications',
            description: 'Notifications represent one of the best ways to give feedback for various users actions.',
            heading_icon: 'pe-7s-glasses icon-gradient bg-love-kiss'
        },
        template: './src/DemoPages/components/notifications.hbs'
    },
    {
        output: './components-modals.html',
        content: {
            title: 'Modals',
            description: 'Wide selection of modal dialogs styles and animations available.',
            heading_icon: 'pe-7s-phone icon-gradient bg-premium-dark'
        },
        template: './src/DemoPages/components/modals.hbs'
    },

    {
        output: './components-progress-bar.html',
        content: {
            title: 'Progress Bar',
            description: 'You can use the progress bars on their own or in combination with other widgets.',
            heading_icon: 'pe-7s-filter icon-gradient bg-grow-early'
        },
        template: './src/DemoPages/components/progress-bar.hbs'
    },
    {
        output: './components-tooltips-popovers.html',
        content: {
            title: 'Tooltips & Popovers',
            description: 'These React components are used to add interaction or extra information for your app\'s content.',
            heading_icon: 'pe-7s-note2 icon-gradient bg-happy-fisher'
        },
        template: './src/DemoPages/components/tooltips-popovers.hbs'
    },
    {
        output: './components-carousel.html',
        content: {
            title: 'Carousels & Slideshows',
            description: 'Create easy and beautiful slideshows with these React components.',
            heading_icon: 'pe-7s-album icon-gradient bg-sunny-morning'
        },
        template: './src/DemoPages/components/carousel.hbs'
    },
    {
        output: './components-calendar.html',
        content: {
            title: 'Calendar',
            description: 'Calendars are used in a lot of apps. We thought to include one for React.',
            heading_icon: 'pe-7s-car icon-gradient bg-warm-flame'
        },
        template: './src/DemoPages/components/calendar.hbs'
    },
    {
        output: './components-pagination.html',
        content: {
            title: 'Pagination',
            description: 'Basic and dynamic pagination for use in your next awesome application.',
            heading_icon: 'pe-7s-notebook icon-gradient bg-mixed-hopes'
        },
        template: './src/DemoPages/components/pagination.hbs'
    },

    {
        output: './components-scrollable-elements.html',
        content: {
            title: 'Scrollable Elements',
            description: 'Add scrolling areas to any elements with custom scrollbars or default browser ones.',
            heading_icon: 'pe-7s-radio icon-gradient bg-strong-bliss'
        },
        template: './src/DemoPages/components/scrollable-elements.hbs'
    },
    {
        output: './components-maps.html',
        content: {
            title: 'Maps',
            description: 'Implement in your applications Google or vector maps.',
            heading_icon: 'pe-7s-map icon-gradient bg-premium-dark'
        },
        template: './src/DemoPages/components/maps.hbs'
    },

    // UI Tables

    {
        output: './tables-regular.html',
        content: {
            title: 'Regular Tables',
            description: 'Tables are the backbone of almost all web applications.',
            heading_icon: 'pe-7s-drawer icon-gradient bg-happy-itmeo'
        },
        template: './src/DemoPages/tables/regular.hbs'
    },

    // Dashboard Widgets

    {
        output: './dashboard-boxes.html',
        content: {
            title: 'Dashboard Boxes',
            description: 'Highly configurable boxes best used for showing numbers in an user friendly way.',
            heading_icon: 'pe-7s-wallet icon-gradient bg-plum-plate'
        },
        template: './src/DemoPages/dashboard-widgets/dashboard-boxes.hbs'
    },

    // Forms Elements

    {
        output: './forms-controls.html',
        content: {
            title: 'Form Controls',
            description: 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with React.',
            heading_icon: 'pe-7s-display1 icon-gradient bg-premium-dark'
        },
        template: './src/DemoPages/forms/elements/controls.hbs'
    },
    {
        output: './forms-layouts.html',
        content: {
            title: 'Form Layouts',
            description: 'Build whatever layout you need with our Architect framework.',
            heading_icon: 'pe-7s-graph text-success'
        },
        template: './src/DemoPages/forms/elements/layouts.hbs'
    },
    {
        output: './forms-validation.html',
        content: {
            title: 'Form Validation',
            description: 'Inline validation is very easy to implement using the Architect Framework.',
            heading_icon: 'lnr-picture text-danger'
        },
        template: './src/DemoPages/forms/elements/validation.hbs'
    },

    // Charts

    {
        output: './charts-chartjs.html',
        content: {
            title: 'ChartJS',
            description: 'Huge selection of charts created with the React ChartJS Plugin',
            heading_icon: 'pe-7s-bandaid icon-gradient bg-amy-crisp'
        },
        template: './src/DemoPages/charts/chartjs.hbs'
    },
];

module.exports = pages;
