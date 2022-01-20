// Reacts
import React from 'react';
// Hooks
// Packages
// Components, Services, Functions
import { MODALS } from 'common/values/MODALS';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { SET_MODALS } from 'redux/actions/mainActions/generalActions';
// Material - lab
import { Modal } from '@material-ui/core'; // #modal step0
// Styles, Icons, Images
import './ModalConfirmDeactivation.scss';
import InfoIcon from '@material-ui/icons/Info';

const ModalConfirmDeactivation = () => {
  const dispatch = useDispatch();
  const stateGeneral = useSelector((state) => state.stateGeneral);

  const handleClose = () => {
    // #modalUse step2
    dispatch(SET_MODALS({ [MODALS.deactivation]: false }));
  };

  return (
    // #modal step1
    <Modal
      open={stateGeneral.modals[MODALS.deactivation]}
      onClose={handleClose}
    >
      <div className='w-100 h-100 d-flex justify-content-center align-items-center _modal-center'>
        <div className='_modal-body modal-deactivation'>
          <InfoIcon className='icon' />
          <p className='_br-bottom'>Do you want to deactivate your account?</p>
          <p
            className='_br-bottom _cursor-pointer deactivate'
            onClick={handleClose}
          >
            deactivate
          </p>
          <p className='_cursor-pointer' onClick={handleClose}>
            cancel
          </p>
        </div>
      </div>
    </Modal>
  );
};
export default ModalConfirmDeactivation;
