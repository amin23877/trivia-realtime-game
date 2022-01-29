// Reacts
import React, { useEffect, useState } from "react";
// Hooks
import { useNavigate, useParams } from "react-router-dom";
// Packages
import _ from "lodash";
// Components, Services, Functions
import { LIST_PAGESIZE } from "common/values/CORE";
import { MOCK_TOPICS_ALL } from "common/mocks/MOCK";
import { TYPE_TOPIC_SORTKEY } from "common/values/TYPES";
import EmptyList from "common/components/empties/EmptyList";
import { TYPE_TOPIC_SORTKEY_LIST } from "common/values/TYPES";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchTopicsSort } from "redux/actions/topicActions/topicsActions";
// Material - lab
import Pagination from "@material-ui/lab/Pagination"; // #pagination step0
// Styles, Icons, Images
import "./HomeTopicsSeeAll.scss";
import imgMain from "assets/images/test/3.png";
import iconRate from "assets/images/icons/rate-mini.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IMAGE_URL } from "common/values/CORE";

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

	const [pagination, setPagination] = useState({ page: 0, pageSize: LIST_PAGESIZE });

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
		<div className="w-100 h-100 topicsSeeAll">
			<div className="d-flex align-items-center _header-path">
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
						<div className="d-flex flex-wrap justify-content-around">
							{stateTopic[TYPE_TOPIC_SORTKEY_LIST[type]]?.list.map((el, index) => (
								<div
									key={index}
									className="_topic-card"
									onClick={(e) => handleNavigate(e, "/topics/5")}
								>
									<div className="card-img">
										<img src={`${IMAGE_URL}${el?.logo}`} alt="" />
									</div>
									<div className="d-flex flex-column justify-content-between card-info">
										<p className="title">{el.name}</p>
										<div className="d-flex justify-content-between align-items-center">
											<p className="subtitle">
												<span>{`${el.questions} questions /`}</span>
												{/* <span className="mx-1">questions /</span> */}

												<span>{`${el?.singlePlays + el?.doublePlays} plays`}</span>
											</p>
											<p className="rate">
												<img className="mx-1" src={iconRate} alt="" />
												<span>{el.rate}</span>
											</p>
										</div>
									</div>
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
