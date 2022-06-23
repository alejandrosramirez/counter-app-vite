import { getImage } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
	test("getImage debe de retornar una url de imagen", async () => {
		const url = await getImage();

		expect(typeof url).toBe("string");
	});
});
