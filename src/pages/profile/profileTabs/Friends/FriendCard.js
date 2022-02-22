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

	const removeFriendHandler = (id) => {
		console.log("Removing friend with id of " + id);
	};

	return (
		<>
			<ListItem
				className="profile-friend__list-item"
				key={index}
				avatar={data.image}
				username={data.name}
				avatarSize={{ mobile: 38, desktop: 50 }}
			>
				<span onClick={handleOpen} className="profile-friend__remove">
					Remove
				</span>
			</ListItem>

			{stateGeneral.modals[MODALS.generalModal] ? (
				<GeneralModal
					actionText="Remove"
					question={`Remove ${data?.name} from Friends ?`}
					icon={data.image}
					cb={() => removeFriendHandler(data?.id || "No id provided to remove a friend.")}
				/>
			) : null}
		</>
	);
};

FriendCard.propTypes = {
	data: PropTypes.object,
};

export default FriendCard;
