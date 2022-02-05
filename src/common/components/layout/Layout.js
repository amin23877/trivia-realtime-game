import PropTypes from "prop-types";
import MobileHeader from "../header/MobileHeader";

const Layout = ({ children, header = true, className = "" }) => {
	return (
		<div className={`w-100 h-100  ${className}`}>
			{header && (
				<div className="_header">
					<MobileHeader />
				</div>
			)}
			{children ? children : null}
			{/* <div style={{height: 70}} className="_footer w-100">
        <Footer />
      </div> */}
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	header: PropTypes.bool,
};

export default Layout;
