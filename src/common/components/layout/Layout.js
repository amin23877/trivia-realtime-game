import {React} from "react"
import PropTypes from "prop-types"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const Layout = ({children,header = true,className = ""}) => {
  return (
    <div className={`w-100 h-100  ${className}`}>
      {header &&
        <div className="_header">
          <Header />
        </div>
      }
      <div>
        {children}
      </div>
      <div className="_footer position-fixed fixed-bottom w-100">
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.bool,
}

export default Layout
