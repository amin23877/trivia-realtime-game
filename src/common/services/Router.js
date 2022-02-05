// #routerConfig step1
import React from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRouter";

import Menu from "pages/menu/Menu";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import Leagues from "pages/leagues/Leagues";
import Profile from "pages/profile/Profile";
import QuickPlay from "pages/quickPlay/QuickPlay";
import Wallet from "pages/menuPages/wallet/Wallet";
import ProfileEdit from "pages/profile-edit/ProfileEdit";
import Leaderboard from "pages/leaderboard/Leaderboard";
import VerificationCode from "pages/login/VerificationCode";
import SearchExplore from "pages/searchExplore/SearchExplore";
import Notification from "pages/menuPages/notification/Notification";
import LeaguesInner from "pages/leagues/leaguesComponents/LeaguesInner";
import LeaguesResult from "pages/leagues/leaguesComponents/LeaguesResult";
import LeaguesHistory from "pages/leagues/leaguesComponents/LeaguesHistory";
import HomeTopicsInner from "pages/home/homeComponents/homeTopics/HomeTopicsInner";
import HomeTopicsSeeAll from "pages/home/homeComponents/homeTopics/HomeTopicsSeeAll";
import ProfileFavoriteTopics from "pages/profile/profileComponents/Contents/FavoriteTopics/ProfileFavoriteTopics";
import ProfilePerformance from "pages/profile/profileComponents/Contents/Performance/ProfilePerformance";
import ProfileFriends from "pages/profile/profileComponents/Contents/Friends/ProfileFriends";
import TwoPlayers from "pages/quickPlay/twoPlayers/TwoPlayers";
import OnePlayer from "pages/quickPlay/onePlayer/OnePlayer";
import MainLayout from "common/components/layout/MainLayout";
import SuperCenterLayout from "common/components/layout/SuperCenterLayout";
import Subscribe from "pages/subscripe/Subscribe";
import WithFriends from "pages/quickPlay/withFriends/WithFriends";

const RouterConfig = () => {
	return (
		<Router>
			<Routes>
				{/* routes with main layout with footer on mobile */}
				<Route exact path="/" element={<ProtectedRoute />}>
					<Route exact path="/" element={<MainLayout footer />}>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/leagues" element={<Leagues />} />
						<Route exact path="/search" element={<SearchExplore />} />

						<Route exact path="/profile" element={<Profile />}>
							<Route exact path="/profile/favorite-topics" element={<ProfileFavoriteTopics />} />
							<Route exact path="/profile/performance" element={<ProfilePerformance />} />
							<Route exact path="/profile/friends" element={<ProfileFriends />} />
						</Route>
					</Route>
				</Route>

				{/* routes with main layout without footer */}
				<Route exact path="/" element={<MainLayout />}>
					<Route exact path="/topics/:id" element={<HomeTopicsInner />} />
					<Route exact path="/topics/all/:type" element={<HomeTopicsSeeAll />} />

					<Route exact path="/leaderboard" element={<Leaderboard />} />

					<Route exact path="/leagues/history" element={<LeaguesHistory />} />
					<Route exact path="/leagues/:id" element={<LeaguesInner />} />
					<Route exact path="/leagues/result" element={<LeaguesResult />} />

					<Route exact path="/" element={<ProtectedRoute />}>
						<Route exact path="/menu/wallet" element={<Wallet />} />
						<Route exact path="/profile/edit" element={<ProfileEdit />} />
					</Route>
				</Route>

				{/* routes with super centered layout */}
				<Route exact path="/" element={<SuperCenterLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/otp" element={<VerificationCode />} />
					<Route path="/purchase" element={<Subscribe />} />
				</Route>

				{/* this routes not have specific layout */}
				<Route exact path="/quickPlay" element={<ProtectedRoute />}>
					<Route exact path="/quickPlay" element={<QuickPlay />} />
					<Route exact path="/quickPlay/twoPlayers" element={<TwoPlayers />} />
					<Route exact path="/quickPlay/onePlayer" element={<OnePlayer />} />
					<Route exact path="/quickPlay/withFriends" element={<WithFriends />} />
				</Route>

				<Route exact path="/menu" element={<ProtectedRoute />}>
					<Route exact path="/menu" element={<Menu />} />
					<Route exact path="/menu/notification" element={<Notification />} />
				</Route>

				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
};

export default RouterConfig;
