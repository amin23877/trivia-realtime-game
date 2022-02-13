import React from "react";

import "./Wallet.scss";

//images
import profilePic from "assets/images/test/profile-pic-2.jpg";
import afghanWirelessLogo from "assets/images/logo/afghan-wireless-logo.png";
import backIcon from "assets/images/icons/arrow-back-friend-profile.svg";
import increaseIcon from "assets/images/icons/wallet-increas.svg";
import cashOutIcon from "assets/images/icons/wallet-cashout.svg";
import sendToIcon from "assets/images/icons/wallet-sendto.svg";
import transactionLAIcon from "assets/images/icons/transaction-la.svg";
import transactionIncreaseIcon from "assets/images/icons/transaction-increase.svg";
import transactionCOIcon from "assets/images/icons/transaction-cashout.svg";
import { useNavigate } from "react-router-dom";

/*
 * 	fake transaction
 * */
const transactions = [
	{ type: "League Award", date: "Wednesday, December 22, 2021", icon: transactionLAIcon, amount: "+ $90" },
	{ type: "Increase", date: "Wednesday, December 22, 2021", icon: transactionIncreaseIcon, amount: "+ $110" },
	{ type: "Cash Out", date: "Wednesday, December 22, 2021", icon: transactionCOIcon, amount: "- $220" },
	{ type: "League Award", date: "Wednesday, December 22, 2021", icon: transactionLAIcon, amount: "+ $150" },
	{ type: "Increase", date: "Wednesday, December 22, 2021", icon: transactionIncreaseIcon, amount: "+ $80" },
	{ type: "Increase", date: "Wednesday, December 22, 2021", icon: transactionIncreaseIcon, amount: "+ $50" },
];

const Transaction = ({ icon, type, date, amount }) => {
	let amountType = "increase";

	if (type === "League Award") {
		amountType = "league-award";
	} else if (type === "Cash Out") {
		amountType = "cash-out";
	}

	return (
		<li className="wallet-transactions-item">
			<img className="wallet-transactions-item__icon" alt="transaction" src={icon} />
			<div className="wallet-transactions-item__info-wrapper">
				<p className="wallet-transactions-item__type">{type}</p>
				<p className="wallet-transactions-item__date">{date}</p>
			</div>
			<p className={`wallet-transactions-item__${amountType}`}>{amount}</p>
		</li>
	);
};

const Wallet = () => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className="wallet-root">
			<div className="wallet-header">
				<div className="wallet-header__logo">
					<img onClick={handleGoBack} alt="" src={backIcon} className="wallet-header__back" />
					<img alt="logo" src={afghanWirelessLogo} />
					<p>Wallet</p>
				</div>

				<div className="wallet-own-info">
					<div className="wallet-own-info__avatar">
						<img width={32} alt="user-profile" src={profilePic} />
					</div>
					<div className="wallet-own-info__name">alireza pouyanfar</div>
					<div className="wallet-own-info__phone">+93 700 50 22 57</div>
				</div>
			</div>

			<div className="wallet-details">
				<div className="wallet-balance">
					<img width={36} height={36} className="d-none d-xl-inline" alt="logo" src={afghanWirelessLogo} />
					<p>MY Balance</p>
					<span className="wallet-details__line d-xl-none" />
					<p className="wallet-balance__amount">$ 18,240</p>
				</div>

				<div className="wallet-actions">
					<div className="wallet-actions__btn">
						<img alt="increase" src={increaseIcon} />
						Increase
					</div>
					<div className="wallet-actions__btn">
						<img alt="increase" src={cashOutIcon} />
						Cash Out
					</div>
					<div className="wallet-actions__btn">
						<img alt="increase" src={sendToIcon} />
						Send To
					</div>
				</div>
			</div>

			<p className="transaction-title">Transactions:</p>

			<ul className="wallet-transactions">
				{transactions.map((transaction, index) => (
					<Transaction key={index} {...transaction} />
				))}
			</ul>
		</div>
	);
};
export default Wallet;
