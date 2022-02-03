import React, {useRef} from "react"
import {createPortal} from "react-dom"
import PropTypes from "prop-types"

//---assets
import "./ChangeProfilePicModal.scss";
//---components
//
const ChangeProfilePicModal = ({cb,onClose,onRemovePhoto}) => {
  const fileInputRef = useRef();
  const changeInputHandler = (e) => {
    const file = e.currentTarget.files[0];
    if(file) {
      cb(file)
    }
  }
  const selectFileHandler = () => {
    fileInputRef?.current?.click();
  }
  return createPortal(
		<>
      <div onClick={onClose} style={{zIndex: 9}} className="backdrop"></div>
			<dialog open className="custom-modal">
        <input ref={fileInputRef} type="file" onChange={changeInputHandler}  hidden />
				<button onClick={onRemovePhoto} className="custom-modal--remove">
					Remove Profile Photo
				</button>
				<button onClick={selectFileHandler} className="custom-modal--new">
					New Profile Photo
				</button>
				<button onClick={onClose} className="custom-modal--cancel">
					Cancel
				</button>
			</dialog>
		</>,
		document.body
  );
}
ChangeProfilePicModal.propTypes = {
  onClose: PropTypes.func,
  onRemove: PropTypes.func,
  cb: PropTypes.func,
}
export default ChangeProfilePicModal;
