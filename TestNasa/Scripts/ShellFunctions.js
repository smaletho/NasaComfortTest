function unbindAll() {
    //$("#screenshot-button").unbind();
    //$("#previous_button").unbind();
    //$("#next_button").unbind();
    //$(".menu_button").unbind();
    //$(".menu_option").unbind();
    //$(".header_l2").unbind();
    //$(".header_l3").unbind();


    $("#edit-button").unbind();
    $("#bookmarks-button").unbind();
    $("#colorChangeDiv").unbind();
    $("#belowColorChange").unbind();
    $("#main_content").unbind();
    $("#minimize-notes-button").unbind();
    $("#minimized_notes").unbind();
    $(".page-fold-button").unbind();
    $(".bookmark-show-notes").unbind();
    $(".bookmark-show-notes").unbind();
    $(".textarea-notes").unbind();
    $("#previous_button").unbind();
    $("#next_button").unbind();
    $(".menu_button").unbind();
    $(".menu_option").unbind();
    $(".header_l2").unbind();
    $(".header_l3").unbind();
}

function CreateListeners() {

    if (!CurrentPageIsBookmarked) {
        $(".page-fold-button").hover(function () {
            //mousein
            var n = $(this).prev();
            var id = $(n).prop('id');
            PageFoldAnimate(id, true);
        }, function () {
            //mouseout
            var n = $(this).prev();
            var id = $(n).prop('id');
            PageFoldAnimate(id, false);
        });
    }

    $("#edit-button").tomclick("", "", function () {
        //save notes
        var textVal = $(".textarea-notes").val();
        var bookmarkId = $("#current-bookmark-id").val();
        $.ajax({
            url: URL_SaveNotes,
            data: {
                notes: textVal,
                id: bookmarkId
            },
            type: 'POST',
            success: function (data) {
                console.log('success', data);
                //render bookmarks id
                $("#edit-button").hide();
                $("#save-button").show();
            }
        });
    });

    $("#bookmarks-button").tomclick("", "", toggleBookmarks);
    $("#colorChangeDiv").tomclick("", "", hideMenu);
    $("#belowColorChange").tomclick("", "", hideMenu);
    $("#main_content").tomclick("", "", hideMenu);

    $("#minimize-notes-button").tomclick("", "", function () {
        ExpandShrinkNotes(false);
    });
    $("#minimized_notes").tomclick("", "", function () {
        ExpandShrinkNotes(true);
    });

    $(".page-fold-button").tomclick("", "", function (el, evt) {
        var attr = $(el).data('foldid');
        togglePageFold(attr, $(el));
    });

    $(".bookmark-show-notes").tomclick("", "", function (el, evt) {
        var id = $(el).data('bookmarkid');
        ShowNotes(id);
    });
    $(".bookmark-show-notes").tomclick("", "", function (el, evt) {
        var id = $(el).data('bookmarkid');
        var loadUrl = URL_NewSetPageString;
        loadUrl = loadUrl.replace("99999", id);
        window.location = loadUrl;
    });

    $(".textarea-notes").on("change keyup paste cut", function () {
        $("#edit-button").show();
        $("#save-button").hide();
    });

    $("#previous_button").tomclick("", "", function () {
        var current_a = getNavigationA();
        var current_b = getNavigationB();
        var current_c = getNavigationC();

        var use_a = 0;
        var use_b = 0;
        var use_c = 0;

        var okayToLoad = true;

        var consoleLog;

        if (current_c > 1) {
            //next page = current_a, current_b, a+1
            consoleLog = current_a + ", " + current_b + ", " + (current_c - 1);
            use_a = current_a;
            use_b = current_b;
            use_c = current_c - 1;
        } else {
            //no more l3 pages, go up to l2
            if (current_b > 1) {
                //next page = current_a, b+1, 1
                consoleLog = current_a + ", " + (current_b - 1) + ", 1";
                use_a = current_a;
                use_b = current_b - 1;
                use_c = 1;
            } else {
                //no more l2 pages, go up to l1
                if (current_a > 1) {
                    //next page = a+1, 1, 1
                    consoleLog = (current_a - 1) + ", 1, 1";
                    use_a = current_a - 1;
                    use_b = 1;
                    use_c = 1;
                } else {
                    consoleLog = "no more pages";
                    alert("This is the beginning of the module.");
                    okayToLoad = false;
                }
            }
        }

        console.log(consoleLog);

        if (okayToLoad) {

            if (current_a == use_a && current_b == use_b) {

                //only need to load level 3 and content
                NavigateLevel3(use_a, use_b, use_c, false);

            } else if (current_a == use_a) {
                //load level 2 and level 3 and content
                NavigateLevel2(use_a, use_b, false);

            } else {
                //load all
                NavigateLevel1(use_a, false);

            }
        }

    });
    $("#next_button").tomclick("", "", function () {
        var current_a = getNavigationA();
        var current_b = getNavigationB();
        var current_c = getNavigationC();

        var use_a = 0;
        var use_b = 0;
        var use_c = 0;

        var okayToLoad = true;

        var consoleLog;

        if (current_c < nav_l3_max) {
            //next page = current_a, current_b, a+1
            consoleLog = current_a + ", " + current_b + ", " + (current_c + 1);
            use_a = current_a;
            use_b = current_b;
            use_c = current_c + 1;
        } else {
            //no more l3 pages, go up to l2
            if (current_b < nav_l2_max) {
                //next page = current_a, b+1, 1
                consoleLog = current_a + ", " + (current_b + 1) + ", 1";
                use_a = current_a;
                use_b = current_b + 1;
                use_c = 1;
            } else {
                //no more l2 pages, go up to l1
                if (current_a < nav_l1_max) {
                    //next page = a+1, 1, 1
                    consoleLog = (current_a + 1) + ", 1, 1";
                    use_a = current_a + 1;
                    use_b = 1;
                    use_c = 1;
                } else {
                    consoleLog = "no more pages";
                    alert("This is the end of the module.");
                    okayToLoad = false;
                }
            }
        }

        console.log(consoleLog);
        if (okayToLoad) {

            if (current_a == use_a && current_b == use_b) {

                //only need to load level 3 and content
                NavigateLevel3(use_a, use_b, use_c, true);

            } else if (current_a == use_a) {
                //load level 2 and level 3 and content
                NavigateLevel2(use_a, use_b, true);

            } else {
                //load all
                NavigateLevel1(use_a, true);

            }
        }

    });

    $(".menu_button").tomclick("", "", function (element, event) {
        if ($(".menu").css('display') == "none") {
            $(".menu").slideDown();
        } else {
            $(".menu").slideUp();
        }
    });

    $(".menu_option").tomclick("", "", function (element, event) {
        $(".menu").slideUp();

        $(".menu_option").removeClass('menu_option_selected');
        $(element).addClass("menu_option_selected");

        $(".header_l3").removeClass("header_l3_selected");
        $(".header_l3").first().addClass("header_l3_selected");
        $(".header_l2").removeClass("header_l2_selected")
        $(".header_l2").first().addClass("header_l2_selected");



        //load w/ parameters
        NavigateLevel1(getNavigationA());

    });


    $(".header_l2").tomclick("", "", function (element, event) {
        $(".header_l3").removeClass("header_l3_selected");
        $(".header_l3").first().addClass("header_l3_selected");
        $(".header_l2").removeClass("header_l2_selected")
        $(element).addClass("header_l2_selected");



        //load w/ parameters
        NavigateLevel2(getNavigationA(), getNavigationB());

    });


    $(".header_l3").tomclick("", "", function (element, event) {
        $(".header_l3").removeClass("header_l3_selected")
        $(element).addClass("header_l3_selected");

        //load w/ parameters
        NavigateLevel3(getNavigationA(), getNavigationB(), getNavigationC());

    });
}

function hideMenu() {
    $(".menu").slideUp();
    var len = $.trim($('#bookmarks').html()).length;

    if ($("#bookmarks").css('display') != "none") {
        $("#bookmarks").slideUp();
        if (len == 0)
            $("#bookmarks").empty();
    }
}

function getNavigationA() {
    var arr = $(".menu").find(".menu_option");
    for (var i = 0; i < arr.length; i++) {
        if ($(arr[i]).hasClass('menu_option_selected')) {
            return i + 1;
        }
    }
    return -1;
}
function getNavigationB() {
    var arr = $(".level_2_navigation").find(".header_l2");
    for (var i = 0; i < arr.length; i++) {
        if ($(arr[i]).hasClass('header_l2_selected')) {
            return i + 1;
        }
    }
    return -1;
}
function getNavigationC() {
    var arr = $(".level_3_navigation").find(".header_l3");
    for (var i = 0; i < arr.length; i++) {
        if ($(arr[i]).hasClass('header_l3_selected')) {
            return i + 1;
        }
    }
    return -1;
}

function toggleBookmarks() {
    var len = $.trim($('#bookmarks').html()).length;

    if ($("#bookmarks").css('display') == "none") {
        if (len == 0) {
            var addDiv = "<div style='color:white;font-style:italic;text-align:center'>you currently have no bookmarks</div>";
            $("#bookmarks").append($(addDiv));
        }
        $("#bookmarks").slideDown();
    } else {
        $("#bookmarks").slideUp();
        if (len == 0)
            $("#bookmarks").empty();
    }
}

function getNavDescription(a, b, c) {
    var ret_str = "";

    switch (a) {
        case 1:
            ret_str += "Fundoscopy > ";
            switch (b) {
                case 1:
                    ret_str += "Objective > Overview";
                    break;
                case 2:
                    ret_str += "Foundation > ";
                    switch (c) {
                        case 1:
                            ret_str += "Items";
                            break;
                        case 2:
                            ret_str += "CellScope";
                            break;
                        case 3:
                            ret_str += "Imaging";
                            break;
                    }
                    break;
                case 3:
                    ret_str += "Setup > ";
                    switch (c) {
                        case 1:
                            ret_str += "Room & Subject";
                            break;
                        case 2:
                            ret_str += "CellScope";
                            break;
                    }
                    break;
                case 4:
                    ret_str += "Exam procedure > ";
                    switch (c) {
                        case 1:
                            ret_str += "Video";
                            break;
                        case 2:
                            ret_str += "Step-by-step";
                            break;
                    }
                    break;
                case 5:
                    ret_str += "Tips > Tips";
                    break;
                case 6:
                    ret_str += "Quiz > Quiz";
                    break;
                case 7:
                    ret_str += "Pathology > Pathology"; 5
                    break;
            }
            break;
        case 2:
            ret_str += "Kidney & Bladder >";
            switch (b) {
                case 1:
                    ret_str += "Objective > Overview";
                    break;
                case 2:
                    ret_str += "Foundation > ";
                    switch (c) {
                        case 1:
                            ret_str += "Probe handling";
                            break;
                        case 2:
                            ret_str += "Imaging";
                            break;
                    }
                    break;
                case 3:
                    ret_str += "Setup > ";
                    switch (c) {
                        case 1:
                            ret_str += "Room & subject";
                            break;
                        case 2:
                            ret_str += "Ultrasound machine";
                            break;
                        case 3:
                            ret_str += "Image acquisition";
                            break;
                    }
                    break;
                case 4:
                    ret_str += "Exam procedure > ";
                    switch (c) {
                        case 1:
                            ret_str += "Right Kidney";
                            break;
                        case 2:
                            ret_str += "Left Kidney";
                            break;
                        case 3:
                            ret_str += "Bladder";
                            break;
                    }
                    break;
                case 5:
                    ret_str += "Pathology > Pathology";
                    break;
                case 6:
                    ret_str += "Quiz > Quiz";
                    break;
            }
            break;
        case 3:
            ret_str += "Intubation >";
            switch (b) {
                case 1:
                    ret_str += "Objective > Overview";
                    break;
                case 2:
                    ret_str += "Foundation > ";
                    switch (c) {
                        case 1:
                            ret_str += "Airway management";
                            break;
                        case 2:
                            ret_str += "ILMA";
                            break;
                    }
                    break;
                case 3:
                    ret_str += "Setup > ";
                    switch (c) {
                        case 1:
                            ret_str += "ItemsRoom & subject";
                            break;
                        case 2:
                            ret_str += "Equipment";
                            break;
                    }
                    break;
                case 4:
                    ret_str += "Exam procedure > ";
                    switch (c) {
                        case 1:
                            ret_str += "Video";
                            break;
                        case 2:
                            ret_str += "Step-by-step";
                            break;
                    }
                    break;
                case 5:
                    ret_str += "Quiz > Quiz";
                    break;
                case 6:
                    ret_str += "Tips > Tips";
                    break;
            }
            break;
        case 4:
            ret_str += "IV Insertion >";
            switch (b) {
                case 1:
                    ret_str += "Objective > Overview";
                    break;
                case 2:
                    ret_str += "Foundation > ";
                    switch (c) {
                        case 1:
                            ret_str += "Quick start";
                            break;
                        case 2:
                            ret_str += "Probe handling";
                            break;
                        case 3:
                            ret_str += "Imaging";
                            break;
                        case 4:
                            ret_str += "Needle handling";
                            break;
                    }
                    break;
                case 3:
                    ret_str += "Setup > ";
                    switch (c) {
                        case 1:
                            ret_str += "Subject";
                            break;
                        case 2:
                            ret_str += "Ultrasound machine";
                            break;
                        case 3:
                            ret_str += "Procedure supplies";
                            break;
                    }
                    break;
                case 4:
                    ret_str += "Exam procedure > ";
                    switch (c) {
                        case 1:
                            ret_str += "Video";
                            break;
                        case 2:
                            ret_str += "Step-by-step";
                            break;
                    }
                    break;
                case 5:
                    ret_str += "Quiz > Quiz";
                    break;
                case 6:
                    ret_str += "Troubleshooting > Troubleshooting";
                    break;
            }
            break;
    }

    return ret_str;
}

function PageFoldAnimate(id, isShow) {
    //set width to 15, animate width to 65
    if (isShow) {
        $("#" + id).width(15);
        $("#" + id).show();
        $("#" + id).animate({
            width: 65,
        });
    } else {
        $("#" + id).animate({
            width: 15
        }, function () {
            $("#" + id).hide();
        });

        $("#" + id).width(65);
    }

}

function NewLoadFinish() {
    console.log('counter', LoadCounter);
    console.log('waiting', WaitingForLoad);

    if (WaitingForLoad == LoadCounter) {
        //alert('counters equal');
        init();
        console.log("doing init now");
    }
    else
        LoadCounter++;
}

function ExpandShrinkNotes(isExpand) {
    if (isExpand) {
        $("#maximized_notes").css('z-index', '500');
        $("#minimized_notes").css('z-index', '499');

        $("#maximized_notes").width(275);
        $("#maximized_notes").css('opacity', '0');
        $("#maximized_notes").show();
        $("#minimized_notes").animate({
            width: 275,
            height: 275,
            opacity: 0
        });
        $("#maximized_notes").animate({
            width: 500,
            height: 500,
            opacity: 1
        });
        //minimized_notes animate width/height, fadeout
        //maximized_notes fadeIn, animate width/height
    } else {
        $("#maximized_notes").css('z-index', '499');
        $("#minimized_notes").css('z-index', '500');

        $("#minimized_notes").width(275);
        $("#minimized_notes").css('opacity', '0');
        $("#minimized_notes").show();
        $("#maximized_notes").animate({
            width: 275,
            height: 275,
            opacity: 0
        }, function () { $("#maximized_notes").hide(); });
        $("#minimized_notes").animate({
            width: 60,
            height: 40,
            opacity: 1
        });
    }
}










function togglePageFold(pg, element) {
    var pre = $(element).prev();

    var a = getNavigationA();
    var b = getNavigationB();
    var c = getNavigationC();

    var idStr = "bookmark_" + a + "_" + b + "_" + c;

    if (!CurrentPageIsBookmarked) {

        PageFoldAnimate(pg, true);

        var nav_title = getNavDescription(a, b, c);

        $("#bookmark_string").val(nav_title);
        $("#bookmark_a").val(a);
        $("#bookmark_b").val(b);
        $("#bookmark_c").val(c);
        $("#bookmarkPopup").dialog("open");

        //unbind hover
        $(".page-fold-button").off('mouseenter mouseleave')

    } else {
        var c = confirm("This will remove your bookmark, and delete your notes on this page, is that okay?");
        if (c) {
            //bind hover
            $(".page-fold-button").hover(function () {
                //mousein


                var n = $(this).prev();
                var id = $(n).prop('id');
                PageFoldAnimate(id, true);
            }, function () {
                //mouseout

                var n = $(this).prev();
                var id = $(n).prop('id');
                PageFoldAnimate(id, false);
            });

            PageFoldAnimate(pg, false);
            $.ajax({
                url: URL_RemoveBookmark,
                data: {
                    id: idStr
                },
                type: 'POST',
                success: function (data) {
                    console.log('success', data);
                    //alert(data);
                    //render bookmarks id
                    $("#bookmarks").empty();
                    $("#bookmarks").load(URL_RenderBookmarks);

                    LoadCounter = 1;
                    WaitingForLoad = 1;
                    var loadUrl = URL_GetContent;
                    loadUrl = loadUrl.replace("99999", getNavigationA());
                    loadUrl = loadUrl.replace("88888", getNavigationB());
                    loadUrl = loadUrl.replace("77777", getNavigationC());
                    $("#main_content").load(loadUrl, NewLoadFinish);
                }
            });
        }
    }

}

function NavigateLevel1(a, isNext) {
    LoadCounter = 1;
    WaitingForLoad = 6;

    var loadUrl = URL_GetNavigationTitle;
    loadUrl = loadUrl.replace("99999", a);
    $(".navigation_title").load(loadUrl, NewLoadFinish);

    loadUrl = URL_GetNavigationImage;
    loadUrl = loadUrl.replace("99999", a);
    $(".navigation_image").load(loadUrl, NewLoadFinish);

    loadUrl = URL_GetLevel1Navigation;
    loadUrl = loadUrl.replace("99999", a);
    $(".menu").load(loadUrl, NewLoadFinish);

    loadUrl = URL_GetLevel2Navigation;
    loadUrl = loadUrl.replace("99999", a);
    loadUrl = loadUrl.replace("88888", 1);
    $(".level_2_navigation").load(loadUrl, NewLoadFinish);

    loadUrl = URL_GetLevel3Navigation;
    loadUrl = loadUrl.replace("99999", a);
    loadUrl = loadUrl.replace("88888", 1);
    loadUrl = loadUrl.replace("77777", 1);
    $(".level_3_navigation").load(loadUrl, NewLoadFinish);

    loadUrl = URL_GetContent;
    loadUrl = loadUrl.replace("99999", a);
    loadUrl = loadUrl.replace("88888", 1);
    loadUrl = loadUrl.replace("77777", 1);

    if (isNext !== undefined) {
        if (isNext) {
            $("#main_content").fadeOut(function () {
                $("#main_content").load(loadUrl, NewLoadFinish);
                $("#main_content").effect('slide', { direction: "right" });
            });
        } else {
            $("#main_content").fadeOut(function () {
                $("#main_content").load(loadUrl, NewLoadFinish);
                $("#main_content").effect('slide', { direction: "left" });
            });
        }
    } else {
        $("#main_content").fadeOut(function () {
            $("#main_content").load(loadUrl, NewLoadFinish);
            $("#main_content").effect('slide', { direction: "right" });
        });
    }

}
function NavigateLevel2(a, b, isNext) {
    LoadCounter = 1;
    WaitingForLoad = 3;

    var loadUrl = URL_GetLevel2Navigation;
    loadUrl = loadUrl.replace("99999", a);
    loadUrl = loadUrl.replace("88888", b);
    $(".level_2_navigation").load(loadUrl, NewLoadFinish);

    loadUrl = URL_GetLevel3Navigation;
    loadUrl = loadUrl.replace("99999", a);
    loadUrl = loadUrl.replace("88888", b);
    loadUrl = loadUrl.replace("77777", 1);
    $(".level_3_navigation").load(loadUrl, NewLoadFinish);

    loadUrl = URL_GetContent;
    loadUrl = loadUrl.replace("99999", a);
    loadUrl = loadUrl.replace("88888", b);
    loadUrl = loadUrl.replace("77777", 1);
    if (isNext !== undefined) {
        if (isNext) {
            $("#main_content").fadeOut(function () {
                $("#main_content").load(loadUrl, NewLoadFinish);
                $("#main_content").effect('slide', { direction: "right" });
            });
        } else {
            $("#main_content").fadeOut(function () {
                $("#main_content").load(loadUrl, NewLoadFinish);
                $("#main_content").effect('slide', { direction: "left" });
            });
        }
    } else {
        $("#main_content").fadeOut(function () {
            $("#main_content").load(loadUrl, NewLoadFinish);
            $("#main_content").effect('slide', { direction: "right" });
        });
    }
}
function NavigateLevel3(a, b, c, isNext) {
    LoadCounter = 1;
    WaitingForLoad = 2;

    var loadUrl = URL_GetLevel3Navigation;
    loadUrl = loadUrl.replace("99999", a);
    loadUrl = loadUrl.replace("88888", b);
    loadUrl = loadUrl.replace("77777", c);
    $(".level_3_navigation").load(loadUrl, NewLoadFinish);

    loadUrl = URL_GetContent;
    loadUrl = loadUrl.replace("99999", a);
    loadUrl = loadUrl.replace("88888", b);
    loadUrl = loadUrl.replace("77777", c);
    if (isNext !== undefined) {
        if (isNext) {
            $("#main_content").fadeOut(function () {
                $("#main_content").load(loadUrl, NewLoadFinish);
                $("#main_content").effect('slide', { direction: "right" });
            });
        } else {
            $("#main_content").fadeOut(function () {
                $("#main_content").load(loadUrl, NewLoadFinish);
                $("#main_content").effect('slide', { direction: "left" });
            });
        }
    } else {
        $("#main_content").fadeOut(function () {
            $("#main_content").load(loadUrl, NewLoadFinish);
            $("#main_content").effect('slide', { direction: "right" });
        });
    }

}

function ShowNotes(id) {
    $.ajax({
        url: URL_GetBookmarkNotesAjax,
        data: {
            id: id
        },
        type: 'POST',
        success: function (data) {
            console.log('success', data);
            alert(data);
        }
    });
}