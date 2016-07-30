
beforeTest(function(){

     var driver = createDriver("http://www.google.com",
                            "1280x800","chrome");
     session.put("driver",driver);

});






test("Test to login to home page", function () {
    // Code to open the google

    var driver =session.get("driver");
    
	
	dumpPage({
    driver: driver, 
    name: "page", 
    spec: "specs/AppPage.gspec",
    exportPath: "screenshots/", 
    onlyImages: false, 
    excludedObjects: ["header", "footer"]
});	




});




afterTest(function(){

    var driver =session.get("driver");
    driver.quit();

});