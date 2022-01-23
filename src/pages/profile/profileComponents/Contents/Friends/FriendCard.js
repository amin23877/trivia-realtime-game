import React from "react"
import PropTypes from "prop-types"

//----assets
import "./FriendCard.scss"

const FriendCard = ({data}) => {
  const removeFriendHandler = (id) => {
    console.log("Removing friend with id of "+id)
  }
  return (
		<div className="profile-friend">
			<div className="profile-friend--item">
				<div className="profile-friend--item__info">
					<div className="profile-friend--item__info__avatar">
						<img src={data.image} alt={data.name} />
					</div>
					<p className="profile-friend--item__info__name">{data.name}</p>
				</div>
				<button onClick={() => removeFriendHandler(data.id)} className="profile-friend--item__remove">
					Remove
				</button>
			</div>
		</div>
  );
}

FriendCard.propTypes = {
  data: PropTypes.object
}

export default FriendCard
