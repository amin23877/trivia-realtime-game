import React,{useState,useEffect} from "react"
import PropTypes from "prop-types"
import { useDispatch } from 'react-redux';
import { SET_MODALS } from 'redux/actions/mainActions/generalActions';
import { MODALS } from 'common/values/MODALS';
import {useNavigate} from "react-router-dom";

import GeneralModal from "pages/modals/GeneralModal"
// --- components
import ProfileEditButton from "./ProfileBackButton"
import ProfileTabs from "./ProfileTabs"
import Button from "@material-ui/core/Button"

// --- assets
import "./ProfileHeader.scss"
import ProfileImg from "assets/images/test/friends-profile-header.svg"
import UserPicImg from "assets/images/test/profile-pic-2.jpg"


const ProfileHeader = ({data}) => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(SET_MODALS({ [MODALS.generalModal]: true }));
  };

  const removeFriendHandler = (id) => {
    //handle removing this friend from friends
    console.log("Removing friend with id of "+id);
  }
  const [requested,setRequested] = useState(false);
  const [requestAccepted,setRequestAccepted] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    //handling request status
  },[])
  const handleFriendRequest = () => {
    if(requestAccepted) {
      handleOpen();
      // handle removing friend
    }
    console.log("adding friend...")
  }
  return (
		<header className="profile--header">
			<GeneralModal
				actionText="Remove"
        question={`Remove ${data.name} from Friends ?`}
				icon={data.image}
				cb={() => removeFriendHandler(data.id || "No id provided to remove a friend.")}
			/>
			<img src={data.background || ProfileImg} className="profile--header__image" alt="Profile header image" />
			<ProfileEditButton onClick={() => navigate("/profile/friends")} />
			<div className="profile--header__info">
				<img src={data.avatar || UserPicImg} className="profile--header__info__pic" alt="User picture" />
				<div className="d-flex flex-grow-1 flex-column text-left text-capitalize">
					<div className="profile--header__info__name">Angela Smith</div>
					<div className="profile--header__info__level">Level 3</div>
				</div>
				<div className="profile--header__info__addFriend">
					<Button
						variant="contained"
						style={{
							border: "1px solid",
							padding: "2px 15px",
							fontSize: "14px",
							fontWeight: "normal",
							boxShadow: requested
								? "none"
								: requestAccepted
								? "none"
								: "0px 3px 4px rgba(248, 63, 95, 0.3)",
							backgroundColor: requested ? "transparent" : requestAccepted ? "transparent" : "#F24973",
							borderColor: requested ? "#F24973" : requestAccepted ? "#8E8B9E" : "#F24973",
							color: requested ? "#F24973" : requestAccepted ? "#8E8B9E" : "#fff",
						}}
						size="small"
						onClick={handleFriendRequest}
					>
						{requested ? "Requested" : requestAccepted ? "Remove" : "Add Friend"}
					</Button>
				</div>
			</div>
			<ProfileTabs />
		</header>
  );
}

ProfileHeader.propTypes = {
  data: PropTypes.object
}

export default ProfileHeader;
