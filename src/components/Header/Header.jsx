import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../redux/auth/auth-selectors';
import { useState } from 'react';
import { logout } from '../../redux/auth/auth-operations';
import Modal from 'shared/components/Modal/Modal';

import logo from '../../images/svg/Group.png';
import vector from '../../images/svg/Vector.svg';
import exit from '../../images/svg/exit.svg';

import styles from './Header.module.scss';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <div className={styles.containerInner}>
        <div className={styles.logoBox}>
          <img src={logo} width="40" height="40" alt="" />
          <p className={styles.wallet}>Wallet</p>
        </div>
        <div className={styles.exitBox}>
          <p className={styles.name}>{user.username}</p>
          <img className={styles.vector} src={vector} height="30" alt="" />
          <img onClick={toggleModal} className={styles.exit} src={exit} alt="" />
          <button onClick={toggleModal} className={styles.button} type="button">
            Exit
          </button>
          {showModal && (
            <Modal onClose={toggleModal}>
              <div className={styles.modal__wrapper}>
                <p className={styles.question}> Are you sure you want to exit ?</p>
                <div className={styles.button__wrapper}>
                  <button className={styles.button__question} onClick={onLogout}>
                    yes
                  </button>

                  <button className={styles.button__question} onClick={toggleModal}>
                    no
                  </button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;