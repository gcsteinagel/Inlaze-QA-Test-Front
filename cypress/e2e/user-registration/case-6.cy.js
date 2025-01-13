import { fillRegistrationForm } from '../shared/commands';

const WAIT_TIME = 2000;

const userNumberScenario = (numberScenario, userNumber) => {
    cy.fixture('users/registration/case-6').then((testUsers) => {
        // Filtra el escenario por número
        const scenario = testUsers.userScenario.find(scenario => scenario.number === numberScenario);

        // Filtra el usuario por número dentro del escenario
        const user = scenario.users.find(user => user.userNumber === userNumber);

        // Se invoca la función que interactúa con el formulario, pasando un objeto con los datos filtrados del usuario desde el archivo JSON correspondiente
        fillRegistrationForm(user.registration);
    });
};

describe('Caso de prueba 6 - Verificar que el sistema informe si las contraseñas ingresadas no coinciden.', () => {
    beforeEach(() => {
        cy.visit('https://test-qa.inlaze.com');
        cy.wait(WAIT_TIME);
    });

    it('Escenario 1 - Ingresar contraseñas que no coinciden.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(1, 1);
    });

});