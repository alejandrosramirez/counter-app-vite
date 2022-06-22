import { returnArray } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
	test("Debe de retornar un string y un número", () => {
		const [letters, numbers] = returnArray();

		expect(typeof letters).toBe("string");
		expect(typeof numbers).toBe("number");
	});
});
