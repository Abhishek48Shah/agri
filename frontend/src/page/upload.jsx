import react from "react";
import { useState } from "react";
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };
  const formData = new FormData();
  formData.append("image", selectedFile);
  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/plant/diagnose", {
        method: POST,
        body: formData,
      });
      if (!response.ok) {
        throw new Error(response.message);
      }
      setResponse(response.message);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <section className="h-screen w-screen gap-10">
        <h1>Upload image here</h1>
        <input
          type="file"
          className="border-2 border-dashed border-green-800  p-2 rounded"
          onChange={handleFileChange}
        />
        {fileName && <p>{fileName}</p>}
        <button
          className="border-3 border-dashed border-green-800 rounded p-2"
          onClick={handleClick}
        >
          Upload
        </button>
        {response && <p>{response}</p>}
      </section>
    </>
  );
};
export default FileUpload;
