### Test www.google.com in Google Chrome using Galen (Image Comparision)


Steps while executing the project 

1) Clone the repo
2) execute the below command
3) Dump of the pages mentioned in the app url will be saved in screenshots folder
4) Validate test validates the image dumped

galen test GalenSpecExmaple.test -Dwebdriver.chrome.driver=$(PATHOFCHROMEDRIVER)/chromedriver


galen test tests/AppPageDump.test.js -Dwebdriver.chrome.driver=$(PATHOFCHROMEDRIVER)/chromedriver



galen test tests/AppPageValidate.test.js -Dwebdriver.chrome.driver=$(PATHOFCHROMEDRIVER)/chromedriver

