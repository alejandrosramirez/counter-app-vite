import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruenas en <FirstApp />", () => {
	test("Debe hacer match con el snapshot", () => {
		const title = "Hola, soy el Kukun";
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	test("Debe mostrat el título en un <h1></h1>", () => {
		const title = "Hola, soy el Kukun";
		const { container, getByText, getByTestId } = render(
			<FirstApp title={title} />
		);
		expect(getByText(title)).toBeTruthy();
		// const h1 = container.querySelector("h1");
		// expect(h1.innerHTML).toBe(title);
		expect(getByTestId("test-title").innerHTML).toContain(title);
	});

	test("Debe de mostrar el título enviado por props", () => {
		const title = "Hola, soy el Kukun";
		const subtitle = "Holis";
		const { getByText } = render(
			<FirstApp
				title={title}
				subtitle={subtitle}
			/>
		);
		expect(getByText(subtitle)).toBeTruthy();
	});
});
