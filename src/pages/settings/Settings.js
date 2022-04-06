import React, { useState } from "react";
import FilledButton from "common/components/UI/button/FilledButton";

import s from "./Settings.module.scss";
import { useDispatch } from "react-redux";
import { updateUser } from "redux/actions/userActions/userActions";
import Text from "common/components/UI/text/Text";
import HeaderGoBack from "common/components/headerGoBack/HeaderGoBack";
import { useChangeLang } from "common/hooks/useChangeLang";

const Settings = () => {
	const { changeLang, i18n } = useChangeLang();

	const dispatch = useDispatch();

	const [selectedLang, setSelectedLang] = useState(i18n.language);

	const handleSelectLang = (e) => {
		setSelectedLang(e.target.value);
	};

	const handleChangeLanguage = (e) => {
		e.preventDefault();

		if (selectedLang !== i18n.language) {
			dispatch(
				updateUser("language", selectedLang, () => {
					changeLang(selectedLang);
				})
			);
		}
	};

	return (
		<form className={s.form} onSubmit={handleChangeLanguage}>
			<HeaderGoBack
				title="menu.settings"
				renderOtherSide={() => <FilledButton ns="btn.save" variant="secondary" as="button" type="submit" />}
			/>

			<div className={s.container}>
				<div className={s.selectContainer}>
					<Text ns="settings.preferred" as="label" />

					<select lang="en" className={s.select} value={selectedLang} onChange={handleSelectLang}>
						<option value="en">English</option>
						<option value="fa">Persian</option>
						<option value="ps">Pashto</option>
					</select>
				</div>

				<FilledButton
					className="d-none d-xl-inline"
					ns="btn.save"
					variant="secondary"
					as="button"
					type="submit"
				/>
			</div>
		</form>
	);
};

export default Settings;
