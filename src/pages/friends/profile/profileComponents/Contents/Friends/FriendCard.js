import React from "react"
import PropTypes from "prop-types"
import { useDispatch } from 'react-redux';
import { SET_MODALS } from 'redux/actions/mainActions/generalActions';
import { MODALS } from 'common/values/MODALS';
import {useNavigate} from "react-router-dom";

import GeneralModal from "pages/modals/GeneralModal"
//----assets
import "./FriendCard.scss"

const FriendCard = ({data}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = () => {
    dispatch(SET_MODALS({ [MODALS.generalModal]: true }));
  };
  const removeFriendHandler = (id) => {
    console.log("Removing friend with id of "+id);
  }
  return (
		<>
			<GeneralModal
				actionText="Remove"
        question={`Remove ${data.name} from Friends ?`}
				icon={data.image}
				cb={() => removeFriendHandler(data.id || "No id provided to remove a friend.")}
			/>
			<div className="profile-friend">
				<div className="profile-friend--item">
          <div onClick={() => navigate(`/profile/friend/${data.id}`)} className="profile-friend--item__info">
						<div className="profile-friend--item__info__avatar">
							<img src={data.image} alt={data.name} />
						</div>
						<p className="profile-friend--item__info__name">{data.name}</p>
					</div>
					<button onClick={handleOpen} className="profile-friend--item__remove">
						Remove
					</button>
				</div>
			</div>
		</>
  );
}

FriendCard.propTypes = {
  data: PropTypes.object
}

export default FriendCard
