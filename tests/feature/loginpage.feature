Feature: Adactin app login page
Scenario: login with valid credential
Given user navigates to the the adactin login page
When user enters the userName and Password in the password field
And user enter the click button
Then user navigates to the Login page

Scenario Outline: login with multiple data
Given user navigates to the the adactin login page
When user enter the userName "<UserName>" and Password "<Password>" in the password field
And user enter the click button
Then user navigates to the Login page

Examples:
|UserName||Password|
|Trends06208||Trends@06208|
|Trends||Trends@06208|
|Trends06208||Trends@06|
|  ||  |