import Avatar from "common/components/UI/Avatar";
import { IMAGE_URL } from "common/values/CORE";
import rateIcon from "assets/images/icons/rate-mini.svg";
import { Link } from "react-router-dom";

export const ResultItem = ({ data }) => {
	const link = data.level ? `/profile/${data._id}` : `/topics/${data._id}`;

	return (
		<Link to={link} className="explore-result-item">
			<Avatar src={IMAGE_URL + encodeURI(data.logo || data.avatar)} size={{ mobile: 40, desktop: 44 }} />

			<div>
				<p className="explore-result-item__title">{data.name || data.username}</p>

				{data.level && <p className="explore-result-item__desc">Level {data.level}</p>}

				{!data.level && (
					<span className="explore-result-item__rate">
						<img alt="" width={9} src={rateIcon} /> {data.rate}
					</span>
				)}
			</div>
		</Link>
	);
};
