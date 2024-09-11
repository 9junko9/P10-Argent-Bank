import PropTypes from "prop-types";

const FeatureItem = ({ imgSrc, title, description }) => (
  <div className="feature-item">
    <img src={imgSrc} alt="Feature Icon" className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>{description}</p>
  </div>
);

FeatureItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureItem;
