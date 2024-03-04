
'use client'

import { fi } from "@faker-js/faker";
import { useState } from "react";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const GalleryUploader = ({ gallery, setGallery, previewGallery, setPreviewGallery }) => {
  // const [images, setImages] = useState(previewGallery);
  const [error, setError] = useState("");

  const handleFileUpload = (event) => {
    const fileList = event.target.files;
    const newImageFile = [fileList[0]];
    const newImages = [];
    // const maxSize = 1000; // in pixels

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          // if (img.width > maxSize || img.height > maxSize) {
          //   setError(
          //     `Image ${file.name} exceeds the maximum size of ${maxSize}px.`
          //   );
          // } else 
          if (
            !["image/png", "image/jpeg"].includes(file.type.toLowerCase())
          ) {
            setError(
              `Image ${file.name} is not a valid file type. Only PNG and JPEG are allowed.`
            );
          } else {
            newImages.push(reader.result);
            if (newImages.length == fileList.length) {
              setGallery([...gallery, ...newImageFile]);
              setPreviewGallery([...previewGallery, ...newImages]);
              setError("");
            }
          }
        };
        img.onerror = () => {
          setError(`Image ${file.name} could not be loaded.`);
        };
        img.src = reader.result;
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...gallery];
    const newImagesPreview = [...previewGallery];
    newImagesPreview.splice(index, 1);
    newImages.splice(index, 1);
    setGallery(newImages);
    setPreviewGallery(newImagesPreview);
  };

  return (
    <div className="row x-gap-20 y-gap-20 pt-15">
      <div className="col-auto">
        <div className="w-200">
          <label htmlFor="uploadGallery" className="d-flex ratio ratio-1:1">
            <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
              <div className="icon-upload-file text-40 text-blue-1 mb-10" />
              <div className="text-blue-1 fw-500">Upload Images</div>
            </div>
          </label>
          <input
            type="file"
            id="uploadGallery"
            multiple
            accept="image/png, image/jpeg"
            className="d-none"
            onChange={handleFileUpload}
          />
          <div className="text-start mt-10 text-14 text-light-1">
            PNG or JPG no bigger than 800px wide and tall.
          </div>
        </div>
      </div>
      {/* End uploader field */}

      {previewGallery.map((image, index) => (
        <div className="col-auto" key={index}>
          <div className="d-flex ratio ratio-1:1 w-200">
            <img src={image[0]=="/"?`${NEXT_PUBLIC_BACKEND_URL}/assets/images${image}`:image} alt="image" className="img-ratio rounded-4" />
            <div
              className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
              onClick={() => handleRemoveImage(index)}
            >
              <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
                <i className="icon-trash text-16" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {error && <div className="col-12 mb-10  text-red-1">{error}</div>}
    </div>
  );
};

export default GalleryUploader;
