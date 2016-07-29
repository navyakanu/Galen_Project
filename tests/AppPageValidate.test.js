test("Test to login to home page", function () {
    // Code to open the pricefrontend
	 var driver = createDriver("http://www.google.com",
                            "1280x800","chrome");
	
checkLayout({
    driver: driver,
    spec: "specs/AppPageValidate.gspec",
    
   screenshot: "screenshots/page.png"
});	








});
