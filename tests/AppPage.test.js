test("Test to login to home page", function () {
    // Code to open the pricefrontend
	 var driver = createDriver("http://www.google.com",
                            "1280x800","chrome");
	
	dumpPage({
    driver: driver, 
    name: "page", 
    spec: "specs/AppPage.gspec",
    exportPath: "screenshots/", 
    onlyImages: false, 
    excludedObjects: ["header", "footer"]
});	





});
