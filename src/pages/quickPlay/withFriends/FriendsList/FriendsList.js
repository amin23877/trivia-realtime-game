import { Button } from "@material-ui/core";
import arrowBack from "assets/images/icons/arrow-back.svg";
import inviteIcon from "assets/images/icons/header-people.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './FriendsList.scss'
import userIcon from 'assets/images/icons/footer-profile.svg';
import { IMAGE_URL } from "common/values/CORE";
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

const FriendsList = ({ joinCode, users, mpGamesId, handleLeaveGame, handleStartGame }) => {
    const navigate = useNavigate();

    return (
        <div className="friends-list w-100 h-100">
            <div className="friends-list__header">
                <p>Join Code:</p>
                <p>{joinCode}</p>
                <div className="friends-list__header--invite">
                    <img src={inviteIcon} />
                    <p>Invite</p>
                </div>
                <div className="friends-list__header--copy">
                    <img src={inviteIcon} />
                    <p>Copy Link</p>
                </div>
            </div>
            <div className="friends-list__users-list-container">
                <p>People who have joined</p>
                <div className="friends-list__users-list-container--users-list">
                    {users.map((user) => (
                        <div className="friends-list__users-list-container--users-list--user">
                            <div>
                                <img src={user.avatar ? IMAGE_URL + user.avatar : userIcon} />
                                <p>{user.username || user.name}</p>
                            </div>
                            <div>
                                {joinCode == mpGamesId.categoryGameId &&
                                    <p>Remove</p>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="friends-list__footer">
                <Button onClick={handleLeaveGame}>{joinCode == mpGamesId.categoryGameId ? 'Cancel' : 'Leave'}</Button>
                <Button onClick={handleStartGame} className={joinCode !== mpGamesId.categoryGameId && 'disabled-btn'}>
                    {joinCode == mpGamesId.categoryGameId ? 'Start Game' : 'Wait To Start '}
                    <PlayArrowRoundedIcon />
                </Button>
            </div>
        </div>
    )
}

export default FriendsList;