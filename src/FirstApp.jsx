import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, name }) => {
	return (
		<>
			<h1 data-testid="test-title">{title}</h1>
			<p>{subtitle}</p>
			<p>{name}</p>
		</>
	);
};

FirstApp.propTypes = {
	name: PropTypes.string,
	subtitle: PropTypes.string,
	title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
	name: "Alex",
	subtitle: "No hay subtítulo",
	title: "No hay título",
};
