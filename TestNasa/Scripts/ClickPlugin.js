$.fn.tomclick = function (hoverClass, callback) {

    var timeoutClick;
    var didTouch = false;

    $(this).on("touchstart", function () {
        //event.preventDefault();
        didTouch = true;

        console.log("touchstart");
            
        $(this).addClass(hoverClass);

        timeoutClick = setTimeout(function () {
            console.log("timeout!");
            $(this).removeClass(hoverClass);
        }, 1000);

    });

    $(this).on("touchend", function () {
        //event.preventDefault();
        didTouch = true;
        if (timeoutClick) {

            $(this).removeClass(hoverClass);
            clearTimeout(timeoutClick);
            console.log("touchend");
            callback(this);
        }
    });

    $(this).on("mousedown", function () {
        if (!didTouch) {
            console.log("mousedown");

            $(this).addClass(hoverClass);

            timeoutClick = setTimeout(function () {
                console.log("timeout!");
                $(this).removeClass(hoverClass);
            }, 1000);
        }
    });

    $(this).on("mouseup", function () {

        if (!didTouch) {
            if (timeoutClick) {

                $(this).removeClass(hoverClass);
                clearTimeout(timeoutClick);
                console.log("mouseup");
                callback(this);
            }
        }
    });

    //$(this).on("mouseover", function () {
    //    $(this).addClass(hoverClass);
    //});

    //$(this).on("mouseout", function () {
    //    $(this).removeClass(hoverClass);
    //});

    
};