import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en <CounterApp />", () => {
	const value = 10;

	test("Debe de hacer match con el snapshot", () => {
		const { container } = render(<CounterApp value={value} />);
		expect(container).toMatchSnapshot();
	});

	test("Debe de mostrar el valor inicial de 100", () => {
		render(<CounterApp value={100} />);
		expect(screen.getByText(100)).toBeTruthy();
		expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("100");
	});

	test("Debe de incrementar con el botón +1", () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByRole("button", { name: "btn-add" }));
		expect(screen.getByText("11")).toBeTruthy();
	});

	test("Debe de decrementar con el botón -1", () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByRole("button", { name: "btn-sub" }));
		expect(screen.getByText("9")).toBeTruthy();
	});

	test("Debe de reiniciar al valor por defecto con el botón reset", () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByRole("button", { name: "btn-add" }));
		fireEvent.click(screen.getByRole("button", { name: "btn-add" }));
		fireEvent.click(screen.getByRole("button", { name: "btn-add" }));
		fireEvent.click(screen.getByRole("button", { name: "btn-res" }));
		expect(screen.getByText("10")).toBeTruthy();
	});
});
