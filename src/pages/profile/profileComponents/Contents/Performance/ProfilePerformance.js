import React, {useEffect,useState} from "react";

//---assets
import "./ProfilePerformance.scss";
import {MOCK_HISTORY_OF_PARTICIPATING} from "common/mocks/MOCK";
import {MOCK_PERFORMANCE_LEVEL} from "common/mocks/MOCK";
//----components
import ProfileNoTopics from "../../ProfileNoTopics";
import PerformanceLevelCard from "./PerformanceLevelCard";

const ProfilePerformance = () => {
  const [data, setData] = useState();
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    setData(MOCK_HISTORY_OF_PARTICIPATING)
    setIsLoading(false)
    // fetch favorite topics
    // set loading status
  }, []);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && data.length > 0 ? (
        <div className="profile-performance">
          <PerformanceLevelCard data={MOCK_PERFORMANCE_LEVEL} />
        </div>
      ) : (
        <>
          <ProfileNoTopics />
        </>
      )}
    </>
  );
}

export default ProfilePerformance;
