import { Backdrop, ClickAwayListener } from '@material-ui/core';
import onePlayerIcon from 'assets/images/icons/1player.svg';
import twoPlayersIcon from 'assets/images/icons/2players.svg';
import withFriendsIcon from 'assets/images/icons/withFriends.svg';
import { useState } from 'react';
import './SelectGameType.scss';
import { useNavigate } from "react-router-dom";


const SelectGameType = ({ handleOpenGameTypes, open }) => {
    const [clickedIndex, setClickedIndex] = useState()
    const navigate = useNavigate();
    const gameTypes = [
        {
            title: '1 Player',
            icon: onePlayerIcon,
            link:'/quickPlay/onePlayer'

        },
        {
            title: '2 Players',
            icon: twoPlayersIcon,
            link:'/quickPlay/twoPlayers'
        },
        {
            title: 'With Friends',
            icon: withFriendsIcon,
            link:'/'

        },
    ]
    const closeGameTypes = () => {
        setTimeout(() => {
            handleOpenGameTypes(false)
        }, 50)
    }
    const handleClickItem = (item, index) => {
        setClickedIndex(index)
        setTimeout(() => {
            navigate(item.link)
        }, 50)
    }

    return (

        <div className="select-game-type">
            <ClickAwayListener
                onClickAway={closeGameTypes}
            >

                <div className="select-game-type__game-types-container">
                    {gameTypes.map((type, index) => (
                        <div key={index} className={`select-game-type__game-types-container__game-type-item ${clickedIndex == index && `select-game-type__game-types-container__game-type-item--clicked`}`} onClick={() => handleClickItem(type, index)}>
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