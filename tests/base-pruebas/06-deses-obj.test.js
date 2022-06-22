import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
	test("usContext debe de retornar un objeto", () => {
		const key = "alex123";
		const age = 26;

		const data = usContext({ key, age });

		expect(data).toStrictEqual({
			keyName: key,
			age,
			coords: {
				lat: 14.1232,
				lng: -12.3232,
			},
		});
	});
});
