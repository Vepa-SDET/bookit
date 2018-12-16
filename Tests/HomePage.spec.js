require('../Utilities/CustomLocators.js');
let HomePage= require('../Pages/Home.page.js');
let Base = require('../Utilities/Base.js');
let Data = require('../TestData/data.json');
//DB Connection
var pgp            = require('pg-promise')(/*options*/);
var dbConnection   = require("../TestData/dbConnection.js");
var queries        = require("../TestData/dbQueries.js");
describe('BookIT Home Page test scripts', () => {
    let browserWindows="";
    var db=pgp(dbConnection);
    var array=[]
    beforeAll(() => {
        Base.navigateToHome();
    });

    it('should print out the Title', () => {
        expect(browser.getTitle()).toEqual("cybertek-bnb");
        browser.getTitle().then((t)=>{
            console.log(t);
        });
        
    });

    it('should check Sign in text on the Home Page', () => {
    expect(HomePage.homePageLogo.getText()).toEqual(Data.HomePageLogo.Text);        
    expect(HomePage.homePageLogo.getCssValue("color")).toEqual(Data.HomePageLogo.Color);
    
    });

    it('should verify email field', () => {
        expect(HomePage.homePageEmailLoginBar.isDisplayed()).toBe(true);
    });
    
    it('should verify password field', () => {
        expect(HomePage.homePagePasswordBar.isDisplayed()).toBe(true);
    });
    
    it('should verify email field has "email" place holder', () => {
        expect(HomePage.homePageEmailLoginBar.getAttribute("placeholder")).toEqual("email");
    });

    it('should verify Login functionality with invalid credentials', () => {
        HomePage.homePageEmailLoginBar.sendKeys(Data.invalidUser.email);
        HomePage.homePagePasswordBar.sendKeys(Data.invalidUser.password);
        HomePage.homePageSignInButton.click();
        expect(HomePage.homePageLogo.getText()).toEqual(Data.HomePageLogo.Text);

    });

    fit('should verify "Git Hub" icon is forwarding to Git Hub website when clicked', () => {
        
        HomePage.homePageGitHubLink.click();
        let gitWindow="";
        browser.driver.getAllWindowHandles().then((h)=>{
            browserWindows=h;
            gitWindow=h[1];
        });
        
        browser.driver.switchTo().window(gitWindow).then(()=>{
            browser.waitForAngularEnabled(false);
            expect(browser.getTitle()).toEqual(Data.gitHubTitle.text);
        });
        
    });

    it('should Verify Question Circle "?" icon is enabled', () => {
        expect(HomePage.homePageQuestionLink.isEnabled()).toBe(true);
});

    fit('should verify "Question" icon swithced to Mailto window when clicked', () => {
        let questionWindow="";
        browser.close().then(()=>{
            browser.switchTo().window( browserWindows[0]);
        });    
        HomePage.homePageQuestionLink.click();
        browser.driver.getAllWindowHandles().then((h)=>{
            browserWindows=h;
            questionWindow=h[1];
        });
        
        browser.driver.switchTo().window(questionWindow).then(()=>{
            browser.waitForAngularEnabled(false);
            browser.getCurrentUrl().then((u)=>{
                console.log(u);
            });
            // expect(browser.getTitle()).toEqual(Data.gitHubTitle.text);
        });
        
    });
<<<<<<< HEAD
    
    it('should Verify "Git Hub" icon is visible', () => {
        expect(HomePage.homePageGitHubLink.isDisplayed()).toBe(true);
        
    });
    it('should Verify "Git Hub" icon color changes if we hover over ', () =>{
    expect(HomePage.homePageQuestionLink.isEnabled()).toBe(true);
    });
    it('should verify  "?" icon is enabled',()=>{
    browser.actions().mouseMove(HomePage.homePageGithublink).perform();
        
    expect(HomePage.homePageGithublink.getCssValue("color")).toEqual("rgba(54, 54, 54, 1)");
    });
   
=======

  //Feride Data base query
    fit('Should verify email field accepts only correct email format',()=>{
        db.any(queries.wrongEmail)
        .then(function(result){
            array=result
            console.log(array)
        }).catch(function(error){
            console.log(error)
        }).then(function(){
            // array.forEach(function(element){
            //     HomePage.email.sendKeys(element.firstname+"@gmail.co");
            //     browser.sleep(5000)
            //     HomePage.email.sendKeys(protractor.Key.ENTER)
            //     expect(element(by.css(".cdk-overlay-container")).toBe(true));
            //     browser.sleep(3000)
            //     HomePage.email.clear();
            //})
              for(var a=0;a<array.length-1;a++){
                HomePage.email.sendKeys(array[a].firstname+"@gmail.co");
                HomePage.email.sendKeys(protractor.Key.ENTER)
                browser.sleep(3000)
                HomePage.email.clear();
              }
                
            })
           
        })
   //test1
>>>>>>> 82482c96bc88dd6ac955224c87701b268b85153d



});
