import PropTypes from 'prop-types';

const FeedbackButtons = ({
  options,
  onBtnClick,
}) => {
  


  return options.map(valio => {
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
  btnOptions: PropTypes.array,
  onBtnClick: PropTypes.func,
};

export default FeedbackButtons;
