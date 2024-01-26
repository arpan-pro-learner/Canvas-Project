// App.js
import { useState, useEffect } from "react";
import TextEditor from "./Components/TextEditor";
import ImageUploader from "./Components/ImgUploder";
import Canvas from "./Components/Canvas";
import { SketchPicker } from "react-color";
import templateData from "./data/templateData.json";

const App = () => {
  const [image, setImage] = useState(null);
  const [heading, setHeading] = useState("");
  const [ctaContent, setCtaContent] = useState("");
  const [canvasBgColor, setCanvasBgColor] = useState("#0369A1"); // Default color
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    // Set the state using imported JSON data
    setHeading(templateData.caption.text);
    setCtaContent(templateData.cta.text);
    setCanvasBgColor(templateData.canvasBgColor);
  }, []);

  const handleImageUpload = (selectedImage) => {
    setImage(selectedImage);
  };

  const updateHeading = (newHeading) => {
    setHeading(newHeading);
  };

  const updateCtaContent = (newCtaContent) => {
    setCtaContent(newCtaContent);
  };

  const handleColorPickerToggle = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (color) => {
    setCanvasBgColor(color.hex);
  };

  return (
    <div className="flex flex-col md:flex-row  h-screen">
      {/* Canvas Section */}
      <div className="flex-1 border-none p-4">
        <Canvas
          heading={heading}
          ctaContent={ctaContent}
          backgroundImage={image}
          canvasBgColor={canvasBgColor}
          onColorChange={handleColorChange}
        />
      </div>

      {/* Right side section Main canvas*/}
      <div className="flex-1 flex flex-col items-center justify-center p-4 ">
        <div className="text-center mb-10 relative bottom-18 ">
          <h2 className="text-2xl font-bold font-mono">Ad Customization</h2>
          <p className="text-sm text-gray-500 mt-1 font-mono ">
            Customize your ad and get the template accordingly
          </p>
        </div>
        {/* Right side section Main canvas*/}
        {/* Image Uploader */}
        <div className="mb-5">
          <ImageUploader onImageUpload={handleImageUpload} />
        </div>

        {/* text Editor Component right section  */}
        <TextEditor
          label="Edit Heading"
          value={heading}
          onUpdate={updateHeading}
        />
        <TextEditor
          label="Edit CTA Content"
          value={ctaContent}
          onUpdate={updateCtaContent}
        />
        {/* text Editor Component right section  */}

        {/* Color Picker */}
        <div className="mb-20">
          <p
            onClick={handleColorPickerToggle}
            style={{ cursor: "pointer", color: "Grey" }}
          >
            Change Background Color 🎨
          </p>
          {showColorPicker && (
            <SketchPicker color={canvasBgColor} onChange={handleColorChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
