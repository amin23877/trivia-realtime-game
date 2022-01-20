import { Backdrop, ClickAwayListener } from '@material-ui/core';
import onePlayerIcon from 'assets/images/icons/1player.svg';
import twoPlayersIcon from 'assets/images/icons/2players.svg';
import withFriendsIcon from 'assets/images/icons/withFriends.svg';
import { useState } from 'react';
import './SelectGameType.scss';

const SelectGameType = ({ handleOpenGameTypes, open }) => {
    const [clickedIndex, setClickedIndex] = useState()
    const gameTypes = [
        {
            title: '1 Player',
            icon: onePlayerIcon
        },
        {
            title: '2 Players',
            icon: twoPlayersIcon
        },
        {
            title: 'With Friends',
            icon: withFriendsIcon
        },
    ]
    const closeGameTypes = () => {
        setTimeout(() => {
            handleOpenGameTypes(false)
        }, 50)
    }
    const handleClickItem = (item, index) => {
        setClickedIndex(index)
    }
    return (

        <div className="selectGameType">
            <ClickAwayListener
                onClickAway={closeGameTypes}
            >

                <div className="gameTypesContainer">
                    {gameTypes.map((type, index) => (
                        <div className={`gameTypeItem ${clickedIndex == index && `gameTypeItemClicked`}`} onClick={() => handleClickItem(type, index)}>
                            <img src={type.icon} />
                            <p>{type.title}</p>
                        </div>
                    ))}
                </div>
            </ClickAwayListener>

        </div >
    )
}
export default SelectGameType;