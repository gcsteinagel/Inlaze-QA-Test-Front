import { fillRegistrationForm, fillLoginForm } from '../shared/commands';

const WAIT_TIME = 2000;

const userNumberScenario = (numberScenario, userNumber) => {
    cy.fixture('users/login/case-2').then((testUsers) => {
        // Filtra el escenario por número
        const scenario = testUsers.userScenario.find(scenario => scenario.number === numberScenario);

        // Filtra el usuario por número dentro del escenario
        const user = scenario.users.find(user => user.userNumber === userNumber);

        // Se invoca la función que interactúa con el formulario, pasando un objeto con los datos filtrados del usuario desde el archivo JSON correspondiente
        fillRegistrationForm(user.registration,user.login);
        fillLoginForm(user.registration,user.login);
    });
};

describe('Caso de prueba 2 - Validar que el formulario de login no se envíe si los campos no están completos.', () => {
    beforeEach(() => {
        cy.visit('https://test-qa.inlaze.com');
        cy.wait(WAIT_TIME);
    });

    it('Escenario 1 - Deja los campos email y contraseña vacíos.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(1, 1);
    });

    it('Escenario 2 - Dejar el campo email vacío.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(2, 1);
    });

    it('Escenario 3 - Dejar el campo contraseña vacío.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(3, 1);
    });

});