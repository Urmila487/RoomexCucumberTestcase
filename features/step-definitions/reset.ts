import { Given, When, Then } from '@cucumber/cucumber';
import ResetPage1 from '../pageobjects/reset.page';

Given(/^I open Reset page (.+)$/, async function (path1: string) {
    await browser.url(path1)
    await browser.maximizeWindow()
});

When(/^I enter Email id (.+)$/,async function (email:string) {
    await ResetPage1.enterEmailid(email)          // Enter Email id
  });

Then(/^I click on Reset Password Page$/, async function () {
    ResetPage1.clickOnSubmitBtn()       //Click Reset Password button
}); 

Then(/^I verify error message$/, async function () {
    expect(ResetPage1.getEmailError()).toBeDisplayed()
    expect(ResetPage1.getEmailError()).toHaveTextContaining('Email address does not exist')
});

