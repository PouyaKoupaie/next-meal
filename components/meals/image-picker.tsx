"use client";
import { useRef, useState } from "react";
import style from "./image-picker.module.css";
import Image from "next/image";
interface ImagePickerProps {
  label: string;
  name: string;
}
export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const imageInput = useRef<HTMLInputElement | null>(null);
  function handleClick() {
    if (imageInput.current) {
      imageInput.current.click();
    }
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result !== null) {
          setPickedImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <div className={style.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={style.controls}>
        <div className={style.preview}>
            {pickedImage ? (
                <Image
                className={style.image}
                src={pickedImage as string}
                alt="Preview"
                fill
                />
            ) : <p>No image chosen</p>}
        </div>
        <input
          ref={imageInput}
          className={style.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/jpg"
          name={name}
          onChange={handleChange}
        />
      <button className={style.button} type="button" onClick={handleClick}>
        Pick an Image
      </button>
      </div>
    </div>
  );
}
