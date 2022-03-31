import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useChangeLang = () => {
	const { i18n } = useTranslation();

	const changeLang = useCallback(
		(lang) => {
			i18n.changeLanguage(lang);
		},
		[i18n]
	);

	// change lang attribute of document when change language is successful
	useEffect(() => {
		document.documentElement.lang = i18n.language;
	}, [i18n.language]);

	return { changeLang, i18n };
};
