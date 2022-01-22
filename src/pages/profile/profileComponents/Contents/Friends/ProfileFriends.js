import {FRIENDS_MOCK_DATA} from "common/mocks/MOCK";
import React, {useEffect,useState} from "react";

//----assets
import "./ProfileFriends.scss"
//----components
import ProfileNoTopics from "../../ProfileNoTopics";
import FriendCard from "./FriendCard"

const ProfileFriends = () => {
  const [data, setData] = useState();
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    setData(FRIENDS_MOCK_DATA);
    setIsLoading(false);
    // fetch favorite topics
    // set loading status
  }, []);
  return (
		<>
			{isLoading && <div>Loading...</div>}
			{!isLoading && data.length > 0 ? (
				<div className="profile-friends">
					{data.map((f, i) => (
            <FriendCard key={i} data={f} />
					))}
				</div>
			) : (
				<>
					<ProfileNoTopics />
				</>
			)}
		</>
  );
}

export default ProfileFriends;
