import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p className="notification__text">{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;