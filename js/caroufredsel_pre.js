// JavaScript Document

jQuery(function() {
    jQuery('ul#foo2').carouFredSel({
        auto: {
			//delay: 10000,
			timeoutDuration: 10000,
		},
        circular: true,
        infinite: true,
        responsive: true,
        direction: "up",
        width: 260,
        height: 175,
        items: {
            visible: 1,
            start: "random"
        }
    });
});

