import { getHeroById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
	test("getHeroById debe retornar un heroe por ID", () => {
		const id = 1;
		const hero = getHeroById(id);

		expect(hero).toEqual({
			id: 1,
			name: "Batman",
			owner: "DC",
		});
	});

	test("getHeroById debe retornar undefined si no existe un heroe", () => {
		const id = 1;
		const hero = getHeroById(id);

		expect(hero).toBeFalsy;
	});

	test("getHeroesByOwner debe de retornar heroes de DC", () => {
		const owner = "DC";
		const heroes = getHeroesByOwner(owner);

		expect(heroes.length).toBe(3);
		expect(heroes).toEqual(heroes.filter((hero) => hero.owner === owner));
	});

	test("getHeroesByOwner debe de retornar heroes de Marvel", () => {
		const owner = "Marvel";
		const heroes = getHeroesByOwner(owner);

		expect(heroes.length).toBe(2);
		expect(heroes).toEqual(heroes.filter((hero) => hero.owner === owner));
	});
});
