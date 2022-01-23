import {FRIENDS_MOCK_DATA} from "common/mocks/MOCK";
import React, {useEffect,useState} from "react";
import {useParams} from "react-router-dom";

//----assets
import "./ProfileFriends.scss"
//----components
import ProfileNoTopics from "../../ProfileNoTopics";
import FriendCard from "./FriendCard"
import Search from "common/components/UI/Search"

const ProfileFriends = () => {
  const [data, setData] = useState();
  const [isLoading,setIsLoading] = useState(true);
  const {id: friendId} = useParams();
  useEffect(() => {
    setData(FRIENDS_MOCK_DATA);
    setIsLoading(false);
    // fetch friends
    // set loading status
  }, []);
  return (
		<>
			{isLoading && <div>Loading...</div>}
			{!isLoading && data.length > 0 ? (
				<>
          <div className="">
            <Search cb={(value) => console.log(value)} />
          </div>
					{data.map((f, i) => (
            <FriendCard key={i} data={f} />
					))}
				</>
			) : (
				<>
					<ProfileNoTopics />
				</>
			)}
		</>
  );
}

export default ProfileFriends;
