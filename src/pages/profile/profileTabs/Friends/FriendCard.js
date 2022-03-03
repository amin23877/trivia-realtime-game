import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "common/components/UI/list/List";
import { useRequest } from "common/hooks/useRequest";
import ConfirmModal from "common/components/modals/ConfirmModal";

const FriendCard = ({ data, index }) => {
	const { fetcher: removeFriend } = useRequest(`user/${data._id}/friend`, { method: "DELETE" });

	const removeFriendHandler = () => {
		removeFriend();
	};

	return (
		<ListItem
			index={index + 1}
			className="profile-friend__list-item"
			userId={data._id}
			avatar={data.avatar}
			username={data.username}
			avatarSize={{ mobile: 38, desktop: 50 }}
		>
			<ConfirmModal
				avatar={data.avatar}
				alertIcon={false}
				action={() => removeFriendHandler()}
				actionText="Remove"
				question={`Remove ${data?.username} from Friends ?`}
				renderButton={(handleOpen) => (
					<span onClick={handleOpen} className="profile-friend__remove">
						Remove
					</span>
				)}
			/>
		</ListItem>
	);
};

FriendCard.propTypes = {
	data: PropTypes.object,
};

export default FriendCard;
