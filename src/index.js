//
// This will be the main entry point before anything actually happens. systemjs
// has been loaded but we might would like to configure some stuff before we kick
// off the application. In this case we want to add a catch-all path which used
// to be in the config.js file from yo:aurelia.
//
!( "*" in System.paths ) && ( System.paths[ "*" ] = "application/*" );

// Now kick off the entire application
System.import( "aurelia-bootstrapper" );
