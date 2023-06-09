import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "common/components/UI/list/List";
import { useRequest } from "common/hooks/useRequest";
import ConfirmModal from "common/components/modals/ConfirmModal";
import Text from "common/components/UI/text/Text";

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
				actionText="remove"
				question="modal.removeFriend"
				questionParams={{ user: data.username }}
				renderButton={(handleOpen) => (
					<Text as="span" ns="remove" onClick={handleOpen} className="profile-friend__remove" />
				)}
			/>
		</ListItem>
	);
};

FriendCard.propTypes = {
	data: PropTypes.object,
};

export default FriendCard;
