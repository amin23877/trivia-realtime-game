import React from "react";

import s from "./Page404.module.scss";

import image404 from "assets/images/pics/404.svg";
import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<div className={s.container}>
			<img alt="page not found" src={image404} className={s.image} />

			<p className="mb-4 mb-xl-5 mt-2">Oops, Page Not Found!</p>

			<Link to="/" className={s.button}>
				Go Back Home
			</Link>
		</div>
	);
};

export default Page404;
