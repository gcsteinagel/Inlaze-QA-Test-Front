import { fillRegistrationForm } from '../shared/commands';

const WAIT_TIME = 2000;

const userNumberScenario = (numberScenario, userNumber) => {
    cy.fixture('users/registration/case-5').then((testUsers) => {
        // Filtra el escenario por número
        const scenario = testUsers.userScenario.find(scenario => scenario.number === numberScenario);

        // Filtra el usuario por número dentro del escenario
        const user = scenario.users.find(user => user.userNumber === userNumber);

        // Se invoca la función que interactúa con el formulario, pasando un objeto con los datos filtrados del usuario desde el archivo JSON correspondiente
        fillRegistrationForm(user.registration);
    });
};

describe('Caso de prueba 5 - Comprobar que el formulario no se envíe si los campos obligatorios no están completos.', () => {
    beforeEach(() => {
        cy.visit('https://test-qa.inlaze.com');
        cy.wait(WAIT_TIME);
    });

    it('Escenario 1 - Dejar todos los campos obligatorios vacíos.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(1, 1);
    });

    it('Escenario 2 - Llenar algunos campos obligatorios, dejando al menos uno vacío.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(2, 1);
    });

});