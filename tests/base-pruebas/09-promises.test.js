import { getHeroByIdAsync } from "../../src/base-pruebas/09-promises";

describe("Pruebas en 09-promises", () => {
	test("getHeroByIdAsync debe de retornar un héroe", (done) => {
		const id = 1;

		getHeroByIdAsync(id).then((hero) => {
			expect(hero).toEqual({
				id: 1,
				name: "Batman",
				owner: "DC",
			});

			done();
		});
	});

	test("getHeroByIdAsync debe de retornar un error si héroe no existe", (done) => {
		const id = 100;

		getHeroByIdAsync(id).catch((error) => {
			expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

			done();
		});
	});
});
