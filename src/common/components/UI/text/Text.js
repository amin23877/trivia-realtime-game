import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const Text = ({ ns, params, as: Component = "p", ...rest }) => {
	const { t } = useTranslation();

	return <Component {...rest}>{t(ns, params)}</Component>;
};

Text.propTypes = {
	ns: PropTypes.string.isRequired,
	params: PropTypes.object,
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	rest: PropTypes.any,
	style: PropTypes.any,
};

export default Text;
