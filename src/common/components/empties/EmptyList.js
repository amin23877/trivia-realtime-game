import React from "react";
import { useTranslation } from "react-i18next";

import s from "./Empties.module.scss";
// import imgEmptyList from "assets/images/pics/empty-list.png";
import imgEmptyList from "assets/images/pics/empty.svg";

const EmptyList = () => {
	const { t } = useTranslation();

	return (
		<div className={s.normal}>
			<img src={imgEmptyList} alt="" />
			<p>{t("empty")}</p>
		</div>
	);
};
export default EmptyList;
