import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "./styles.module.scss";
import { Typography } from "@/components/common/Typography/Typography";
import { useFilePreview } from "@/hooks/uploadPreview";

interface DragNdropProps {
  onFileSelected: (file: File | null) => void;
  width?: string | number;
  height?: string | number;
}

export const DragNDropUploadFile: React.FC<DragNdropProps> = ({
  onFileSelected,
  width,
  height,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // універсальний хук для превʼю
  const { type, preview } = useFilePreview(file);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    setFile(e.target.files[0]);
    e.target.value = ""; // щоб можна було вибрати той самий файл знову
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!e.dataTransfer.files.length) return;
    setFile(e.dataTransfer.files[0]);
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    onFileSelected(file);
  }, [file, onFileSelected]);

  return (
    <div className={s.dragDrop} style={{ width, height }}>
      <Typography variant="h3" className={s.title}>
        CV
      </Typography>

      <div
        className={`${s.documentUploader} ${file ? s.active : ""}`}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className={s.uploadInfo}></div>

        <input
          ref={inputRef}
          type="file"
          id="browse"
          className={s.hiddenInput}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
        />

        {file ? (
          <div className={s.fileList}>
            <div className={s.fileListContainer}>
              <div className={s.fileItem}>
                <div className={s.preview}>
                  {/* 👇 превʼю залежно від типу */}
                  {type === "image" && preview && (
                    <img
                      key={preview}
                      className={s.imagePreview}
                      src={preview}
                      alt={file.name}
                      width={60}
                      height={60}
                    />
                  )}

                  {type === "pdf" && preview && (
                    <img
                      key={preview}
                      className={s.imagePreview}
                      src={preview}
                      alt={file.name}
                      width={60}
                    />
                  )}

                  {type === "txt" && preview && (
                    <div className={s.docPreview}>
                      <Image
                        src="/img/notFound/docIcon.png"
                        alt="Document"
                        width={40}
                        height={40}
                      />
                      <p className={s.fileName}>txt</p>
                    </div>
                  )}

                  {(type === "docx" || type === "other") && (
                    <div className={s.docPreview}>
                      <Image
                        src="/img/notFound/docIcon.png"
                        alt="Document"
                        width={40}
                        height={40}
                      />
                      <p className={s.fileName}>docx</p>
                    </div>
                  )}
                </div>

                <button
                  className={s.changeBtn}
                  type="button"
                  onClick={() => {
                    // при кліку відкриваємо файл-пікер
                    if (inputRef.current) {
                      inputRef.current.click();
                    }
                  }}
                >
                  Change
                </button>

                <div className={s.fileActions}>
                  <Image
                    src="/img/home/businessPartnerSection/trashCan.png"
                    alt="Remove"
                    width={26}
                    height={26}
                    onClick={handleRemoveFile}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <label htmlFor="browse" className={s.browseBtn}>
            <Image
              src="/img/home/businessPartnerSection/uploadIcon.png"
              alt="Upload"
              width={43}
              height={43}
            />
          </label>
        )}
      </div>
    </div>
  );
};
