import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "common/components/UI/list/List";
import { useDispatch } from "react-redux";
import { SET_MODALS } from "redux/actions/mainActions/generalActions";
import { MODALS } from "common/values/MODALS";
import GeneralModal from "pages/modals/GeneralModal";
import { useSelector } from "react-redux";

const FriendCard = ({ data, index }) => {
	const dispatch = useDispatch();

	const stateGeneral = useSelector((state) => state.stateGeneral);

	const handleOpen = () => {
		dispatch(SET_MODALS({ [MODALS.generalModal]: true }));
	};

	const removeFriendHandler = () => {
		// remove
	};

	return (
		<>
			<ListItem
				index={index + 1}
				className="profile-friend__list-item"
				link={"/profile/" + data._id}
				avatar={data.avatar}
				username={data.username}
				avatarSize={{ mobile: 38, desktop: 50 }}
			>
				<span onClick={handleOpen} className="profile-friend__remove">
					Remove
				</span>
			</ListItem>

			{stateGeneral.modals[MODALS.generalModal] ? (
				<GeneralModal
					actionText="Remove"
					question={`Remove ${data?.username} from Friends ?`}
					icon={data.avatar}
					cb={() => removeFriendHandler()}
				/>
			) : null}
		</>
	);
};

FriendCard.propTypes = {
	data: PropTypes.object,
};

export default FriendCard;
