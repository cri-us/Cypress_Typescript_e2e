import { SignIn, Register } from "../../page-objects/editable-field.page";
const signIn = new SignIn();
const register = new Register();

describe('Sign in page editable field functionality',() => {
    it('Login field functionability check', () => {
        cy.visit('https://www.redmine.org/login');
        function userName_Alpha() {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      
          for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
      
          return text;
        }
        signIn.loginField().type(userName_Alpha())
    })
    it('Password field functionability check',() =>{
        function userPw_Alpha() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1231243758237878123.,.,..,.";
        
            for (var i = 0; i < 10; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
        
            return text;
          }
          signIn.passwordField().type(userPw_Alpha());
    })
    it('Check stay logged in checkbox functionability',() =>{
        signIn.autoLogin().check({force: true})
    })
    it('Check login button functionability', () =>{
        signIn.loginBtn().click();
    })
    it('Check error text after unsuccesful login', () =>{
        signIn.errorBx().should("have.text","Invalid form authenticity token.")
    })
    it('Check back button functionablity after unsuccesful login', () =>{
        signIn.backBtn().click();
    })
    it('Check forgot password functionability', () => {
        signIn.lostPasswordBtn().click();
    })
    it('Check email field after clicking forgot password button', () => {
        signIn.lostPasswordEmailField().type('blablabla@gmail.com')
    })
    it('Checking submit button functionality in forgot email page',() =>{
        signIn.lostPasswordEmailSbmtBtn().click();
    })
     it('Check back button functionablity after unsuccesful email', () =>{
        signIn.backBtn().click();
    }) 
    it('Check email field after clicking forgot password button negative test',() =>{
        signIn.lostPasswordEmailField().type('dasdasdasda123123');
    })
    it('Checking submit button functionality in forgot email page',() =>{
        signIn.lostPasswordEmailSbmtBtn().click();
    })
})

describe('Register page editable field tests', () =>{
    it('Check Login field of register page',() =>{
        cy.visit('https://www.redmine.org/account/register');
        register.userLoginField().type('testuser');
    })
    it('Check password field of register page',() =>{
        register.userPasswordField().type('124124abc')
    })
    it('Check confirm password field of register page',() =>{
        register.userConfirmationField().type('124124abc')
    })
    it('Check first name field of register page',() =>{
        register.userFirstNameField().type('Test');
    })
    it('Check last name field of register page',() =>{
        register.userLastNameField().type('User');
    })
    it('Check email field of register page',() =>{
        register.userEmailField().type('testuser@gmail.com');
    })
    it('Check nick field of register page',() =>{
        register.userNick().type('testuser123141');
    })
    it('Check submit button functionability of register page',() =>{
        register.userSubmitBtn().click();
    })
    it('Check back button functionablity after unsuccesful register', () =>{
        signIn.backBtn().click();
    })
    
})

