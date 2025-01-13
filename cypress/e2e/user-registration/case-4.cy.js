import { fillRegistrationForm } from '../shared/commands';

const WAIT_TIME = 2000;

const userNumberScenario = (numberScenario, userNumber) => {
    cy.fixture('users/registration/case-4').then((testUsers) => {
        // Filtra el escenario por número
        const scenario = testUsers.userScenario.find(scenario => scenario.number === numberScenario);

        // Filtra el usuario por número dentro del escenario
        const user = scenario.users.find(user => user.userNumber === userNumber);

        // Se invoca la función que interactúa con el formulario, pasando un objeto con los datos filtrados del usuario desde el archivo JSON correspondiente
        fillRegistrationForm(user.registration);
    });
};

describe('Caso de prueba 4 - Validar que la contraseña cumpla con los requisitos de longitud y caracteres.', () => {
    beforeEach(() => {
        cy.visit('https://test-qa.inlaze.com');
        cy.wait(WAIT_TIME);
    });

    it('Escenario 1 - Ingresar contraseña sin números.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(1, 1);
    });

    it('Escenario 2 - Ingresar contraseña sin caracteres especiales.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(2, 1);
    });

    it('Escenario 3 - Ingresar contraseña sin letras mayúsculas.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(3, 1);
    });

    it('Escenario 4 - Ingresar contraseña sin letras minúsculas.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(4, 1);
    });

    it('Escenario 5 - Ingresar contraseña con límite mínimo (8 caracteres).', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(5, 1);
    });

    it('Escenario 6 - Ingresar contraseña con límite máximo (13 caracteres).', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(6, 1);
    });

    it('Escenario 7 - Ingresar contraseña con menos de 8 caracteres.', () => {
        userNumberScenario(7, 1);
    });

    it('Escenario 8 - Ingresar contraseña con más de 13 caracteres.', () => {
        userNumberScenario(8, 1);
    });

});