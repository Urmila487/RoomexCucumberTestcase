import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage1 from '../pageobjects/login.page';

Given(/^I open Login page \"([^\"]*)\"$/, async function (appurl: string) {
    await browser.url(appurl)
    await browser.maximizeWindow()
});

When(/^I click on Login button$/, async function () {
    await LoginPage1.clickOnSubmitBtn()
});

Then(/^I validate the Email Error message$/, async function () {
    expect(LoginPage1.getEmailError()).toBeDisplayed()   //Email and Password required Error 
    expect(LoginPage1.getEmailError()).toHaveTextContaining('Email is required')
});

Then(/^I validate the Password Error message$/, async function () {
    expect(LoginPage1.getPasswordError()).toBeDisplayed()
    expect(LoginPage1.getPasswordError()).toHaveTextContaining('Password is required')
});

