import { fillRegistrationForm } from '../shared/commands';

const WAIT_TIME = 2000;

const userNumberScenario = (numberScenario, userNumber) => {
    cy.fixture('users/registration/case-3').then((testUsers) => {
        // Filtra el escenario por número
        const scenario = testUsers.userScenario.find(scenario => scenario.number === numberScenario);

        // Filtra el usuario por número dentro del escenario
        const user = scenario.users.find(user => user.userNumber === userNumber);

        // Se invoca la función que interactúa con el formulario, pasando un objeto con los datos filtrados del usuario desde el archivo JSON correspondiente
        fillRegistrationForm(user.registration);
    });
};

describe('Caso de prueba 3 - Verificar que el email cumpla con el formato estándar y sea único en la base de datos.', () => {
    beforeEach(() => {
        cy.visit('https://test-qa.inlaze.com');
        cy.wait(WAIT_TIME);
    });

    it('Escenario 1 - Ingresar correo electrónico en mayúsculas.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(1, 1);
    });

    it('Escenario 2 - Ingresar correo electrónico con múltiples puntos en la parte local.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(2, 1);
    });

    it('Escenario 3 - Ingresar correo electrónico con doble punto en el dominio.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(3, 1);
    });

    it('Escenario 4 - Ingresar un correo electrónico que ya se haya registrado anteriormente.', () => {
        // Llamado al filtro por número de escenario y número de usuario
        userNumberScenario(4, 1);
        userNumberScenario(4, 2);
    });

});