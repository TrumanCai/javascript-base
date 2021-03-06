require.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        platform: '../platform'
    }
});

// Start the main app logic.
require(['app/sub', 'platform/basicLang'], 
    function (sub, basicLang) {
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
        basicLang()
        basicLang.print();
        $.version;
    }
);
