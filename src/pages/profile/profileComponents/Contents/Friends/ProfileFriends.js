import React, {useEffect,useState} from "react";
import ProfileNoTopics from "../../ProfileNoTopics";

const ProfileFriends = () => {
  const [data, setData] = useState();
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    // fetch favorite topics
    // set loading status
  }, []);
  return (
    <>
      {/* {isLoading && <div>Loading...</div>} */}
      {!isLoading && data.length > 0 ? (
        <></>
      ) : (
        <>
          <ProfileNoTopics />
        </>
      )}
    </>
  );
}

export default ProfileFriends;
