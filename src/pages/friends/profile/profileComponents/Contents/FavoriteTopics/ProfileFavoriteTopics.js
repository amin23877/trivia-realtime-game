import React, {useEffect,useState} from "react";
import ProfileFavoriteTopicCard2 from "./FavoriteTopicCard2"
import ProfileNoTopics from "../../ProfileNoTopics";
import {MOCK_FAVORITE_TOPICS} from "common/mocks/MOCK"
import Grid from '@material-ui/core/Grid';
import {useParams} from "react-router-dom";

const ProfileFavoriteTopics = () => {
  const [data, setData] = useState();
  const [isLoading,setIsLoading] = useState(true);
  const {id: friendId} = useParams();
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
        <Grid container style={{width: "auto",padding: "0 24px"}} spacing={1}>
					{data.map((ft, i) => (
						<Grid item key={i} xs={6}>
							<ProfileFavoriteTopicCard2 data={ft} />
						</Grid>
					))}
				</Grid>
			) : (
				<>
					<ProfileNoTopics />
				</>
			)}
		</>
  );
}

export default ProfileFavoriteTopics;
