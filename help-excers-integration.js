//
// Base Whatfix configuration.
//

// Whatfix setting change to let the tip come over menu.
window._wfx_settings.z_refresh=true;

// Generic self help widget.
window._wfx_widget={"position":"r", "label":"Excers Help", "mode":"live_here", "ent_id":"d347a8c0-3d47-11e6-8bdf-448a5b5dd1ba"};

//Normalize.css!!
var normalizeCSS = "\/*! normalize.css v4.1.1 | MIT License | github.com\/necolas\/normalize.css *\/\r\n\r\n\/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\r\n *\/\r\n\r\nhtml {\r\n  font-family: sans-serif; \/* 1 *\/\r\n  -ms-text-size-adjust: 100%; \/* 2 *\/\r\n  -webkit-text-size-adjust: 100%; \/* 2 *\/\r\n}\r\n\r\n\/**\r\n * Remove the margin in all browsers (opinionated).\r\n *\/\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n\/* HTML5 display definitions\r\n   ========================================================================== *\/\r\n\r\n\/**\r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in Edge, IE, and Firefox.\r\n * 2. Add the correct display in IE.\r\n *\/\r\n\r\narticle,\r\naside,\r\ndetails, \/* 1 *\/\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nmain, \/* 2 *\/\r\nmenu,\r\nnav,\r\nsection,\r\nsummary { \/* 1 *\/\r\n  display: block;\r\n}\r\n\r\n\/**\r\n * Add the correct display in IE 9-.\r\n *\/\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  display: inline-block;\r\n}\r\n\r\n\/**\r\n * Add the correct display in iOS 4-7.\r\n *\/\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n\/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n *\/\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n\/**\r\n * Add the correct display in IE 10-.\r\n * 1. Add the correct display in IE.\r\n *\/\r\n\r\ntemplate, \/* 1 *\/\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n\/* Links\r\n   ========================================================================== *\/\r\n\r\n\/**\r\n * 1. Remove the gray background on active links in IE 10.\r\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n *\/\r\n\r\na {\r\n  background-color: transparent; \/* 1 *\/\r\n  -webkit-text-decoration-skip: objects; \/* 2 *\/\r\n}\r\n\r\n\/**\r\n * Remove the outline on focused links when they are also active or hovered\r\n * in all browsers (opinionated).\r\n *\/\r\n\r\na:active,\r\na:hover {\r\n  outline-width: 0;\r\n}\r\n\r\n\/* Text-level semantics\r\n   ========================================================================== *\/\r\n\r\n\/**\r\n * 1. Remove the bottom border in Firefox 39-.\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n *\/\r\n\r\nabbr[title] {\r\n  border-bottom: none; \/* 1 *\/\r\n  text-decoration: underline; \/* 2 *\/\r\n  text-decoration: underline dotted; \/* 2 *\/\r\n}\r\n\r\n\/**\r\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n *\/\r\n\r\nb,\r\nstrong {\r\n  font-weight: inherit;\r\n}\r\n\r\n\/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n *\/\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n\/**\r\n * Add the correct font style in Android 4.3-.\r\n *\/\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\n\/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n *\/\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n\/**\r\n * Add the correct background and color in IE 9-.\r\n *\/\r\n\r\nmark {\r\n  background-color: #ff0;\r\n  color: #000;\r\n}\r\n\r\n\/**\r\n * Add the correct font size in all browsers.\r\n *\/\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n\/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n *\/\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n\/* Embedded content\r\n   ========================================================================== *\/\r\n\r\n\/**\r\n * Remove the border on images inside links in IE 10-.\r\n *\/\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n\/**\r\n * Hide the overflow in IE.\r\n *\/\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\n\/* Grouping content\r\n   ========================================================================== *\/\r\n\r\n\/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n *\/\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace; \/* 1 *\/\r\n  font-size: 1em; \/* 2 *\/\r\n}\r\n\r\n\/**\r\n * Add the correct margin in IE 8.\r\n *\/\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\n\/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n *\/\r\n\r\nhr {\r\n  box-sizing: content-box; \/* 1 *\/\r\n  height: 0; \/* 1 *\/\r\n  overflow: visible; \/* 2 *\/\r\n}\r\n\r\n\/* Forms\r\n   ========================================================================== *\/\r\n\r\n\/**\r\n * 1. Change font properties to `inherit` in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari.\r\n *\/\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font: inherit; \/* 1 *\/\r\n  margin: 0; \/* 2 *\/\r\n}\r\n\r\n\/**\r\n * Restore the font weight unset by the previous rule.\r\n *\/\r\n\r\noptgroup {\r\n  font-weight: bold;\r\n}\r\n\r\n\/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n *\/\r\n\r\nbutton,\r\ninput { \/* 1 *\/\r\n  overflow: visible;\r\n}\r\n\r\n\/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n *\/\r\n\r\nbutton,\r\nselect { \/* 1 *\/\r\n  text-transform: none;\r\n}\r\n\r\n\/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *    controls in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n *\/\r\n\r\nbutton,\r\nhtml [type=\"button\"], \/* 1 *\/\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button; \/* 2 *\/\r\n}\r\n\r\n\/**\r\n * Remove the inner border and padding in Firefox.\r\n *\/\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n\/**\r\n * Restore the focus styles unset by the previous rule.\r\n *\/\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n\/**\r\n * Change the border, margin, and padding in all browsers (opinionated).\r\n *\/\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n\/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n *\/\r\n\r\nlegend {\r\n  box-sizing: border-box; \/* 1 *\/\r\n  color: inherit; \/* 2 *\/\r\n  display: table; \/* 1 *\/\r\n  max-width: 100%; \/* 1 *\/\r\n  padding: 0; \/* 3 *\/\r\n  white-space: normal; \/* 1 *\/\r\n}\r\n\r\n\/**\r\n * Remove the default vertical scrollbar in IE.\r\n *\/\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n\/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n *\/\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; \/* 1 *\/\r\n  padding: 0; \/* 2 *\/\r\n}\r\n\r\n\/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n *\/\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n\/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n *\/\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; \/* 1 *\/\r\n  outline-offset: -2px; \/* 2 *\/\r\n}\r\n\r\n\/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\r\n *\/\r\n\r\n[type=\"search\"]::-webkit-search-cancel-button,\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n\/**\r\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\r\n *\/\r\n\r\n::-webkit-input-placeholder {\r\n  color: inherit;\r\n  opacity: 0.54;\r\n}\r\n\r\n\/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n *\/\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; \/* 1 *\/\r\n  font: inherit; \/* 2 *\/\r\n}";


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

//High light features for Demo. This message box will 
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
        css: { 'line-height' : '1.5em', 'clear': 'both', 'color' : color, 'font': 'Calibri'},
        strong: {'font-weight':'bold'},
        html: message
    });
    
	popup.append(text);
    
	$('body').append(bgWrap);
    $('body').append(popup);
	
    $('div[style *= "border-radius: 50px 50px 5px"]').fadeIn(1000).delay(5000).fadeOut(100,function(){popup.remove(); bgWrap.remove()});
};



//Shoutout--Landing Page!!
window._wfx_settings.shoutout = function(message, color) {
    
  	var bgWrap = $('<div/>',
    {
        css: { 'display' : 'block', 'position' : 'fixed', 'width' : '100%', 'height' : '100%', 'left' : '0', 'top'  : '0', 'background': '#000', 'opacity': '0.7', 'filter': 'alpha(opacity=70)', 'z-index':'100000'},
    });
    
    var popup = $('<div/>',
    {
        css: { 'display' : 'block', 'position' : 'relative', 'width' : '300px', 'background': '#ffcc00', 'padding': '50px 50px 50px 20px', 'border-radius': '50px 50px 5px 50px', 'z-index':'100001', 'margin':'10% auto'}
    });
    var text = normalizeCSS+' '+message; 
    
	popup.append(text);
    
	$('body').append(bgWrap);
    $('body').append(popup);
	
    $('div[style *= "border-radius: 50px 50px 5px"]').fadeIn(1000).delay(5000).fadeOut(100,function(){popup.remove(); bgWrap.remove()});
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
//Shoutout-- Tied to page URI
    if(document.documentURI == 'http://ppmcontent.excers.com/niku/nu#action:npt.overview' && event.step!=1){
        window._wfx_settings.shoutout("<h1>Test</h1>",'red');
    }
    
    
    
    
////Highlight Mouse over feature
	
	if (event.step==1) 
		{window._wfx_settings.show_feature('<strong>Watch how Help </strong>remembers where you were even if you move your mouse away.', 'Black');
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
