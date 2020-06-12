// Global
app.global = {
    init: function(){ 
        console.log("load global functions");
        app.global.loadHeader();
    },
    loadHeader: function(){ 
        console.log("loadHeader()");
    }
}

// Run the global
app.global.init();