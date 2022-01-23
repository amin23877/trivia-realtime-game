// #routerConfig step1
import React from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRouter";

import Menu from "pages/menu/Menu";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import Friends from "pages/friends/Friends";
import Leagues from "pages/leagues/Leagues";
import Profile from "pages/profile/Profile";
import QuickPlay from "pages/quickPlay/QuickPlay";
import Wallet from "pages/menuPages/wallet/Wallet";
import ProfileEdit from "pages/profile/ProfileEdit";
import VerificationCode from "pages/login/VerificationCode";
import SearchExplore from "pages/searchExplore/SearchExplore";
import Notification from "pages/menuPages/notification/Notification";
import LeaguesInner from "pages/leagues/leaguesComponents/LeaguesInner";
import LeaguesResult from "pages/leagues/leaguesComponents/LeaguesResult";
import LeaguesHistory from "pages/leagues/leaguesComponents/LeaguesHistory";
import CategoriesList from "pages/quickPlay/twoPlayers/categories/CategoriesList";
import HomeTopicsInner from "pages/home/homeComponents/homeTopics/HomeTopicsInner";
import HomeTopicsSeeAll from "pages/home/homeComponents/homeTopics/HomeTopicsSeeAll";
<<<<<<< HEAD
import ProfileFavoriteTopics from "pages/profile/profileComponents/Contents/ProfileFavoriteTopics";
import ProfilePerformance from "pages/profile/profileComponents/Contents/ProfilePerformance";
import ProfileFriends from "pages/profile/profileComponents/Contents/ProfileFriends";
=======
import ProfileFavoriteTopics from "pages/profile/profileComponents/Contents/FavoriteTopics/ProfileFavoriteTopics";
import ProfilePerformance from "pages/profile/profileComponents/Contents/Performance/ProfilePerformance";
import ProfileFriends from "pages/profile/profileComponents/Contents/Friends/ProfileFriends";
>>>>>>> 040e8c3666c2eec76276debc9eb07b44247d4ee8
import TwoPlayers from "pages/quickPlay/twoPlayers/TwoPlayers";

const RouterConfig = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<ProtectedRoute />}>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/topics/:id" element={<HomeTopicsInner />} />
					<Route exact path="/topics/:topicId/all" element={<HomeTopicsSeeAll />} />
				</Route>

				<Route exact path="/leagues" element={<ProtectedRoute />}>
					<Route exact path="/leagues" element={<Leagues />} />
					<Route exact path="/leagues/history" element={<LeaguesHistory />} />
					<Route exact path="/leagues/:id" element={<LeaguesInner />} />
					<Route exact path="/leagues/result" element={<LeaguesResult />} />
				</Route>

				<Route exact path="/quickPlay" element={<ProtectedRoute />}>
					<Route exact path="/quickPlay" element={<QuickPlay />} />
					<Route exact path="/quickPlay/twoPlayers" element={<TwoPlayers />} />
				</Route>

				<Route exact path="/profile" element={<ProtectedRoute />}>
					<Route exact path="/profile" element={<Profile />}>
						<Route exact path="/profile/favorite-topics" element={<ProfileFavoriteTopics />} />
						<Route exact path="/profile/performance" element={<ProfilePerformance />} />
						<Route exact path="/profile/friends" element={<ProfileFriends />} />
					</Route>
					<Route exact path="/profile/edit" element={<ProfileEdit />} />
				</Route>

				<Route exact path="/search" element={<ProtectedRoute />}>
					<Route exact path="/search" element={<SearchExplore />} />
				</Route>

				<Route exact path="/menu" element={<ProtectedRoute />}>
					<Route exact path="/menu" element={<Menu />} />
					<Route exact path="/menu/wallet" element={<Wallet />} />
					<Route exact path="/menu/notification" element={<Notification />} />
				</Route>

				<Route exact path="/friends" element={<ProtectedRoute />}>
					<Route exact path="/friends" element={<Friends />} />
				</Route>

				<Route path="/login" element={<Login />} />
				<Route path="/otp" element={<VerificationCode />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
};

export default RouterConfig;
