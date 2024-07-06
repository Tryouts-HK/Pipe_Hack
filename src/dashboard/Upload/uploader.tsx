import React, { useState, useRef } from 'react';
import { FaImage } from 'react-icons/fa';
import './up.css'


interface ImageUploaderProps {
  setBase64Urls: React.Dispatch<React.SetStateAction<string[]>>;
  base64Urls: string[];
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ setBase64Urls, base64Urls }) => {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  //   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     if (event.target.files) {
  //       const files = Array.from(event.target.files);

  //       const uploadedImages = files.map(file => ({
  //         src: URL.createObjectURL(file),
  //         alt: file.name
  //       }));

  //       setImages(prevImages => [...prevImages, ...uploadedImages]);
  //     }
  //   };
  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const uploadedImages: any[] = [];
      const base64Promises: any[] = [];

      files.forEach(file => {
        uploadedImages.push({
          src: URL.createObjectURL(file),
          alt: file.name,
        });

        base64Promises.push(convertToBase64(file));
      });

      const base64Results = await Promise.all(base64Promises);
      setImages(prevImages => [...prevImages, ...uploadedImages]);
      setBase64Urls(prevBase64Urls => [...prevBase64Urls, ...base64Results]);
    }
  };
  const handleClearImages = () => {
    setImages([]);
    setBase64Urls([]);
    if (inputRef.current) {
      inputRef.current.value = ''; // Clear file input value to allow re-uploading same file
    }
  };

  //   const handleClearImages = () => {
  //     setImages([]);
  //     if (inputRef.current) {
  //       inputRef.current.value = ''; // Clear file input value to allow re-uploading same file
  //     }
  //   };

  return (
    <div className="mb-8">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        multiple
        className="hidden image-uploader"
        id="imageUploader"
      />
      <label
        htmlFor="imageUploader"
        className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600"
      >
        <FaImage className="mr-2" />
        Upload Image
      </label>
      <button
        onClick={handleClearImages}
        className={`mt-4 bg-red-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-red-600 ${images.length === 0 ? 'hidden' : ''
          }`}
      >
        Clear Images
      </button>
      <div className="images-preview mt-4 grid grid-cols-3 gap-4 overflow-y-auto" style={{ maxHeight: '300px' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="rounded-lg shadow-md hover:opacity-75 cursor-pointer transition duration-300 ease-in-out"
            onClick={() => window.open(image.src, '_blank')}
          />
        ))}
      </div>
      <div className="base64-urls">
        {base64Urls.map((url, index) => (
          <textarea key={index} readOnly value={url} className="base64-textarea" />
        ))}
      </div>
    </div>
  );
};

// export default ImageUploader;


// import React, { useState, useRef } from 'react';

// // Function to convert a file to Base64
// const convertToBase64 = (file: File) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onload = () => {
//       resolve(reader.result);
//     };

//     reader.onerror = (error) => {
//       reject(error);
//     };
//   });
// };

// const ImageUploader = () => {
//   const [images, setImages] = useState<{ src: string; alt: string }[]>([]);
//   const [base64Urls, setBase64Urls] = useState<string[]>([]);
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       const files = Array.from(event.target.files);
//       const uploadedImages: any[] = [];
//       const base64Promises: any[] = [];

//       files.forEach(file => {
//         uploadedImages.push({
//           src: URL.createObjectURL(file),
//           alt: file.name,
//         });

//         base64Promises.push(convertToBase64(file));
//       });

//       const base64Results = await Promise.all(base64Promises);
//       setImages(prevImages => [...prevImages, ...uploadedImages]);
//       setBase64Urls(prevBase64Urls => [...prevBase64Urls, ...base64Results]);
//     }
//   };

//   const handleClearImages = () => {
//     setImages([]);
//     setBase64Urls([]);
//     if (inputRef.current) {
//       inputRef.current.value = ''; // Clear file input value to allow re-uploading same file
//     }
//   };

//   return (
//     <div className="image-uploader">
//       <input
//         type="file"
//         multiple
//         accept="image/*"
//         ref={inputRef}
//         onChange={handleImageUpload}
//       />
//       <button onClick={handleClearImages}>Clear Images</button>
//       <div className="images-preview">
//         {images.map((image, index) => (
//           <img key={index} src={image.src} alt={image.alt} className="uploaded-image" />
//         ))}
//       </div>
//       <div className="base64-urls">
//         {base64Urls.map((url, index) => (
//           <textarea key={index} readOnly value={url} className="base64-textarea" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageUploader;
