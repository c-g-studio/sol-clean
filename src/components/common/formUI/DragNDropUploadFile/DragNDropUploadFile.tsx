'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import s from './styles.module.scss';
import { Typography } from '@/components/common/Typography/Typography';
import { useFilePreview } from '@/hooks/uploadPreview';

interface DragNdropProps {
  value?: File | null; // ✅ може бути File | null | undefined
  onFileSelected: (file: File | null) => void;
  width?: string | number;
  height?: string | number;
}

export const DragNDropUploadFile: React.FC<DragNdropProps> = ({
  value,
  onFileSelected,
  width,
  height
}) => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // універсальний хук для превʼю
  const { type, preview } = useFilePreview(file);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const newFile = e.target.files[0];
    setFile(newFile);
    onFileSelected(newFile); // ⚡ одразу пробиваємо у форму
    e.target.value = ''; // щоб можна було вибрати той самий файл знову
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!e.dataTransfer.files.length) return;
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    onFileSelected(droppedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    onFileSelected(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  // ✅ Синхронізація з RHF (Controller може кинути undefined/null/File)
  useEffect(() => {
    if (value === undefined) return; // форма ще не ініціалізована
    if (value === null) {
      setFile(null);
      if (inputRef.current) inputRef.current.value = '';
    } else {
      setFile(value);
    }
  }, [value]);

  return (
    <div className={s.dragDrop} style={{ width, height }}>
      <Typography variant="h3" className={s.title}>
        CV
      </Typography>

      <div
        className={`${s.documentUploader} ${file ? s.active : ''}`}
        onDrop={handleDrop}
        onDragOver={event => event.preventDefault()}
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
                  {/* превʼю залежно від типу */}
                  {type === 'image' && preview && (
                    <img
                      key={preview}
                      className={s.imagePreview}
                      src={preview}
                      alt={file.name}
                      width={60}
                      height={60}
                    />
                  )}

                  {type === 'pdf' && preview && (
                    <img
                      key={preview}
                      className={s.imagePreview}
                      src={preview}
                      alt={file.name}
                      width={60}
                    />
                  )}

                  {type === 'txt' && (
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

                  {(type === 'docx' || type === 'other') && (
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
