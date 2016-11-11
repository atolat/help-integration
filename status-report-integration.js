//current code

/*------------------------------------------------------------------------------------------------------------------------------------/
                                        ##Integration Script for "Help" by Excers.## 
    >>Description: This script is developed for CAPPM's training instance for demonstration of the tool, using the "Create a Status Report Flow".
    >>Git Repository:: https://github.com/atolat/help-integration.git
    >>Ver 1.0
    >>Author: Arpan Tolat
*/


/*----------------------------------------------------------------------------------------------------------------------------------*/
// Initial Configurations


//A neat function to read data from a url/s3 bucket using jquery .get()
//Application to match dates for periodic shoutouts!!



$(document).ready(function () {
    $.get("https://s3-us-west-2.amazonaws.com/helpdemoresources/test/obj.json", function (data, status) {
        //data = JSON.parse(data);
        window.tooltip1_url = data.tooltips.tooltip1_url;
        //window.alert(data.tooltips.tooltip1_url);
        window.tooltip2_url = data.tooltips.tooltip2_url;
        window.tooltip3_url = data.tooltips.tooltip3_url;
        window.tooltip4_url = data.tooltips.tooltip4_url;
        window.video_url = data.video.video1_url;
        window.pdf_url = data.pdf.pdf1_url;
    });
});

// Whatfix setting change to let the tip come over menu.
window._wfx_settings.z_refresh = true;

// Generic self help widget.
window._wfx_widget = {
    "position": "brm"
    , "label": "letzNav"
    , "mode": "live_here"
    , "ent_id": "d347a8c0-3d47-11e6-8bdf-448a5b5dd1ba"
    , "order": ["7667a890-49b2-11e6-aba8-448a5b5dd5b8"]
    , "color": "#4c4b4b"

};

//Generic self help widget LNF
window._wfx_settings.theme = {
	"widget_size":"20px",
};

// Generic branch trigger.
window._wfx_settings.onBeforeShow = function (event) {
    if (window._wfx_settings[event.flow_id]) {
        return window._wfx_settings[event.flow_id](event);
    }
};

// Adding buttons at page level.
window._wfx_settings['page_settings'] = {};

// Default self help settings.
window._wfx_settings['default_page_settings'] = {
    "self_help": {}
};


/*----------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------*/
//Custom CSS-- Overrides CSS definitions from CA PPM's default stylesheet.
//Defined as strings with global scope.
//Un-escaped versions attached.

//Normalize CSS
//Define/Override CSS for text formatting and tables.

var normalizeCSS = "<style>\/\/Strong\r\nb\r\n, strong {\r\n    font - weight: inherit;\r\n}\r\n\r\n\r\nb\r\n, strong {\r\n    font - weight: bolder;\r\n}\r\n\r\n\r\n\r\ndfn {\r\n    font - style: italic;\r\n}\r\n\r\n\/\/Headers\r\n\r\nh1 {\r\n\t    display: block;\r\n\t    font-size: 2em;\r\n\t    -webkit-margin-before: 0.67__qem;\r\n\t    -webkit-margin-after: 0.67em;\r\n\t    -webkit-margin-start: 0;\r\n\t    -webkit-margin-end: 0;\r\n\t    font-weight: bold;\r\n\t}\r\n\r\nstrong, b {\r\n    font-weight: bold;\r\n\t}\r\n\r\nh2 {\r\n\t    display: block;\r\n\t    font-size: 1.5em;\r\n\t    -webkit-margin-before: 0.83__qem;\r\n\t    -webkit-margin-after: 0.83em;\r\n\t    -webkit-margin-start: 0;\r\n\t    -webkit-margin-end: 0;\r\n\t    font-weight: bold;\r\n\t}\r\n\t\r\n\th3 {\r\n\t    display: block;\r\n\t    font-size: 1.17em;\r\n\t    -webkit-margin-before: 1__qem;\r\n\t    -webkit-margin-after: 1em;\r\n\t    -webkit-margin-start: 0;\r\n\t    -webkit-margin-end: 0;\r\n\t    font-weight: bold;\r\n\t}\r\n\t\r\n\th4 {\r\n\t    display: block;\r\n\t    -webkit-margin-before: 1.33__qem;\r\n\t    -webkit-margin-after: 1.33em;\r\n\t    -webkit-margin-start: 0;\r\n\t    -webkit-margin-end: 0;\r\n\t    font-weight: bold;\r\n\t}\r\n\t\r\n\th5 {\r\n\t    display: block;\r\n\t    font-size: .83em;\r\n\t    -webkit-margin-before: 1.67__qem;\r\n\t    -webkit-margin-after: 1.67em;\r\n\t    -webkit-margin-start: 0;\r\n\t    -webkit-margin-end: 0;\r\n\t    font-weight: bold;\r\n\t}\r\n\t\r\n\th6 {\r\n\t    display: block;\r\n\t    font-size: .67em;\r\n\t    -webkit-margin-before: 2.33__qem;\r\n\t    -webkit-margin-after: 2.33em;\r\n\t    -webkit-margin-start: 0;\r\n\t    -webkit-margin-end: 0;\r\n\t    font-weight: bold;\r\n\t}\r\n\r\n\r\n\/\/Lists\r\nul { \r\n   list-style-type: disc; \r\n   list-style-position: inside; \r\n}\r\nol { \r\n   list-style-type: decimal; \r\n   list-style-position: inside; \r\n}\r\nul ul, ol ul { \r\n   list-style-type: circle; \r\n   list-style-position: inside; \r\n   margin-left: 15px; \r\n}\r\nol ol, ul ol { \r\n   list-style-type: lower-latin; \r\n   list-style-position: inside; \r\n   margin-left: 15px; \r\n}\r\n\r\n\/\/Tables\r\ntable {\r\n\t    display: table;\r\n\t    border-collapse: separate;\r\n\t    border-spacing: 2px;\r\n\t    border-color: gray;\r\n\t}\r\n\t\r\n\tthead {\r\n\t    display: table-header-group;\r\n\t    vertical-align: middle;\r\n\t    border-color: inherit;\r\n\t}\r\n\t\r\n\ttbody {\r\n\t    display: table-row-group;\r\n vertical-align: middle;\r\n\t    border-color: inherit;\r\n\t}\r\n\t\r\n\ttfoot {\r\n\t    display: table-footer-group;\r\n\t    vertical-align: middle;\r\n\t    border-color: inherit;\r\n\t}\r\n\t\r\n\t\/* for tables without table section elements (can happen with XHTML or dynamically created tables) *\/\r\n\ttable > tr {\r\n\t    vertical-align: middle;\r\n\t}\r\n\t\r\n\tcol {\r\n\t    display: table-column;\r\n}\r\n\t\r\n\tcolgroup {\r\n\t    display: table-column-group;\r\n\t}\r\n\t\r\n\ttr {\r\n\t    display: table-row;\r\n\t    vertical-align: inherit;\r\n\t    border-color: inherit;\r\n\t}\r\n\t\r\n\ttd, th {\r\n\t    display: table-cell;\r\n\t    vertical-align: inherit;\r\n\t}\r\n\t\r\nth {\r\n\t    font-weight: bold;\r\n\t}\r\n\t\r\n\tcaption {\r\n\t    display: table-caption;\r\n\t    text-align: -webkit-center;\r\n\t}\r\n\r\n\/\/Button\r\nbutton {\r\n\t    -webkit-appearance: button;\r\n}<\/style>";

//CSS for the tooltips associated with the "?" icons/buttons.

var toolTipCss = '<style>\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    \r\n    \/* Position the tooltip *\/\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: -5px;\r\n    right: 105%;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n}\r\n<\/style>';

//CSS for "?" button, includes some animations, hover function definitions.

var buttonCss = '<style>\r\n.button-hov { \r\n display: inline-block;\r\n position: absolute;\r\n right: 20px; inline-block;\r\n border-radius: 84px;\r\n background-color: #1c9a1a;\r\n border: 1px solid #1c9a1a;\r\n color: #FFFFFF;\r\n text-align: center;\r\n font-size: 10px;\r\n padding: 4px 6px 4px 6px;\r\n cursor: pointer;\r\n margin: 4px 10px 0px 0px;\r\n}\r\n#check {position: relative;z-index: 10000;fill: none;stroke: green;stroke-width: 20;stroke-linecap: round;stroke-dasharray: 180;stroke-dashoffset: 180;  animation: draw 2s 1 ease;}@keyframes draw {  to {    stroke-dashoffset: 0;  }}<\/style>';

//CSS for table borders, used for "Validate 2"

var tableCss = '<style type="text/css">.tg  {border-collapse:collapse;border-spacing:0;}.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}.tg .tg-yw4l{vertical-align:top}</style>';
/*----------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------*/
//Buttons
//Buttons have been defined in this section using jquery.

// "Validate 1" button
window._wfx_settings.add_button = function (name, button, parentSelector, action) {
    var validate_id = "wfx_" + name + "_validate";
    if (document.getElementById(validate_id)) {
        return;
    }
    var validate = $('<button/>', {
        html: button
        , class: 'ppm_button button'
        , click: action
        , id: validate_id
    });
    $(parentSelector).append(validate);
};


// "Report Status" Button/ "?" icon
window._wfx_settings.add_button_report_status = function (name, img, parentSelector) {
    var report_status_id = "wfx_" + name + "_report_status";
    if (document.getElementById(report_status_id)) {
        return;
    }
    var report_status = $('<button/>', {
        text: "?"
        , style: "vertical-align:middle"
        , class: 'button-hov'
        , id: report_status_id
    });
    $(report_status).append(toolTipCss).append(buttonCss).addClass("tooltip").append(' <span class="tooltiptext"><img src="' + img + '" /></span>');

    $(parentSelector).append(report_status);
};


// "Schedule Status" Button
window._wfx_settings.add_button_schedule_status = function (name, img, parentSelector) {
    var schedule_status_id = "wfx_" + name + "_schedule_status";
    if (document.getElementById(schedule_status_id)) {
        return;
    }
    var schedule_status = $('<button/>', {
        text: "?"
        , style: "vertical-align:middle"
        , class: 'button-hov'
        , id: schedule_status_id
    });
    $(schedule_status).append(toolTipCss).append(buttonCss).addClass("tooltip").append(' <span class="tooltiptext"><img src="' + img + '" /></span>');

    $(parentSelector).append(schedule_status);
};


// Scope Status Button
window._wfx_settings.add_button_scope_status = function (name, img, parentSelector) {
    var scope_status_id = "wfx_" + name + "_scope_status";
    if (document.getElementById(scope_status_id)) {
        return;
    }
    var scope_status = $('<button/>', {
        text: "?"
        , style: "vertical-align:middle"
        , class: 'button-hov'
        , id: scope_status_id
    });
    $(scope_status).append(toolTipCss).append(buttonCss).addClass("tooltip").append(' <span class="tooltiptext"><img src="' + img + '" /></span>');

    $(parentSelector).append(scope_status);
};


// "Cost & Effort" Button
window._wfx_settings.add_button_ce_status = function (name, img, parentSelector) {
    var ce_status_id = "wfx_" + name + "_ce_status";
    if (document.getElementById(ce_status_id)) {
        return;
    }
    var ce_status = $('<button/>', {
        text: "?"
        , style: "vertical-align:middle"
        , class: 'button-hov'
        , id: ce_status_id
    });
    $(ce_status).append(toolTipCss).append(buttonCss).addClass("tooltip").append(' <span class="tooltiptext"><img src="' + img + '" /></span>');

    $(parentSelector).append(ce_status);
};

//For flow segmentation
window._wfx_settings.equals = function (one, two) {
    if (!one) {
        if (!two) {
            return true;
        } else {
            return false;
        }
    } else {
        if (!two) {
            return false;
        } else {
            return one == two;
        }
    }
};

/*----------------------------------------------------------------------------------------------------------------------------------*/
//Message/Popup/Shoutout definitions --jquery

//General Messages
window._wfx_settings.show_message = function (message, color) {
    var graphContainer = ' <div id="container-compliance" style="width: 300px; height: 200px; float: left; display: block; position: relative"></div>';
    var bgWrap = $('<div/>', {
        css: {
            'display': 'block'
            , 'position': 'fixed'
            , 'width': '100%'
            , 'height': '100%'
            , 'left': '0'
            , 'top': '0'
            , 'background': '#000'
            , 'opacity': '0.7'
            , 'filter': 'alpha(opacity=70)'
            , 'z-index': '100000'
        }
    });

    var popup = $('<div/>', {
        css: {
            'display': 'block'
            , 'position': 'relative'
            , 'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            , 'border': '10px groove #787A7A'
            , 'width': '500px'
            , 'background': '#ffffff'
            , 'padding': '20px 20px 50px 20px'
            , 'border-radius': '4px'
            , 'z-index': '100001'
            , 'margin': '10% auto'
        }
    });
    var text = $('<label/>', {
        css: {
            'color': color
        }
        , html: normalizeCSS + ' ' + message
    });
    var close = $('<button/>', {
        class: 'ppm_button button'
        , css: {
            'float': 'right'
            , 'margin': '10px'
        }
        , text: 'Close'
        , click: function () {
            bgWrap.remove();
            popup.remove();
        }
    });
    popup.append(text);
    popup.append(close);
    //    popup.append('<div id="graph" style="width:100%; height:400px;"></div>');
    $('body').append(bgWrap);
    $('body').append(popup);


};

//Resources...
window._wfx_settings.show_resource = function (message, color, width, height) {
    var bgWrapper = $('<div/>', {
        css: {
            'display': 'block'
            , 'position': 'relative'
            , 'width': '100%'
            , 'height': '100%'
            , 'left': '0'
            , 'top': '0'
            , 'background': '#000'
            , 'opacity': '0.7'
            , 'filter': 'alpha(opacity=70)'
            , 'z-index': '100000'
        }
    });

    var bgWrap = $('<div/>', {
        css: {
            'display': 'block'
            , 'position': 'relative'
            , 'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            , 'background': '#808080'
            , 'width': width
            , 'height': height
            , 'padding': '20px 20px 50px 20px'
            , 'border-radius': '4px'
            , 'z-index': '100001'
            , 'margin': '10% auto'
            , 'align-items': 'center'
        }
    });
    var text = $('<label/>', {
        css: {
            'color': color
        }
        , html: '<center>' + message + '</center>'
    });
    var close = $('<button/>', {
        class: 'ppm_button button'
        , css: {
            'float': 'right'
            , 'margin': '10px'
        }
        , text: 'Close'
        , click: function () {
            bgWrap.remove();
            bgWrapper.remove();
        }
    });
    bgWrap.append(text);
    bgWrap.append(close);
    $('body').append(bgWrap);
    $('body').append(bgWrapper);


};

//Shoutout!!
window._wfx_settings.shoutout = function (message, color) {

    var popup = $('<div/>', {
        css: {
            'display': 'block'
            , 'position': 'relative'
            , 'width': '300px'
            , 'background': '#ffcc00'
            , 'padding': '50px 20px 50px 20px'
            , 'border-radius': '15px 50px'
            , 'z-index': '100001'
            , 'margin': '10% auto'
        }
    });
    var text = $('<label/>', {
        //css: { 'line-height' : '1.5em', 'clear': 'both', 'color' : color, 'font': 'Calibri'},
        //strong: {'font-weight':'bold'},
        html: normalizeCSS + ' ' + message
    });

    popup.append(text);

    $('body').append(popup);

    $('div[style *= "border-radius: 15px 50px"]').fadeIn(1000).delay(5000).fadeOut(100, function () {
        popup.remove();
        bgWrap.remove()
    });
};
/*----------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------*/

//Invokes functions to add buttons to pages

window._wfx_settings.init_page = function (name, settings) {

    // Validate button addition.

    if (settings.validate) {
        window._wfx_settings.add_button(name, "Validate", settings.button_bar, settings.validate);
    }

    //Report Status button addition.

    window._wfx_settings.add_button_report_status(name, window.tooltip1_url, settings.button_bar_one);

    //Schedule Status button addition.

    window._wfx_settings.add_button_schedule_status(name, window.tooltip2_url, settings.button_bar_two);

    //Scope Status button addition.

    window._wfx_settings.add_button_scope_status(name, window.tooltip3_url, settings.button_bar_three);

    //Cost & Effect Status button addition.

    window._wfx_settings.add_button_ce_status(name, window.tooltip4_url, settings.button_bar_four);

    // Update self help widget if required.
    if (settings.self_help && (!window._wfx_settings.equals(settings.self_help.tags, window._wfx_widget.tags) || !window._wfx_settings.equals(settings.self_help.color, window._wfx_widget.color))) {
        window._wfx_widget.tags = settings.self_help.tags;
        window._wfx_widget.filter_by_tag = settings.self_help.tags;
        window._wfx_widget.color = settings.self_help.color;
        window._wfx_refresh();
    }
};

/*----------------------------------------------------------------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------------------------------------------------------------*/
// Page specific settings
window._wfx_settings.apply_page_settings = function () {
    var self_help_applied;
    $.each(window._wfx_settings['page_settings'], function (name, settings) {
        if (window.location.hash.indexOf(settings.hash) != -1) {
            window._wfx_settings.init_page(name, settings);

            if (settings.self_help) {
                self_help_applied = true;
            }
        }
    });
    if (!self_help_applied) {
        window._wfx_settings.init_page('default', window._wfx_settings['default_page_settings']);
    }

    // Relook for buttons periodically as PPM is deleting buttons at times.
    window.setTimeout(function () {
        window._wfx_settings.apply_page_settings();
    }, 1000);
};
window._wfx_settings.apply_page_settings();


// Status report page.

window._wfx_settings['page_settings']['status_report_page'] = {
    "hash": "projectCreate.subObjList.cop_prj_statusrpt"
    , "self_help": {
        "tags": "24508e10-42bd-11e6-8bdf-448a5b5dd1ba"
        , "color": "#4c4b4b"
    }
};


// Dashboard page
window._wfx_settings['page_settings']['dashboard_page'] = {
    "hash": "action:npt.myDashboards", // Status report page.
    "self_help": {
        "tags": "38f88460-42ba-11e6-969a-448a5b5dd5b8"
    }
};
/*----------------------------------------------------------------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------------------------------------------------------------*/
//
// Status report flow.
//

//Kill flow on hash change::

window.bool_port = [0, 0, 0,0,0];
window.onhashchange = function () {
    console.log(window.bool_port);
    if ($.inArray(true, [
            (window.location.hash.startsWith('#action:npt.overview') && (window.bool_port[0] != 1))

            
            , (window.location.hash.startsWith('#action:mainnav.work&classCode=project') && (window.bool_port[1] != 1))

            
            , (window.location.hash.startsWith('#action:projmgr.projectProperties&id') && (window.bool_port[2] != 1)),

            (window.location.hash.startsWith('#action:projmgr.projectProperties&odf_view=projectCreate.subObjList.cop_prj_statusrpt&id') && (window.bool_port[3] != 1)),

            (window.location.hash.startsWith('#action:odf.subObjectProperties&odf_code=cop_prj_statusrpt') && (window.bool_port[4] != 1))]) == -1) {

        window._wfx_close_live && window._wfx_close_live();

        console.log("Exit");
        window.bool_port = [0, 0, 0, 0, 0];
    }

};

// Handling of Status report workflow to launch from the middle.
window._wfx_settings['f863e870-42c0-11e6-8bdf-448a5b5dd1ba'] = function (event) {
    var potential_step;
    
    window.bool_port[0] = 1;

    //This section is for restarting the walkthrough relative to current location.	
    if (window.location.hash.startsWith("#action:mainnav.work&classCode=project")) {
        
        potential_step = 2;
        
        window.bool_port[1] = 1;
        
    }if (window.location.hash.startsWith("#action:projmgr.projectProperties&id")) {
       
        potential_step = 3;
        
         window.bool_port[2] = 1;
    }
    if (window.location.hash.startsWith("#action:projmgr.projectProperties&odf_view=projectCreate.subObjList.cop_prj_statusrpt&id")) {
        
        potential_step = 5;
        
        window.bool_port[3] = 1;
    }
    if (window.location.hash.startsWith("#action:odf.subObjectProperties&odf_code=cop_prj_statusrpt")) {
        
        potential_step = 6;
        
        window.bool_port[4] = 1;
    }
//    if (window.location.hash.startsWith("#action:odf.cop_prj_statusrptProperties&parent_odf_view=projectCreate.subObjList.cop_prj_statusrpt")) {
//        //window.bool_port[4]++;
//        potential_step = 6;
//    }

    if (potential_step && event.step < potential_step) {
        return {
            "position": potential_step
        };
    }
};

// Resources!!!
//PDF
window._wfx_settings['976d9890-55c1-11e6-9ece-448a5b5dd1ba'] = function (event) {
    var potential_step;

    //Tied to landing page URI 
    if (document.documentURI.startsWith('http://ppmcontent.excers.com/')) {
        window._wfx_settings.show_resource('<embed src="' + window.pdf_url + '" width="800" height="600" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">', 'red', '800px', '600px');
    }
};

//Video
window._wfx_settings['fb9bf450-55cc-11e6-86b3-448a5b5dd5b8'] = function (event) {
    var potential_step;

    //Tied to landing page URI
    if (document.documentURI.startsWith('http://ppmcontent.excers.com/')) {
        window._wfx_settings.show_resource('<iframe width="800" height="400" src="' + window.video_url + '"></iframe>', 'red', '800px', '400px');
    }
};

//Validate 1 button click action
var status_report_validate = function () {

    var str = document.querySelector('[maxlength="80"]').value;
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    var res = date_regex.test(str.substring(14)) && str.includes('Week Ending');
    var valtip_one = $("<warn1/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Enter Report Name in Correct Format: "Week Ending - MM/DD/YYYY"</msg>'
    }).append('<style>\r\nwarn1.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn1.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn1:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_two = $("<warn2/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Schedule status is required.</msg>'
    }).append('<style>\r\nwarn2.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn2.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn2:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_three = $("<warn3/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Variance Explanation is required when status is not On-Track.</msg>'
    }).append('<style>\r\nwarn3.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn3.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn3:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_four = $("<warn4/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Scope Status is Required.</msg>'
    }).append('<style>\r\nwarn4.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn4.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn4:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_five = $("<warn5/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Variance Explanation is required when status is not On-Track.</msg>'
    }).append('<style>\r\nwarn5.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn5.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn5:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_six = $("<warn6/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Cost & Effort Status is Required.</msg>'
    }).append('<style>\r\nwarn6.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn6.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn6:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var valtip_seven = $("<warn7/>", {
        'class': 'tooltips'
        , 'html': '&nbsp;&nbsp;&nbsp;&#9888<msg>Variance Explanation is required when status is not On-Track.</msg>'
    }).append('<style>\r\nwarn7.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\nwarn7.tooltips msg {\r\n  position: absolute;\r\n width: 235px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n border: 2px solid #ff0000;\r\n}\r\nwarn7:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 100%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');

    var repname = $('[maxlength="80"]');
    var schedule_status = $('[name="cop_schedule_status"]');
    var schedule_exp = $('[name="cop_schedule_exp"]');
    var scope_status = $('[name="cop_scope_status"]');
    var scope_exp = $('[name="cop_scope_exp"]');
    var costeffort_status = $('[name="cop_cost_eft_status"]');
    var costeffort_exp = $('[name="cop_effort_exp"]');


    if (res == false) {
        $('tick1').remove();
        if (!($('warn1').length)) {
            repname = repname.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            repname = repname.after(valtip_one);
        }

    } else {
        $('warn1').remove();
        repname = repname.removeClass("animation");
        if (!($('tick1').length)) {
            //repname = repname.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            repname.after('<tick1><font color="blue">&nbsp;&nbsp;&nbsp;&#10004<font></tick1>');
        }

    }


    if ((document.querySelector('[name="cop_schedule_status"]').selectedIndex == 0)) {
        $('tick2').remove();
        if (!($('warn2').length)) {
            schedule_status = schedule_status.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            schedule_status = schedule_status.after(valtip_two);
        }
    } else {
        $('warn2').remove();
        schedule_status = schedule_status.removeClass("animation");
        if (!($('tick2').length)) {
            //schedule_status = schedule_status.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            schedule_status.after('<tick2><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick2>');
        }
    }

    if ((document.querySelector('[name="cop_schedule_status"]').selectedIndex != 1) && document.querySelector('[name="cop_schedule_exp"]').value.length == 0) {
        $('tick3').remove();
        if (!($('warn3').length)) {
            schedule_exp = schedule_exp.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            schedule_exp = schedule_exp.after(valtip_three);
        }
    } else {
        $('warn3').remove();
        schedule_exp = schedule_exp.removeClass("animation");
        if (!($('tick3').length)) {
            //schedule_exp = schedule_exp.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            schedule_exp.after('<tick3><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick3>');
        }
    }


    if ((document.querySelector('[name="cop_scope_status"]').selectedIndex == 0)) {
        $('tick4').remove();
        if (!($('warn4').length)) {
            scope_status = scope_status.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            scope_status = scope_status.after(valtip_four);
        }

    } else {
        $('warn4').remove();
        scope_status = scope_status.removeClass("animation");
        if (!($('tick4').length)) {
            //scope_status = scope_status.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            scope_status.after('<tick4><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick4>');
        }
    }


    if ((document.querySelector('[name="cop_scope_status"]').selectedIndex != 1) && document.querySelector('[name="cop_scope_exp"]').value.length == 0) {
        $('tick5').remove();
        if (!($('warn5').length)) {
            scope_exp = scope_exp.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            scope_exp = scope_exp.after(valtip_five);
        }
    } else {
        $('warn5').remove();
        scope_exp = scope_exp.removeClass("animation");
        if (!($('tick5').length)) {
            //scope_exp = scope_exp.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            scope_exp.after('<tick5><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick5>');
        }
    }

    if ((document.querySelector('[name="cop_cost_eft_status"]').selectedIndex == 0)) {
        $('tick6').remove();
        if (!($('warn6').length)) {
            costeffort_status = costeffort_status.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            costeffort_status = costeffort_status.after(valtip_six);
        }

    } else {
        $('warn6').remove();
        costeffort_status = costeffort_status.removeClass("animation");
        if (!($('tick6').length)) {
            //costeffort_status = costeffort_status.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            costeffort_status.after('<tick6><font color="blue">&nbsp;&nbsp;&nbsp;&#10004<font></tick6>');
        }
    }


    if ((document.querySelector('[name="cop_cost_eft_status"]').selectedIndex != 1) && document.querySelector('[name="cop_effort_exp"]').value.length == 0) {
        $('tick7').remove();
        if (!($('warn7').length)) {
            costeffort_exp = costeffort_exp.addClass('animation').append('<style>\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            costeffort_exp = costeffort_exp.after(valtip_seven);
        }

    } else {
        $('warn7').remove();
        costeffort_exp = costeffort_exp.removeClass("animation");
        if (!($('tick7').length)) {
            //costeffort_exp = costeffort_exp.addClass('animation1').append('<style>\r\n.animation1{\r\n  animation: 1s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px blue;}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}<\/style>');
            costeffort_exp.after('<tick7><font color="blue">&nbsp;&nbsp;&nbsp;&#10004</font></tick7>');
        }
    }

}


/*----------------------------------------------------------------------------------------------------------------------------------*/
//Controlling where the buttons appear, filtered by url hash.

// Validate one button for New status report.
window._wfx_settings['page_settings']['create_status_report'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar": "#ppm_workspace_bb .ppm_button_bar,form .ppm_button_bar"
    , "validate": status_report_validate
};


// Validate two button for Existing status report.
window._wfx_settings['page_settings']['update_status_report'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar": "#ppm_workspace_bb .ppm_button_bar,form .ppm_button_bar"
    , "validate": status_report_validate
};

// Report Status button for New Status Report.
window._wfx_settings['page_settings']['report_status_one'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar_one": "[title = 'Status Report']"
};

// Report Status button for Existing Status Report.
window._wfx_settings['page_settings']['report_status_two'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar_one": "[title = 'Status Report']"
};


// Schedule Status button for New Status Report.
window._wfx_settings['page_settings']['schedule_status_one'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar_two": "[title = 'Schedule']"

};

// Schedule Status button for Existing Status Report.
window._wfx_settings['page_settings']['schedule_status_two'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar_two": "[title = 'Schedule']"

};


// Scope Status button for New Status Report.
window._wfx_settings['page_settings']['scope_status_one'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar_three": "[title = 'Scope']"

};


// Scope Status button for Existing Status Report.
window._wfx_settings['page_settings']['scope_status_two'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar_three": "[title = 'Scope']"

};


// Cost & Effort Status button for New Status Report.
window._wfx_settings['page_settings']['cost_and_effort_status_one'] = {
    "hash": "#action:odf.subObjectProperties"
    , "button_bar_four": "[title = 'Cost and Effort']"

};

// Cost & Effort Status button for Existing Status Report.
window._wfx_settings['page_settings']['cost_and_effort_status_two'] = {
    "hash": "#action:odf.cop_prj_statusrptProperties"
    , "button_bar_four": "[title = 'Cost and Effort']"

};




/*----------------------------------------------------------------------------------------------------------------------------------*/
//Additional Comments...


/*----------------------------------------------------------------------------------------------------------------------------------*/
//END//
/*----------------------------------------------------------------------------------------------------------------------------------*/