import { getGreeting } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
	test("getGreeting debe de retornar 'Hola Alejandro'", () => {
		const name = "Alejandro";
		const message = getGreeting(name);

		expect(message).toBe(`Hola ${name}`);
	});
});
