import { fillRegistrationForm } from '../shared/commands';

const WAIT_TIME = 2000;

const userNumberScenario = (numberScenario, userNumber) => {
    cy.fixture('users/registration/case-2').then((testUsers) => {
        // Filtra el escenario por número
        const scenario = testUsers.userScenario.find(scenario => scenario.number === numberScenario);

        // Filtra el usuario por número dentro del escenario
        const user = scenario.users.find(user => user.userNumber === userNumber);

        // Se invoca la función que interactúa con el formulario, pasando un objeto con los datos filtrados del usuario desde el archivo JSON correspondiente
        fillRegistrationForm(user.registration);
    });
};

describe('Caso de prueba 2 - Validar que el campo de nombre acepte mínimo 2 palabras.', () => {
    beforeEach(() => {
        cy.visit('https://test-qa.inlaze.com');
        cy.wait(WAIT_TIME);
    });

    it('Escenario 1 - Ingresar nombre con 1 sola palabra.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(1, 1);
    });

    it('Escenario 2 - Ingresar nombre con más de 2 palabras.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(2, 1);
    });

});