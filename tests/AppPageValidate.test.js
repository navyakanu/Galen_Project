

beforeTest(function(){

	 var driver = createDriver("http://www.gmail.com",
                            "1280x800","chrome");
	 session.put("driver",driver);

});



test("Test to login to home page", function () {
    // Code to open the pricefrontend


	var driver =session.get("driver");
	

	

var file=takeScreenshot(driver)
//var path =file.getAbsolutePath(file)


checkLayout({
    driver: driver,
    spec: "specs/AppPageValidate.gspec",
   	screenshot:"screenshots/page.png"
});	



});





afterTest(function(){

	var driver =session.get("driver");
	driver.quit();

});
