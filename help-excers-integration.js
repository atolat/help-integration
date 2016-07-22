//
// Base Whatfix configuration.
//

// Whatfix setting change to let the tip come over menu.
window._wfx_settings.z_refresh=true;

// Generic self help widget.
window._wfx_widget={"position":"r", "label":"Excers Help", "mode":"live_here", "ent_id":"d347a8c0-3d47-11e6-8bdf-448a5b5dd1ba"};

//Normalize.css!!
var normalizeCSS = "<style>b\r\n, strong {\r\n    font - weight: inherit;\r\n}\r\n\r\n\r\nb\r\n, strong {\r\n    font - weight: bolder;\r\n}\r\n\r\n\r\n\r\ndfn {\r\n    font - style: italic;\r\n}\r\n\r\n\r\n\r\nh1 {\r\n\t    display: block;\r\n\t    font-size: 2em;\r\n\t    -webkit-margin-before: 0.67__qem;\r\n\t    -webkit-margin-after: 0.67em;\r\n\t    -webkit-margin-start: 0;\r\n\t    -webkit-margin-end: 0;\r\n\t    font-weight: bold;\r\n\t}\r\n\r\nstrong, b {\r\n    font-weight: bold;\r\n\t}\r\n\r\n\r\n\/\/Lists\r\nul { \r\n   list-style-type: disc; \r\n   list-style-position: inside; \r\n}\r\nol { \r\n   list-style-type: decimal; \r\n   list-style-position: inside; \r\n}\r\nul ul, ol ul { \r\n   list-style-type: circle; \r\n   list-style-position: inside; \r\n   margin-left: 15px; \r\n}\r\nol ol, ul ol { \r\n   list-style-type: lower-latin; \r\n   list-style-position: inside; \r\n   margin-left: 15px; \r\n}\r\n\r\n\/\/Tables\r\ntable {\r\n\t    display: table;\r\n\t    border-collapse: separate;\r\n\t    border-spacing: 2px;\r\n\t    border-color: gray;\r\n\t}\r\n\t\r\n\tthead {\r\n\t    display: table-header-group;\r\n\t    vertical-align: middle;\r\n\t    border-color: inherit;\r\n\t}\r\n\t\r\n\ttbody {\r\n\t    display: table-row-group;\r\n vertical-align: middle;\r\n\t    border-color: inherit;\r\n\t}\r\n\t\r\n\ttfoot {\r\n\t    display: table-footer-group;\r\n\t    vertical-align: middle;\r\n\t    border-color: inherit;\r\n\t}\r\n\t\r\n\t\/* for tables without table section elements (can happen with XHTML or dynamically created tables) *\/\r\n\ttable > tr {\r\n\t    vertical-align: middle;\r\n\t}\r\n\t\r\n\tcol {\r\n\t    display: table-column;\r\n}\r\n\t\r\n\tcolgroup {\r\n\t    display: table-column-group;\r\n\t}\r\n\t\r\n\ttr {\r\n\t    display: table-row;\r\n\t    vertical-align: inherit;\r\n\t    border-color: inherit;\r\n\t}\r\n\t\r\n\ttd, th {\r\n\t    display: table-cell;\r\n\t    vertical-align: inherit;\r\n\t}\r\n\t\r\nth {\r\n\t    font-weight: bold;\r\n\t}\r\n\t\r\n\tcaption {\r\n\t    display: table-caption;\r\n\t    text-align: -webkit-center;\r\n\t}<\/style>";


//
// Utilities 
//

// Generic branch trigger.
window._wfx_settings.onBeforeShow = function(event) {
	if (window._wfx_settings[event.flow_id]) {
		return window._wfx_settings[event.flow_id](event);
	}
};

// Adding buttons at page level.
window._wfx_settings['page_settings'] = {};

// Default self help settings.
window._wfx_settings['default_page_settings'] = {
	"self_help" : {
	}
};

// "Validate" & "Show Me How" framework
window._wfx_settings.add_button = function(name, button, parentSelector, action) {
	var validate_id = "wfx_" + name + "_validate";
	if(document.getElementById(validate_id)) {
		return;
	}
	var validate = $('<button/>',
	{
	    text: button,
	    class: 'ppm_button button',
	    css: { 'background' : '#ED9126', 'color' : 'white' },
	    click: action,
	    id: validate_id
	});
	$(parentSelector).append(validate);
};

window._wfx_settings.equals = function(one, two) {
	if(!one) {
		if(!two) {
			return true;
		} else {
			return false;
		}
	} else {
		if(!two) {
			return false;
		} else {
			return one == two;
		}
	}
};

window._wfx_settings.init_page = function(name, settings) {
	// Validate button addition.
	if(settings.validate) {
		window._wfx_settings.add_button(name, "Validate", settings.button_bar, settings.validate);
	}

	// Show Me How button addition.
	if(settings.show_me) {
		window._wfx_settings.add_button(name, "Show Me How", settings.button_bar, function () { window._wfx_flow=settings.show_me; window._wfx_live && window._wfx_live(); });
	}

	// Update self help widget if required.
	if(settings.self_help && (!window._wfx_settings.equals(settings.self_help.tags, window._wfx_widget.tags) || !window._wfx_settings.equals(settings.self_help.color, window._wfx_widget.color))) {
		window._wfx_widget.tags = settings.self_help.tags;
		window._wfx_widget.filter_by_tag = settings.self_help.tags;
		window._wfx_widget.color = settings.self_help.color;
		window._wfx_refresh();
	}
};


//For General Messages...
window._wfx_settings.show_message = function(message, color) {
  	var bgWrap = $('<div/>',
    {
        css: { 'display' : 'block', 'position' : 'fixed', 'width' : '100%', 'height' : '100%', 'left' : '0', 'top'  : '0', 'background': '#000', 'opacity': '0.7', 'filter': 'alpha(opacity=70)', 'z-index':'100000'},
    });
    
    var popup = $('<div/>',
    {
        css: { 'display' : 'block', 'position' : 'relative', 'width' : '400px', 'background': '#fff', 'padding': '20px 20px 50px 20px', 'border-radius': '4px', 'z-index':'100001', 'margin':'10% auto'}
    });
    var text = $('<label/>',
    {
        css: { 'color' : color},
        html: message
    });
    var close = $('<button/>',
    {
        class: 'ppm_button button',
        css: { 'float' : 'right', 'margin' : '10px'},
        text: 'Close',
        click: function() {
        	bgWrap.remove();
          popup.remove();
        }
    });
    popup.append(text);
    popup.append(close);
    $('body').append(bgWrap);
    $('body').append(popup);


};

//High light features for Demo.
window._wfx_settings.show_feature = function(message, color) {
    
  	var bgWrap = $('<div/>',
    {
        css: { 'display' : 'block', 'position' : 'fixed', 'width' : '100%', 'height' : '100%', 'left' : '0', 'top'  : '0', 'background': '#000', 'opacity': '0.7', 'filter': 'alpha(opacity=70)', 'z-index':'100000'},
    });
    
    var popup = $('<div/>',
    {
        css: { 'display' : 'block', 'position' : 'absolute', 'bottom' : '0', 'right' : '0', 'width' : '300px', 'background': '#ffcc00', 'padding': '50px 50px 50px 20px', 'border-radius': '50px 50px 5px 50px', 'z-index':'100001', 'margin':'10% auto'}
    });
    var text = $('<label/>',
    {
        //css: { 'line-height' : '1.5em', 'clear': 'both', 'color' : color, 'font': 'Calibri'},
        //strong: {'font-weight':'bold'},
        html: normalizeCSS+' '+message
    });
    
	popup.append(text);
    
	$('body').append(bgWrap);
    $('body').append(popup);
	
    $('div[style *= "border-radius: 50px 50px 5px"]').fadeIn(1000).delay(5000).fadeOut(100,function(){popup.remove(); bgWrap.remove()});
};



//Shoutout!!
window._wfx_settings.shoutout = function(message, color) {
    
  	var bgWrap = $('<div/>',
    {
        css: { 'display' : 'block', 'position' : 'fixed', 'width' : '100%', 'height' : '100%', 'left' : '0', 'top'  : '0', 'background': '#000', 'opacity': '0.7', 'filter': 'alpha(opacity=70)', 'z-index':'100000'},
    });
    
    var popup = $('<div/>',
    {
        css: { 'display' : 'block', 'position' : 'relative', 'width' : '300px', 'background': '#ffcc00', 'padding': '50px 50px 50px 20px', 'border-radius': '15px 50px', 'z-index':'100001', 'margin':'10% auto'}
    });
    var text = $('<label/>',
    {
        //css: { 'line-height' : '1.5em', 'clear': 'both', 'color' : color, 'font': 'Calibri'},
        //strong: {'font-weight':'bold'},
        html: normalizeCSS+' '+message
    });
    
	popup.append(text);
    
	$('body').append(bgWrap);
    $('body').append(popup);
	
    $('div[style *= "border-radius: 15px 50px"]').fadeIn(1000).delay(5000).fadeOut(100,function(){popup.remove(); bgWrap.remove()});
};

// Page specific settings
window._wfx_settings.apply_page_settings = function() {
	var self_help_applied;
	$.each(window._wfx_settings['page_settings'], function(name, settings) {
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
	window.setTimeout(function(){
		window._wfx_settings.apply_page_settings();
	}, 1000);
};
window._wfx_settings.apply_page_settings();


//
// Self Help segmentation based on page location.
//
// Timesheet pages.
window._wfx_settings['page_settings']['timesheet_page'] = {
	"hash" : "timeadmin",
	"self_help" : {
		"tags" : "328c3ae0-42ba-11e6-969a-448a5b5dd5b8",
		"color": "red"
	}
};

// Status report page.
window._wfx_settings['page_settings']['status_report_page'] = {
	"hash" : "projectCreate.subObjList.cop_prj_statusrpt",
	"self_help" : {
		"tags" : "24508e10-42bd-11e6-8bdf-448a5b5dd1ba",
		"color": "blue"
	}
};

// Dashboard page
window._wfx_settings['page_settings']['dashboard_page'] = {
	"hash" : "action:npt.myDashboards", // Status report page.
	"self_help" : {
		"tags" : "38f88460-42ba-11e6-969a-448a5b5dd5b8"
	}
};

//
// Timesheet flow.
//

// Handling of time sheet flow to launch from the middle.
window._wfx_settings['5f95da80-42bc-11e6-969a-448a5b5dd5b8'] = function(event) {
	var potential_step;
	if(window.location.hash.startsWith("#action:timeadmin.timesheetBrowser")) {
		potential_step = 2;
	} else if(window.location.hash.startsWith("#action:timeadmin.editTimesheet")) {
		potential_step = 6;
	}
	if (potential_step && event.step < potential_step) {
		return {"position" : potential_step};
	}
};

// Show Me How button for time sheet.
window._wfx_settings['page_settings']['create_timesheet'] = {
	"hash" : "#action:timeadmin.editTimesheet", // Timesheet page.
	"button_bar" : "form>.ppm_button_bar", // Button bar.
	"show_me" : "7667a890-49b2-11e6-aba8-448a5b5dd5b8" // Flow to trigger
};


//
// Status report flow.
//

// Handling of Status report workflow to launch from the middle.
window._wfx_settings['f863e870-42c0-11e6-8bdf-448a5b5dd1ba'] = function(event) {
	var potential_step;

    //Shoutout-- Tied to landing page URI
    if(document.documentURI == 'http://ppmcontent.excers.com/niku/nu#action:npt.overview' && event.step!=1){
        window._wfx_settings.shoutout("<h1>SHOUTOUT</h1>",'red');
    }
    
    
    
    
////Highlight Mouse over feature
	
	if (event.step==1) 
		{window._wfx_settings.show_feature('<h1>H1 works</h1><br><strong>Strong works</strong>', 'Black');
		}
////Highlight Mouse over feature
	if (event.step==5) {window._wfx_settings.show_feature('<strong>The Walk through starts based on where your relative position in the application. </strong>', 'Black');}
	
//This section is for restarting the walkthrough relative to current location.	
	if(window.location.hash.startsWith			("#action:projmgr.projectList&")) {
		potential_step = 2;
	} else if(window.location.hash.startsWith	("#action:projmgr.projectProperties&id")) {
		potential_step = 3;
	}
	if(window.location.hash.includes			("cop_prj_statusrpt")) {
		potential_step = 5;
	}
	if(window.location.hash.startsWith			("#action:odf.subObjectProperties&odf_code=cop_prj_statusrpt")) {
		potential_step = 6;   
	}
	if(window.location.hash.startsWith			("#action:odf.cop_prj_statusrptProperties&parent_odf_view=projectCreate.subObjList.cop_prj_statusrpt")) {
		potential_step = 6;
	}
	//window.alert(potential_step);
	if (potential_step && event.step < potential_step) {
		return {"position" : potential_step};
	}
};



// Validate button for New status report.
window._wfx_settings['page_settings']['create_status_report'] = {
	"hash" : "#action:odf.subObjectProperties&odf_code=cop_prj_statusrpt",
	"button_bar" : "#ppm_workspace_bb .ppm_button_bar,form .ppm_button_bar",
	"validate" : function() {
		var message="<strong>Data Integrity Test:</strong> <br>";
		var invalid=false;
		if((document.querySelector('[name="cop_schedule_status"]').selectedIndex !=1) && document.querySelector('[name="cop_schedule_exp"]').value.length == 0) {
			invalid=true;
			message=message+'<ol type="1"> <li>Variance Explanation is required when Status is not On Track. </li><br>';
		}
		if((document.querySelector('[name="cop_scope_status"]').selectedIndex !=1) && document.querySelector('[name="cop_scope_exp"]').value.length == 0){
			invalid=true;
			message=message+'<li>Scope Explanation is required when Status is not On Track </li><br>';
		}
		if((document.querySelector('[name="cop_cost_eft_status"]').selectedIndex !=1) && document.querySelector('[name="cop_effort_exp"]').value.length == 0){
			invalid=true;
			message=message+'<li>Cost Effort Explanation is required when Status is not On Track </li></ol><br>';
		}
		if (invalid){
			window._wfx_settings.show_message('<ul>  <li>Coffee</li>  <li>Tea</li>  <li>Milk</li></ul>', 'red');
		}else{
			window._wfx_settings.show_message('<strong>Data Integrity Test: </strong><br> Form conforms to all Applicable business Rules', 'green');
		}
	}
};

// Validate button for New status report.
window._wfx_settings['page_settings']['update_status_report'] = {
	"hash" : "#action:odf.cop_prj_statusrptProperties",
	"button_bar" : "#ppm_workspace_bb .ppm_button_bar,form .ppm_button_bar",
	"validate" : function() {
		var message="<strong>Data Integrity Test:</strong> <br>";
		var invalid=false;
		if((document.querySelector('[name="cop_schedule_status"]').selectedIndex != 1) && document.querySelector('[name="cop_schedule_exp"]').value.length == 0) {
			invalid=true;
			message=message+'<ol type="1"> <li>Variance Explanation is required when Status is not On Track. </li><br>';
		}
		if((document.querySelector('[name="cop_scope_status"]').selectedIndex != 1) && document.querySelector('[name="cop_scope_exp"]').value.length == 0){
			invalid=true;
			message=message+'<li>Scope Explanation is required when Status is not On Track </li><br>';
		}
		if((document.querySelector('[name="cop_cost_eft_status"]').selectedIndex !=1) && document.querySelector('[name="cop_effort_exp"]').value.length == 0){
			invalid=true;
			message=message+'<li>Cost Effort Explanation is required when Status is not On Track </li></ol><br>';
		}
		if (invalid){
			window._wfx_settings.show_message('<html><body><h2>Ordered List with Numbers</h2><ol type="1">  <li>Coffee</li>  <li>Tea</li>  <li>Milk</li></ol></body></html>', 'red');
		}else{
			window._wfx_settings.show_message('<strong>Data Integrity Test:</strong> <br> Form conforms to all Applicable business Rules', 'green');
		}
	}
};
