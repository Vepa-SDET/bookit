require('../Utilities/CustomLocators.js');
let HomePage=function(){
    this.homePageLogo=$(".title");
    this.homePageEmailLoginBar=$("[placeholder='email']");
    this.homePagePasswordBar=$("[placeholder='password']");
    this.homePageSignInButton=$("button[type='submit']");
    this.homePageGitHubLink=$("[class='fa fa-github']");
    this.homePageQuestionLink=$("[class='fa fa-question-circle']");

<<<<<<< HEAD
   
    
=======
    // Kadriye
    this.HomePageLogo=$(".title");
    this.email=element(by.name("email"));
    this.password=element(by.name("password"));
    this.signinButton=$(".button.is-dark");
>>>>>>> 82482c96bc88dd6ac955224c87701b268b85153d
    
    //
    this.email=element(by.name("email"));
    this.passwordPlaceHolder=element(by.name("password"));
    this.signButton=element(by.css(".control>button"));

}
module.exports=new HomePage();