import { useState } from "react";

const App = () => {
  // what do we need to track
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [displayImage, setDisplayImage] = useState(null);
  const [dogImage, setDogImage] = useState(null);
  const [message, setMessage] = useState("");


  // Handlers
  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  // fetch functions -> fetch a random single image
  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);

      const blob = await response.blob(); // we made a blob - Binary Large Object
      // but thats not an image, so we need to make an image element

      // using createObjectURL
      const imageUrl = URL.createObjectURL(blob);
      setDisplayImage(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  // fetch functions -> save single
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", singleFile);
      
      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // fetch functions -> save multiple [TODO]
  const fetchMultipleFiles = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/multiple`);
      const files = await response.json();
      setMultipleFiles(files);
    } catch (error) {
      console.error("Error fetching multiple files:", error);
    }
  };
  // fetch functions -> fetch multiple [TODO]
  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };
  // fetch functions -> fetch dog image [TODO]
  const uploadDogImage = async () => {
    try {
      const response = await fetch(dogImage);
      const blob = await response.blob();
      const formData = new FormData();
      formData.append("file", new File([blob], "dog.jpg"));
  
      const uploadResponse = await fetch("http://localhost:8000/save/single", {
        method: "POST",
        body: formData,
      });
  
      const uploadData = await uploadResponse.json();
      if (uploadResponse.ok) {
        setMessage("Dog image uploaded successfully!");
      } else {
        throw new Error(uploadData.error || "Dog image upload failed");
      }
    } catch (error) {
      console.error("Error uploading dog image:", error);
    }
  };

  return (
    <div>
      <p>{message}</p>
      <h2>Fetch Single Random Image</h2>
      <button onClick={fetchSingleFile}>Fetch Single File</button>
      {displayImage && (
        <div>
          <h3>Single File</h3>
          <img
            src={displayImage}
            alt="Display Image"
            style={{ width: "200px", marginTop: "10px" }}
          />
        </div>
      )}
      <form onSubmit={handleSubmitSingleFile}>
        <h2>Upload Single File</h2>
        <input type="file" onChange={handleSingleFileChange} />
        <button type="submit">Upload Single File</button>
      </form>
      
      <h2>Fetch Multiple Random Images</h2>
      <button onClick={fetchMultipleFiles}>Fetch Multiple Images</button>
      <div>
        {multipleFiles.map((file, index) => (
          <img
            key={index}
            src={`http://localhost:8000/uploads/${file}`}
            alt={`Random ${index}`}
            style={{ width: "200px", margin: "10px" }}
          />
        ))}
    </div>

    <h2>Fetch and Upload Random Dog Image</h2>
      <button onClick={fetchDogImage}>Get Random Dog Image</button>
      {dogImage && (
        <div>
          <img src={dogImage} alt="Random Dog" width="200" />
          <button onClick={uploadDogImage}>Upload Dog Image to Server</button>
        </div>
      )}
    </div>
  );
};

export default App;
