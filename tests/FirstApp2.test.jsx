import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruenas en <FirstApp />", () => {
	const title = "Hola, soy el Kukun";
	const subtitle = "Holis";

	test("Debe hacer match con el snapshot", () => {
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	test("Debe mostrat el título 'Hola, soy el Kukun'", () => {
		render(<FirstApp title={title} />);
		expect(screen.getByText(title)).toBeTruthy();
	});

	test("Debe mostrat el título en un <h1></h1>", () => {
		render(<FirstApp title={title} />);
		expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
	});

	test("Debe de mostrar el subtítulo enviado por props", () => {
		render(<FirstApp title={title} subtitle={subtitle} />);
		expect(screen.getByText(subtitle)).toBeTruthy();
	});
});
