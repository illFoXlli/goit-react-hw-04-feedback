import PropTypes from 'prop-types';

const FeedbackButtons = ({ btnOptions, onBtnClick }) => {
  return btnOptions.map(valio => {
    return (
      <button
        key={valio}
        onClick={onBtnClick}
        type="button"
        name={valio}
      >
        {valio.charAt(0).toUpperCase() + valio.slice(1)}
      </button>
    );
  });
};

FeedbackButtons.propTypes = {
  btnOptions: PropTypes.arrayOf(PropTypes.string.isRequired)
    .isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default FeedbackButtons;
