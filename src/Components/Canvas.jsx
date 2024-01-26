import PropTypes from 'prop-types';

const Canvas = ({ heading, ctaContent, backgroundImage, canvasBgColor }) => {
  const canvasContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '750px',
    backgroundColor: canvasBgColor || '#0369A1',
    overflow: 'hidden',
  
  };

  const canvasStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const textStyles = {
    position: 'absolute',
    top: '5%',
    left: '0%',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    maxWidth: '70%',
    wordBreak: 'break-word',
  };

  const ctaStyles = {
    position: 'absolute',
    top: '5%',
    right: '10%',
    padding: '10px 20px',
    color: 'white',
    cursor: 'pointer',
  };

  const imageStyles = {
    position: 'absolute',
    bottom: '-1rem',
    left: '0',
    width: '100%',
    height: '450px',
    border: '5px solid white',
  };

  return (
    <div style={canvasContainerStyle} className="border rounded-md md:flex-row md:mt-28  lg:mt-28 lg:ml-16 lg:mb-10 ">
      {/* Canvas */}
      <div style={canvasStyle}>
        <div style={textStyles} className="text-white font-bold text-lg sm:m-auto">
          {heading}
        </div>
        <button
          style={ctaStyles}
          className="bg-blue-500 text-white font-bold rounded-lg cursor-pointer hover:shadow-xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          {ctaContent}
        </button>
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt="User Uploaded Image"
            style={imageStyles}
            className="border-5 border-white"
          />
        )}
        {!backgroundImage && (
          <div style={imageStyles} className="bg-gray-200">
           Please Upload An Image
          </div>
        )}
      </div>
    </div>
  );
};

Canvas.propTypes = {
  heading: PropTypes.string.isRequired,
  ctaContent: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  canvasBgColor: PropTypes.string,
  onColorChange: PropTypes.func.isRequired,
};

Canvas.defaultProps = {
  backgroundImage: '',
  canvasBgColor: '#0369A1',
};

export default Canvas;
