import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FilledButton from "common/components/UI/button/FilledButton";

import s from "./Settings.module.scss";

const Settings = () => {
	const { i18n } = useTranslation();

	const [selectedLang, setSelectedLang] = useState(i18n.language);

	const handleSelectLang = (e) => {
		setSelectedLang(e.target.value);
	};

	const handleChangeLanguage = (e) => {
		e.preventDefault();
		if (selectedLang !== i18n.language) i18n.changeLanguage(selectedLang);
	};

	return (
		<div className={s.container}>
			<form onSubmit={handleChangeLanguage}>
				<div>
					<label>Select your preferred language</label>
					<select value={selectedLang} onChange={handleSelectLang}>
						<option value="en">English</option>
						<option value="fa">Persian</option>
					</select>
				</div>

				<FilledButton variant="secondary" as="button" type="submit">
					Save Changes
				</FilledButton>
			</form>
		</div>
	);
};

export default Settings;
