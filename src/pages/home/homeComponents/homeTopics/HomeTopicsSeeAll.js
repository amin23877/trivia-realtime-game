// Reacts
import React, { useEffect, useState } from "react";
// Hooks
import { useNavigate, useParams } from "react-router-dom";
// Packages
// Components, Services, Functions
import { IMAGE_URL, LIST_PAGESIZE } from "common/values/CORE";
import { TYPE_TOPIC, TYPE_TOPIC_SORTKEY, TYPE_TOPIC_SORTKEY_LIST } from "common/values/TYPES";
import EmptyList from "common/components/empties/EmptyList";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchTopicsSort } from "redux/actions/topicActions/topicsActions";
// Material - lab
import Pagination from "@material-ui/lab/Pagination"; // #pagination step0
// Styles, Icons, Images
import "./HomeTopicsSeeAll.scss";
import iconRate from "assets/images/icons/rate-mini.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CardTopic from "common/components/cardTopic/CardTopic";

const HomeTopicsSeeAll = (props) => {
	let { type } = useParams();

	const dispatch = useDispatch();
	const stateTopic = useSelector((state) => state.stateTopic);

	const navigate = useNavigate();

	const paths = [
		{
			name: "Home",
			path: "/",
		},
		{
			name:
				TYPE_TOPIC_SORTKEY[type] === TYPE_TOPIC_SORTKEY.TOP
					? "Top Topics"
					: TYPE_TOPIC_SORTKEY[type] === TYPE_TOPIC_SORTKEY.LATEST
					? "Lastest Topics"
					: "Favorite Topics",
			path: "",
		},
	];

	const [pagination, setPagination] = useState({ page: 1, pageSize: LIST_PAGESIZE });

	const handleNavigate = (event, path) => {
		event.stopPropagation();
		navigate(path);
	};

	const handlePagination = (event, value) => {
		setPagination({
			...pagination,
			page: value,
		});
		dispatch(fetchTopicsSort(TYPE_TOPIC_SORTKEY[type], { ...pagination, page: value }));
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			setPagination({
				...pagination,
			});

			dispatch(fetchTopicsSort(TYPE_TOPIC_SORTKEY[type], pagination));
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="w-100 topicsSeeAll">
			<div className="header-breadcrumb _header-path">
				{paths.map((el, index) => (
					<p
						key={index}
						className={`_path ${index === paths.length - 1 ? "_lastPath" : ""}`}
						onClick={(e) => {
							handleNavigate(e, el.path);
						}}
					>
						{el.name}

						{!(index === paths.length - 1) ? <ArrowForwardIosIcon className="_arrow" /> : null}
					</p>
				))}
			</div>

			<div className="topicsSeeAll-body">
				{stateTopic[TYPE_TOPIC_SORTKEY_LIST[type]]?.total ? (
					<>
						<div className="d-flex flex-wrap">
							{stateTopic[TYPE_TOPIC_SORTKEY_LIST[type]]?.list.map((el, index) => (
								<div key={index} className="topicsSeeAll-item">
									<CardTopic data={type !== TYPE_TOPIC.FAVORITE ? el : el?.TopicId} />
								</div>
							))}
						</div>

						{/* #pagination step1 */}
						<Pagination
							className="my-3 _pagination"
							count={Math.ceil(stateTopic[TYPE_TOPIC_SORTKEY_LIST[type]]?.total / pagination.pageSize)}
							shape="rounded"
							onChange={handlePagination}
						/>
					</>
				) : (
					<EmptyList />
				)}
			</div>
		</div>
	);
};
export default HomeTopicsSeeAll;
