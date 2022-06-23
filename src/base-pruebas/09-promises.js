import { getHeroById } from "./08-imp-exp";

export const getHeroByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const hero = getHeroById(id);
			if (hero) {
				resolve(hero);
			} else {
				reject(`No se pudo encontrar el héroe ${id}`);
			}
		}, 1000);
	});
};
