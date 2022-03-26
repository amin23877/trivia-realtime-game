import React from "react";
import { useTranslation } from "react-i18next";

const Text = ({ ns, as: Component = "p", ...rest }) => {
	const { t } = useTranslation();

	return <Component {...rest}>{t(ns)}</Component>;
};

export default Text;
