import './SearchForPlayer.scss'
import searchForUserCenter from 'assets/images/icons/searchForUserCenter.svg';
import searchForUserRing from 'assets/images/icons/searchForUserRing.svg';
import { Button } from '@material-ui/core';

const SearchForPlayer = ({ selectedCategory, handleClose }) => {
    return (
        <div className="search-for-player">
            <p className="search-for-player__title">Search for rival players</p>
            <div className="search-for-player__icon">
                <img src={searchForUserRing} className="search-for-player__icon--ring" />
                <img src={searchForUserCenter} className="search-for-player__icon--center" />
            </div>
            <Button onClick={handleClose} className="search-for-player__cancel-btn">Cancel</Button>
        </div>
    )
}           
 
export default SearchForPlayer