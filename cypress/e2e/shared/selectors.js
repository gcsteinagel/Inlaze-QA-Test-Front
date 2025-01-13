export const selectors = {
    // Selectores específicos para el formulario de registro
    register: {
        registerButton: '.text-center > .font-bold',
        fullNameInput: '#full-name',
        emailInput: '#email',
        passwordTogglePasswordButton: ':nth-child(3) > .ng-untouched > .join > .btn',
        passwordInput: '#password',
        repeatPasswordTogglePasswordButton: '.mb-4 > .join > .btn',
        repeatPasswordInput: '#confirm-password',
        passwordDoNotMatch: '.label-text-alt',
        submitButton: '[type="submit"]',
        successfulRegistration: '.ml-3'
    },
    // Selectores específicos para el formulario de login
    login: {
        emailInput: '#email',
        passwordTogglePasswordButton: '.join > .btn',
        passwordInput: '#password',
        submitButton: '[type="submit"]',
        closesuccessfulRegistration: '.ml-4',
        userName: '.flex > .font-bold',
        userImage: 'img[alt="Rengoku"]',
        logoutButton: "a:contains(\"Logout\")"
    },
};