// Perfect Scrollbar

import PerfectScrollbar from 'perfect-scrollbar';

$(document).ready(() => {

    setTimeout(function () {

        if ($(".scrollbar-container")[0]) {

            $('.scrollbar-container').each(function () {
                const ps = new PerfectScrollbar($(this)[0], {
                    wheelSpeed: 2,
                    wheelPropagation: false,
                    minScrollbarLength: 20
                });
            });

            const ps = new PerfectScrollbar('.scrollbar-sidebar', {
                wheelSpeed: 2,
                wheelPropagation: false,
                minScrollbarLength: 20
            });

        }

    }, 1000);
});