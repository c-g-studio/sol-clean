import React, { useEffect, useState } from "react";
import Image from "next/image";
import s from "./styles.module.scss";
import { Typography } from '@/components/common/Typography/Typography';

interface DragNdropProps {
    onFilesSelected: (files: File[]) => void;
    width?: string | number;
    height?: string | number;
}

export const DragNDropUploadFile: React.FC<DragNdropProps> = ({
    onFilesSelected,
    width,
    height,
}) => {
    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            const newFiles = Array.from(selectedFiles);
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
            const newFiles = Array.from(droppedFiles);
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    const handleRemoveFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    useEffect(() => {
        onFilesSelected(files);
    }, [files, onFilesSelected]);

    return (
        <div
            className={s.dragDrop}
            style={{ width: width, height: height }}
        >
            <Typography variant="h3" className={s.title}>
                CV
            </Typography>
            <div
                className={`${s.documentUploader} ${files.length > 0 ? s.active : ""
                    }`}
                onDrop={handleDrop}
                onDragOver={(event) => event.preventDefault()}
            >
                <>
                    <div className={s.uploadInfo}>
                        {/* <AiOutlineCloudUpload /> */}
                        {/* <div>
                            <p>Drag and drop your files here</p>
                            <p>
                                Limit 15MB per file. Supported files: .PDF, .DOCX, .PPTX, .TXT,
                                .XLSX
                            </p>
                        </div> */}
                    </div>
                    <input
                        type="file"
                        id="browse"
                        className={s.hiddenInput}
                        onChange={handleFileChange}
                        accept=".pdf,.docx,.pptx,.txt,.xlsx"
                        multiple
                    />
                    {files.length > 0 ? (
                        <div className={s.fileList}>
                            <div className={s.fileListContainer}>
                                {files.map((file, index) => (
                                    <div className={s.fileItem} key={index}>
                                        {/* <div className={s.fileInfo}>
                                            <p>{file.name}</p>
                                        </div> */}
                                        <button
                                            className={s.changeBtn}
                                            type="button"
                                            onClick={() => handleRemoveFile(index)}
                                        >
                                            Change
                                        </button>
                                        <div className={s.fileActions}>
                                            <Image
                                                src="/img/home/businessPartnerSection/trashCan.png"
                                                alt="Upload"
                                                width={26}
                                                height={26}
                                                onClick={() => handleRemoveFile(index)}
                                            />
                                        </div>
                                    </div>
                                ))}
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

                        </label>)}
                </>




                {/* {files.length > 0 && (
                    <div className={s.successFile}>
                        <AiOutlineCheckCircle style={{ color: "#6DC24B", marginRight: 1 }} />
                        <p>{files.length} file(s) selected</p>
                    </div>
                )} */}
            </div>
        </div>
    );
};
