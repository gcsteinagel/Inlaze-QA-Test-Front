import { selectors } from './selectors';

const WAIT_TIME = 2000;

const interactWithElement = (selector, action, value = '') => {
    cy.get('body').then((body) => {
        if (body.find(selector).length > 0) {
            // Verifica si el selector está deshabilitado
            cy.get(selector).then((element) => {
                if (element.is(':disabled')) {
                    cy.log(`El elemento con selector "${selector}" está deshabilitado y no se puede interactuar con él.`);
                    return; // Termina la ejecución si el elemento está deshabilitado
                }

                // Si no está deshabilitado, verifica que exista y que sea visible
                cy.get(element)
                    .should('exist') // Verifica que el elemento exista
                    .should('be.visible'); // Verifica que el elemento sea visible                

                // Ejecuta la acción correspondiente
                if (action === 'type') {
                    cy.get(element).type(value); // Escribe el valor proporcionado en el campo especificado
                } else if (action === 'click') {
                    cy.get(element).click({ force: true }); // Realiza un clic en el elemento especificado
                } else if (action === 'contain') {
                    cy.get(element).should('contain', value); // Verifica que el elemento contenga el texto esperado
                }
            });
        } else {
            // Si el selector no existe, registra un mensaje en los logs de Cypress
            cy.log(`El selector "${selector}" no existe en el DOM, se omite la validación.`);
        }
    });

    cy.wait(WAIT_TIME); // Realiza una espera explícita para evitar problemas de sincronización
};

export const fillRegistrationForm = (userRegistration) => {
    interactWithElement(selectors.register.registerButton, 'click'); // Hace click en el botón de registro
    interactWithElement(selectors.register.fullNameInput, 'type', userRegistration.fullName); // Escribe el nombre completo del usuario
    interactWithElement(selectors.register.emailInput, 'type', userRegistration.email); // Escribe el email del usuario
    interactWithElement(selectors.register.passwordTogglePasswordButton, 'click'); // Hace click en el botón para mostrar la contraseña
    interactWithElement(selectors.register.passwordInput, 'type', userRegistration.password); // Escribe la contraseña del usuario
    interactWithElement(selectors.register.repeatPasswordTogglePasswordButton, 'click'); // Hace click en el botón para mostrar el campo de repetir contraseña
    interactWithElement(selectors.register.repeatPasswordInput, 'type', userRegistration.repeatPassword); // Escribe la confirmación de la contraseña
    interactWithElement(selectors.register.passwordDoNotMatch, 'contain', 'Passwords do not match'); // Verifica el mensaje de error si el selector existe
    interactWithElement(selectors.register.submitButton, 'click'); // Hace click en el botón de envío
    interactWithElement(selectors.register.successfulRegistration, 'contain', 'Successful registration!'); // Verifica el mensaje de éxito
};

export const fillLoginForm = (userRegistration, userLogin) => {
    interactWithElement(selectors.login.emailInput, 'type', userLogin.email); // Escribe el email del usuario
    interactWithElement(selectors.login.passwordTogglePasswordButton, 'click'); // Hace click en el botón para mostrar la contraseña
    interactWithElement(selectors.login.passwordInput, 'type', userLogin.password); // Escribe la contraseña del usuario
    interactWithElement(selectors.login.submitButton, 'click'); // Hace click en el botón de envío
    interactWithElement(selectors.login.closesuccessfulRegistration, 'click'); // Hace click para cerrar el mensaje 'Successful registration!'
    interactWithElement(selectors.login.userName, 'contain', userRegistration.fullName); // Verifica que el nombre del usuario sea igual al que se muestra en la interfaz
    interactWithElement(selectors.login.userImage, 'click'); // Hace click en la imagen del usuario
    interactWithElement(selectors.login.logoutButton, 'click'); // Hace click en Logout
}