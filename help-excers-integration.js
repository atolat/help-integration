//
// Base Whatfix configuration.
//

// Whatfix setting change to let the tip come over menu.
window._wfx_settings.z_refresh=true;

// Generic self help widget.
window._wfx_widget={"position":"r", "label":"Excers Help", "mode":"live_here", "ent_id":"d347a8c0-3d47-11e6-8bdf-448a5b5dd1ba"};


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
        css: { 'line-height' : '1.5em', 'clear': 'both', 'color' : color},
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

//High light features
window._wfx_settings.show_feature = function(message, color) {
  	var bgWrap = $('<div/>',
    {
        css: { 'display' : 'block', 'position' : 'fixed', 'width' : '100%', 'height' : '100%', 'left' : '0', 'top'  : '0', 'background': '#000', 'opacity': '0', 'filter': 'alpha(opacity=70)', 'z-index':'100000'},
    });
    
    var popup = $('<div/>',
    {
        css: { 'display' : 'block', 'position' : 'relative', 'width' : '500px', 'background': '#ffcc00', 'padding': '50px 50px 50px 20px', 'border-radius': '15px 50px', 'z-index':'100001', 'margin':'10% auto'}
    });
    var text = $('<label/>',
    {
        css: { 'line-height' : '1.5em', 'clear': 'both', 'color' : color, 'font': 'Calibri'},
        html: message
    });
    var close = $('<button/>',
    {
        class: 'ppm_button button',
        css: { 'float' : 'middle', 'margin' : '10px'},
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
    
/*---------DEMO----------*/    
    
////Highlight Mouse over feature -- DEMO -- UNCOMMENT
//	if (event.step==1) {window._wfx_settings.show_feature('Even if you loose track of mouse which is a common issue in this application, <br><u>Help remembers where you were and what you were trying to do.</u>', 'Black');}
////Highlight Mouse over feature
//	if (event.step==5) {window._wfx_settings.show_feature('Alleviate user pain point "I have to start again????!!!". <br> The Walk through starts based on where your relative position in the application', 'Black');}
    
/*---------DEMO----------*/
    
    
	if(window.location.hash.startsWith("#action:projmgr.projectList&")) {
		potential_step = 2;
	} else if(window.location.hash.startsWith("#action:projmgr.projectProperties&id")) {
		potential_step = 3;
	} else if(window.location.hash.includes("cop_prj_statusrpt")) {
		potential_step = 5;
	}
	if (potential_step && event.step < potential_step) {
		return {"position" : potential_step};
	}
};

// Validate button for New status report.
window._wfx_settings['page_settings']['create_status_report'] = {
	"hash" : "#action:odf.subObjectProperties&odf_code=cop_prj_statusrpt",
	"button_bar" : "#ppm_workspace_bb .ppm_button_bar,form .ppm_button_bar",
	"validate" : function() {
		var message;
		var validation=false;
		if((document.querySelector('[name="cop_schedule_status"]').selectedIndex == 2 || document.querySelector('[name="cop_schedule_status"]').selectedIndex == 3) && document.querySelector('[name="cop_schedule_exp"]').value.length == 0) {
			validation=true;
			message=message+'Variance Explanation is required when Status is not On Track <br>';
		}
		if((document.querySelector('[name="cop_scope_status"]').selectedIndex == 2 || document.querySelector('[name="cop_scope_status"]').selectedIndex == 3) && document.querySelector('[name="cop_scope_exp"]').value.length == 0){
			validation=true;
			message=message+'scope Explanation is required when Status is not On Track <br>';
		}
		if((document.querySelector('[name="cop_cost_eft_status"]').selectedIndex == 2 || document.querySelector('[name="cop_cost_eft_status"]').selectedIndex == 3) && document.querySelector('[name="cop_effort_exp"]').value.length == 0){
			validation=true;
			message=message+'Cost Effort Explanation is required when Status is not On Track <br>';
		}
		if (validation){
			window._wfx_settings.show_message(message, 'red');
		}
	}
};

// Validate button for New status report.
window._wfx_settings['page_settings']['update_status_report'] = {
	"hash" : "#action:odf.cop_prj_statusrptProperties",
	"button_bar" : "#ppm_workspace_bb .ppm_button_bar,form .ppm_button_bar",
	"validate" : function() {
		var message="";
		var validation=false;
		if((document.querySelector('[name="cop_schedule_status"]').selectedIndex == 2 || document.querySelector('[name="cop_schedule_status"]').selectedIndex == 3) && document.querySelector('[name="cop_schedule_exp"]').value.length == 0) {
			validation=true;
			message=message+'Variance Explanation is required when Status is not On Track <br>';
		}
		if((document.querySelector('[name="cop_scope_status"]').selectedIndex == 2 || document.querySelector('[name="cop_scope_status"]').selectedIndex == 3) && document.querySelector('[name="cop_scope_exp"]').value.length == 0){
			validation=true;
			message=message+'Change Explanation is required when Status is not On Track <br>';
		}
		if((document.querySelector('[name="cop_cost_eft_status"]').selectedIndex == 2 || document.querySelector('[name="cop_cost_eft_status"]').selectedIndex == 3) && document.querySelector('[name="cop_effort_exp"]').value.length == 0){
			validation=true;
			message=message+'Cost Effort Explanation is required when Status is not On Track <br>';
		}
		if (validation){
			window._wfx_settings.show_message(message, 'red');
		}
	}
};
