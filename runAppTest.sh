#!/bin/bash

rm outputDump.txt
rm OutputValidate.txt
galen test tests/AppPageDump.test.js -Dwebdriver.chrome.driver=/Users/navyab/Downloads/chromedriver --htmlreport=reports/>outputDump.txt

galen test tests/AppPageValidate.test.js -Dwebdriver.chrome.driver=/Users/navyab/Downloads/chromedriver --htmlreport=reports/>outputValidate.txt
