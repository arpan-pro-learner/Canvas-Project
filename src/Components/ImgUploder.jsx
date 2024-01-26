// ImageUploader.js
import PropTypes from "prop-types";

const ImageUploader = ({ onImageUpload }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      onImageUpload(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-4">
      <label className="block text-md font-semibold text-gray-700 font-mono">
        Choose an Image:
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mt-1 p-2 border rounded-lg focus:outline-none focus:border-black-100"
      />
    </div>
  );
};

ImageUploader.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
};

export default ImageUploader;
