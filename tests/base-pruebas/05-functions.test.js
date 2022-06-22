import { getActiveUser, getUser } from "../../src/base-pruebas/05-functions";

describe("Pruebas en 05-functions", () => {
	test("getUser debe de retornar un objeto", () => {
		const testUser = {
			uid: "ABC123",
			username: "el_mas_capo",
		};

		const user = getUser();

		expect(testUser).toEqual(user);
	});

	test("getActiveUser debe retornar un objeto", () => {
		const username = "Alejandro";

		const user = getActiveUser(username);

		expect(user).toStrictEqual({
			uid: "ABC567",
			username,
		});
	});
});
