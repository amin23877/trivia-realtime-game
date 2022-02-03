import React,{useRef} from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom"
//----assets
import "./ProfileEditHeader.scss"
import BackIcon from "assets/images/icons/arrow-forward-mini.svg"
import DeleteIcon from "assets/images/icons/delete-icon.svg"
import EditIcon from "assets/images/icons/edit.svg"
//----component
import Button from "@material-ui/core/Button"

const ProfileEditHeader = ({data, photoCallBack, onSaveChanges, onDelete }) => {
	const navigate = useNavigate();
	const fileInputRef = useRef();
	const headerImageRef = useRef();
	const changeInputHandler = (e) => {
    const file = e.currentTarget.files[0];
		if (file) {
      const selectedPhotoSrc = URL.createObjectURL(file);
      if(headerImageRef.current) {
        headerImageRef.current.src = selectedPhotoSrc;
        photoCallBack(file);
      }
		}
	};
	const selectFileHandler = () => {
		fileInputRef?.current?.click();
	};

	return (
		<header className="edit-header">
			<input
				ref={fileInputRef}
				type="file"
				onChange={changeInputHandler}
        multiple={false}
				accept="png,jpeg,jpg,avif,tiff,webp"
				hidden
			/>
			<div className="edit-header--top">
				<div className="edit-header--top__left-side">
					<button
						onClick={() => navigate("/profile/favorite-topics")}
						className="edit-header--top__left-side__back"
					>
						<img src={BackIcon} alt="go back icon" />
					</button>
					<div className="edit-header--top__left-side__text">Edit Profile</div>
				</div>
				<div className="edit-header--top__right-side">
					<Button
						variant="contained"
						onClick={onSaveChanges}
						style={{
							backgroundColor: "#F24973",
							borderRadius: 8,
							color: "#fff",
							padding: "7px 15px",
							textTransform: "capitalize",
							lineHeight: "20px",
							fontWeight: 500,
							fontSize: "12px",
							boxShadow: "0px 3px 4px rgba(248, 63, 95, 0.3)",
						}}
					>
						Save Changes
					</Button>
				</div>
			</div>

			<div className="edit-header--image">
				<img ref={headerImageRef} src={data?.headerImage} alt="header image icon" />
				<div className="edit-header--image__buttons">
					<button onClick={onDelete} className="edit-header--image__buttons__delete">
						<img src={DeleteIcon} alt="delete icon" />
					</button>
					<button onClick={selectFileHandler} className="edit-header--image__buttons__edit-image">
						<img src={EditIcon} alt="edit icon" />
					</button>
				</div>
			</div>
		</header>
	);
};

ProfileEditHeader.propTypes = {
  data: PropTypes.object,
  photoCallBack: PropTypes.func,
  onSaveChanges: PropTypes.func,
  onDelete: PropTypes.func,
}

export default ProfileEditHeader;

