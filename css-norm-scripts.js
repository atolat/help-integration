//Strong
b
, strong {
    font - weight: inherit;
}


b
, strong {
    font - weight: bolder;
}



dfn {
    font - style: italic;
}

//Headers

h1 {
	    display: block;
	    font-size: 2em;
	    -webkit-margin-before: 0.67__qem;
	    -webkit-margin-after: 0.67em;
	    -webkit-margin-start: 0;
	    -webkit-margin-end: 0;
	    font-weight: bold;
	}

strong, b {
    font-weight: bold;
	}

h2 {
	    display: block;
	    font-size: 1.5em;
	    -webkit-margin-before: 0.83__qem;
	    -webkit-margin-after: 0.83em;
	    -webkit-margin-start: 0;
	    -webkit-margin-end: 0;
	    font-weight: bold;
	}
	
	h3 {
	    display: block;
	    font-size: 1.17em;
	    -webkit-margin-before: 1__qem;
	    -webkit-margin-after: 1em;
	    -webkit-margin-start: 0;
	    -webkit-margin-end: 0;
	    font-weight: bold;
	}
	
	h4 {
	    display: block;
	    -webkit-margin-before: 1.33__qem;
	    -webkit-margin-after: 1.33em;
	    -webkit-margin-start: 0;
	    -webkit-margin-end: 0;
	    font-weight: bold;
	}
	
	h5 {
	    display: block;
	    font-size: .83em;
	    -webkit-margin-before: 1.67__qem;
	    -webkit-margin-after: 1.67em;
	    -webkit-margin-start: 0;
	    -webkit-margin-end: 0;
	    font-weight: bold;
	}
	
	h6 {
	    display: block;
	    font-size: .67em;
	    -webkit-margin-before: 2.33__qem;
	    -webkit-margin-after: 2.33em;
	    -webkit-margin-start: 0;
	    -webkit-margin-end: 0;
	    font-weight: bold;
	}


//Lists
ul { 
   list-style-type: disc; 
   list-style-position: inside; 
}
ol { 
   list-style-type: decimal; 
   list-style-position: inside; 
}
ul ul, ol ul { 
   list-style-type: circle; 
   list-style-position: inside; 
   margin-left: 15px; 
}
ol ol, ul ol { 
   list-style-type: lower-latin; 
   list-style-position: inside; 
   margin-left: 15px; 
}

//Tables
table {
	    display: table;
	    border-collapse: separate;
	    border-spacing: 2px;
	    border-color: gray;
	}
	
	thead {
	    display: table-header-group;
	    vertical-align: middle;
	    border-color: inherit;
	}
	
	tbody {
	    display: table-row-group;
 vertical-align: middle;
	    border-color: inherit;
	}
	
	tfoot {
	    display: table-footer-group;
	    vertical-align: middle;
	    border-color: inherit;
	}
	
	/* for tables without table section elements (can happen with XHTML or dynamically created tables) */
	table > tr {
	    vertical-align: middle;
	}
	
	col {
	    display: table-column;
}
	
	colgroup {
	    display: table-column-group;
	}
	
	tr {
	    display: table-row;
	    vertical-align: inherit;
	    border-color: inherit;
	}
	
	td, th {
	    display: table-cell;
	    vertical-align: inherit;
	}
	
th {
	    font-weight: bold;
	}
	
	caption {
	    display: table-caption;
	    text-align: -webkit-center;
	}

//Button
button {
	    -webkit-appearance: button;
}