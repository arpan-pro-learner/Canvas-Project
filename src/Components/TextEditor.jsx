// TextEditor.js
import PropTypes from 'prop-types';

const TextEditor = ({ label, value, onUpdate }) => {
  const handleTextChange = (e) => {
    onUpdate(e.target.value);
  };

  return (
    <div className=" mb-10 relative">
      <label className="block text-md font-semibold text-gray-700 font-mono">{label}:</label>
      <input
        type="text"
        value={value}
        onChange={handleTextChange}
        className="mt-1 p-2 border rounded-lg w-80 focus:outline-none focus:border-blue-800"
      />
    </div>
  );
};

TextEditor.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TextEditor;
