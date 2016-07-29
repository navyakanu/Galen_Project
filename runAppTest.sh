#!/bin/bash

galen test tests/AppPageDump.test.js -Dwebdriver.chrome.driver=/Users/navyab/Downloads/chromedriver>outputDump.txt

galen test tests/AppPageValidate.test.js -Dwebdriver.chrome.driver=/Users/navyab/Downloads/chromedriver>outputValidate.txt
