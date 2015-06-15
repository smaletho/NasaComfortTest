$.fn.tomclick = function (activeClass, hoverClass, callback) {

    var timeoutClick;
    var didTouch = false;

    $(this).on("touchstart", function (event) {
        //event.preventDefault();
        didTouch = true;

        //console.log("touchstart");
            
        $(this).addClass(hoverClass);

        timeoutClick = setTimeout(function () {
            //console.log("timeout!");
            $(this).removeClass(hoverClass);
            didTouch = false;
        }, 1000);

    });

    $(this).on("touchend", function (event) {
        //event.preventDefault();
        didTouch = true;
        if (timeoutClick) {

            $(this).removeClass(hoverClass);
            clearTimeout(timeoutClick);
            //console.log("touchend");
            callback(this, event);
        }
    });

    $(this).on("mousedown", function (event) {
        if (!didTouch) {
            //console.log("mousedown");

            $(this).addClass(hoverClass);

            timeoutClick = setTimeout(function () {
                //console.log("timeout!");
                $(this).removeClass(hoverClass);
                didTouch = false;
            }, 1000);
        }
    });

    $(this).on("mouseup", function (event) {

        if (!didTouch) {
            if (timeoutClick) {

                $(this).removeClass(hoverClass);
                clearTimeout(timeoutClick);
                //console.log("mouseup");
                callback(this, event);
            }
        }
        didTouch = false;
    });

    //$(this).on("mouseover", function () {
    //    $(this).addClass(hoverClass);
    //});

    //$(this).on("mouseout", function () {
    //    $(this).removeClass(hoverClass);
    //});

    
};