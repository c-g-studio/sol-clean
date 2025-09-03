import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "./styles.module.scss";
import { Typography } from "@/components/common/Typography/Typography";
import { usePdfPreview } from "@/hooks/usePdfPreview";

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
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const preview = usePdfPreview(file!);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const selectedFile = e.target.files[0];

    // створюємо новий URL для кожного вибору
    const objectUrl = URL.createObjectURL(selectedFile);
    setFile(selectedFile);
    setPreviewUrl(objectUrl);

    // очищаємо value інпуту, щоб той самий файл можна було вибрати знову
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!e.dataTransfer.files.length) return;

    const droppedFile = e.dataTransfer.files[0];
    const objectUrl = URL.createObjectURL(droppedFile);
    setFile(droppedFile);
    setPreviewUrl(objectUrl);
  };

  const handleRemoveFile = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl); // чистимо blob з памʼяті
    }
    setFile(null);
    setPreviewUrl(null);

    if (inputRef.current) {
      inputRef.current.value = ""; // очищаємо інпут
    }
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
          accept=".pdf,.docx,.pptx,.txt,.xlsx,.png,.jpg,.jpeg"
        />

        {file ? (
          <div className={s.fileList}>
            <div className={s.fileListContainer}>
              <div className={s.fileItem}>
                <div className={s.preview}>
                  {file.type.startsWith("image/") ? (
                    <img
                      key={previewUrl} // 👈 завжди новий key, навіть для того ж файлу
                      src={previewUrl!}
                      alt={file.name}
                      width={60}
                      height={60}
                    />
                  ) : (
                    <div className={s.docPreview}>
                      {preview ? (
                        <img
                          key={previewUrl}
                          className={s.imagePreview}
                          src={preview}
                          alt={file.name}
                          width={60}
                        />
                      ) : (
                        <Image
                          src="/img/home/businessPartnerSection/docIcon.png"
                          alt="Document"
                          width={40}
                          height={40}
                        />
                      )}
                      <p className={s.fileName}>{file.name}</p>
                    </div>
                  )}
                </div>

                <button
                  className={s.changeBtn}
                  type="button"
                  onClick={handleRemoveFile}
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
