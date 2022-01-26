import React,{useState} from 'react';
// --- components
import Layout from "common/components/layout/Layout"
import ProfileEditHeader from "./profileEditComponents/ProfileEditHeader"
import ProfileEditBody from "./profileEditComponents/ProfileEditBody"
// --- assets
import './Profile.scss';
import SampleAvatar from "assets/images/test/profile-pic.jpg"
import HeaderImage from "assets/images/test/profile-header.jpg"

const MOCK_USER_DATA = {
  username: "Ali_Reza",
  avatar: SampleAvatar,
  headerImage: HeaderImage
}

const EditProfile = () => {
  const [username,setUsername] = useState("");
  const [profilePhoto,setProfilePhoto] = useState();
  const [headerPhoto,setHeaderPhoto] = useState();
  const deleteHandler = () => {
    // handle deletion here
  }
  const saveHandler = () => {
    console.log(profilePhoto);
    console.log(headerPhoto);
  }
  return (
		<Layout header={false} className="profile d-flex flex-column">
			<ProfileEditHeader
        data={MOCK_USER_DATA}
				photoCallBack={(f) => setHeaderPhoto(f)}
				onDelete={deleteHandler}
				onSaveChanges={saveHandler}
			/>
			<ProfileEditBody
        data={MOCK_USER_DATA}
				usernameCallBack={(v) => setUsername(v)}
				username={username}
				photoCallBack={(f) => setProfilePhoto(f)}
			/>
		</Layout>
  );
};
export default EditProfile;
