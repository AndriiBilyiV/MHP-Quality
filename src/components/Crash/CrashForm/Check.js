import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    userSelect: 'none',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const ModalCheck = ({ close, isShown, redactor, time, date }) => {
  return (
    <Modal
      isOpen={isShown}
      onRequestClose={close}
      style={customStyles}
      contentLabel="Check"
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <p>{`Запис вніс: ${redactor.position} - ${redactor.name}`}</p>{' '}
      <p>{`Дата запису: ${date}`}</p> <p>{`Час запису: ${time}`}</p>
    </Modal>
  );
};

export const Check = ({ value }) => {
  const { date, redactor, time, status } = value;
  const [isShown, setIsShown] = useState(false);
  const toggleModal = () => {
    setIsShown(state => !state);
  };
  const icon = () => {
    switch (status) {
      case 'unhurt':
        return <FaCheck size={20} />;
      case 'broken':
        return <ImCross size={18} />;
      default:
        return null;
    }
  };
  return (
    <>
      <div onClick={() => toggleModal()}>{icon()}</div>
      <ModalCheck
        close={toggleModal}
        isShown={isShown}
        date={date}
        time={time}
        redactor={redactor}
      />
    </>
  );
};
export const Unhurt = () => {
  return;
};
