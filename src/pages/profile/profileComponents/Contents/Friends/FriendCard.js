import React from "react"
import PropTypes from "prop-types"

const FriendCard = ({data}) => {
  const removeFriendHandler = (id) => {
    console.log("Removing friend with id of "+id)
  }
  return (
		<div className="profile-friends--item">
			<div className="profile-friends--item__info">
				<div className="profile-friends--item__info__avatar">
					<img src={data.image} alt={data.name} />
				</div>
				<p className="profile-friends--item__info__name">{data.name}</p>
			</div>
			<button onClick={() => removeFriendHandler(data.id)} className="profile-friends--item__remove">
				Remove
			</button>
		</div>
  );
}

FriendCard.propTypes = {
  data: PropTypes.object
}

export default FriendCard
