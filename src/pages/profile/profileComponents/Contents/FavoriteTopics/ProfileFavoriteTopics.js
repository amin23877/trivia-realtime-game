import React, {useEffect,useState} from "react";
import ProfileFavoriteTopicCard from "./FavoriteTopicCard"
import ProfileNoTopics from "../../ProfileNoTopics";
import {MOCK_FAVORITE_TOPICS} from "common/mocks/MOCK"

const ProfileFavoriteTopics = () => {
  const [data, setData] = useState();
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    setData(MOCK_FAVORITE_TOPICS);
    setIsLoading(false);
    // fetch favorite topics
    // set loading status
  }, []);
  return (
    <>
      {/* {isLoading && <div>Loading...</div>} */}
      {!isLoading && data.length > 0 ? (
        <>
          {
            data.map((ft,i) => <ProfileFavoriteTopicCard key={i} data={ft} />)
          }
        </>
      ) : (
        <>
          <ProfileNoTopics />
        </>
      )}
    </>
  );
}

export default ProfileFavoriteTopics;
