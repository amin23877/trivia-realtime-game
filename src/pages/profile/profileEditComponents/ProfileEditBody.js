import React,{useState,useRef} from "react";
import PropTypes from "prop-types";
//---components
import ChangeProfilePicModal from "pages/modals/ChangeProfilePicModal"
//---assets
import "./ProfileEditBody.scss"
import CameraIcon from "assets/images/icons/camera-icon.svg"

const ProfileEditBody = ({data,username,photoCallBack,usernameCallBack}) => {
  const [modalOpen,setModalOpen] = useState(false);
  const profilePhotoRef = useRef();

  const removeProfilePhotoHandler =() => {
    // handle removing profile here
  }

  const newProfilePhotoHandler = (file) => {
    const selectedPhotoSrc = URL.createObjectURL(file);
    if(profilePhotoRef.current) {
      profilePhotoRef.current.src = selectedPhotoSrc;
      photoCallBack(file);
    }
    setModalOpen(false);
  }

  return (
		<div className="edit-body">
			{modalOpen && (
				<ChangeProfilePicModal
					onRemove={removeProfilePhotoHandler}
					cb={newProfilePhotoHandler}
					onClose={() => setModalOpen(false)}
				/>
			)}
			<button onClick={() => setModalOpen(true)} className="edit-body--pic">
				<img
					ref={profilePhotoRef}
					className="edit-body--pic__img"
					src={data?.avatar}
					alt="profile picture"
				/>
				<img className="edit-body--pic__camera" src={CameraIcon} alt="camera icon" />
			</button>
			<div className="edit-body--info">
				<label htmlFor="username">User Name</label>
				<input
					id="username"
					onChange={(e) => usernameCallBack(e.currentTarget.value)}
					placeholder={data?.username}
					value={username}
				/>
        <p className="edit-body--info__detail">
          At least 4 characters including uppercase and lowercase letters, numbers, dots, and line.
        </p>
			</div>
		</div>
  );
}

ProfileEditBody.propTypes = {
  data: PropTypes.object,
  photoCallBack: PropTypes.func,
  usernameCallBack: PropTypes.func,
  username: PropTypes.string
}

export default ProfileEditBody;
