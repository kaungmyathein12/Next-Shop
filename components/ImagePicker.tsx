import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const ImagePicker = ({ onHandleImage }: any) => {
  const [previewImage, setPreviewImage] = useState<string>("");
  const [fileSize, setFileSize] = useState("0 KB");

  function formatFileSize(bytes: any) {
    if (bytes == 0) return "0 Bytes";
    var k = 1000,
      sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed()) + " " + sizes[i];
  }

  const previewFunc = (image: any) => {
    if (image) {
      const blob = URL.createObjectURL(image);
      if (image.type.includes("image")) {
        setPreviewImage(blob);
        onHandleImage(image);
        const fileSize = formatFileSize(image.size);
        setFileSize(fileSize);
      }
    }
  };

  return (
    <div className="mt-2 border h-[150px] rounded-md">
      {previewImage ? (
        <div className="w-full h-full p-3 flex flex-row justify-start items-center relative">
          <button
            className="absolute right-2 top-1 hover:opacity-20"
            onClick={() => setPreviewImage("")}
          >
            <i className="ri-close-line"></i>
          </button>

          <motion.div
            initial={{ width: 0, height: 0 }}
            animate={{ width: "130px", height: "100%" }}
            className="w-[130px] h-full rounded relative overflow-hidden border"
          >
            <Image src={previewImage} fill alt="image" objectFit="cover" />
          </motion.div>

          <div className="ml-4">
            <h5 className="text-xs mb-1">Name - Sushi.png</h5>
            <h5 className="text-[10px] opacity-50">Size - {fileSize}</h5>
          </div>
        </div>
      ) : (
        <div className="w-full h-full grid place-items-center relative">
          <div className="text-center group">
            <i className="ri-image-line text-2xl opacity-40 group-hover:opacity-20"></i>

            <span className="block text-xs opacity-50 group-hover:opacity-20">
              Choose Image
            </span>

            <input
              type="file"
              onClick={(e: any) => (e.target.value = "")}
              onChange={(e: any) => {
                previewFunc(e.target.files[0]);
              }}
              className="absolute inset-0 opacity-0"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePicker;
