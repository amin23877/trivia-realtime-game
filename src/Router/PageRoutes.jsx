import { Routes , Route } from 'react-router-dom';
import { HomePage , LeaguePage, UserPorfile } from '../pages';

export default function PageRoutes () {

    return(
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/league" element={<LeaguePage />} />
            <Route path="/profile" element={<UserPorfile />} />
        </Routes>
    )
}