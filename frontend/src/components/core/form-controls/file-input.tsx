import React, { useState } from "react";
import classNames from "classnames";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import axios from "axios";
import Spinner from "./spinner";

const UploadingView = () => {
  return (
    <StyledUploadContainer>
      <Spinner color="green" />
    </StyledUploadContainer>
  );
};

interface UploadedListProps {
  images: any;
  onRemove: any;
}

const UploadedList: React.FC<UploadedListProps> = ({ images, onRemove }) => {
  return (
    <ul className="uploaded-list">
      {images.map((image: any) => (
        <li key={image}>
          <div className="image-preview">
            <img src={image} alt="Preview" />
          </div>
          <div className="image-meta">
            <a href={image} target="_blank" rel="noopener noreferrer">
              {image}
            </a>
          </div>
          <div className="image-actions">
            <button
              className="remove"
              onClick={e => {
                e.preventDefault();
                onRemove(image, e);
              }}
            >
              &times;
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

interface FileInputProps {
  type: string;
  label: string;
  placeholder: string;
  className: string;
  field: any;
  form: any;
  setFieldValue: any;
}

interface IUser {
  username: string;
  email: string;
  password: string;
}

const FileInput: React.FC<FileInputProps> = ({
  type,
  label,
  placeholder,
  className,
  field,
  form: { touched, errors },
  setFieldValue,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const onDrop = (acceptedFiles: any, rejectedFiles: any) => {
    handleImageUpload(acceptedFiles);
  };

  const handleImageUpload = (fileData: any) => {
    const file = fileData[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "x5xzimft");
    formData.append("folder", "clients-logo");
    setIsLoading(true);
    axios({
      url: process.env.REACT_APP_CLOUDINARY_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: formData
    })
      .then(res => {
        const updatedImages = [...images, res.data.secure_url];
        setImages(updatedImages);
        setFieldValue(field.name, images);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handelImageRemove = (image: any) => {
    let images = [...image];
    const index = images.indexOf(image);
    images.splice(index, 1);
    setImages(images);
    setFieldValue(field.name, images);
  };

  return (
    <StyledDropZone>
      <Dropzone accept="image/jpeg" onDrop={onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={classNames("dropzone", {
                "dropzone-active": isDragActive,
                errors: errors[`${field.name}`] && touched
              })}
            >
              {label && <label className="field-label">{label}</label>}
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="field-control">Drop files here...</p>
              ) : !isLoading ? (
                <p className="field-control">Select or drop files here</p>
              ) : (
                <UploadingView />
              )}
              {errors && touched && (
                <p className="field-error">{errors[`${field.name}`]}</p>
              )}
            </div>
          );
        }}
      </Dropzone>
      {images.length > 0 && (
        <UploadedList images={images} onRemove={handelImageRemove} />
      )}
    </StyledDropZone>
  );
};

const StyledUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDropZone = styled.div`
  .dropzone {
    margin-bottom: 16px;
    .field-control {
      border: 1px solid rgba(0, 0, 0, 0.1);
      min-height: 36px;
      text-align: center;
      padding: 24px;
      border-radius: 4px;
    }
    &.dropzone-active {
      .field-control {
        background: #d9eedc;
        color: #7bc884;
        border-color: #7bc884;
      }
    }
  }

  .uploaded-list {
    li {
      background: #f5f5f5;
      border-radius: 4px;
      margin-bottom: 8px;
      display: flex;

      .image-preview {
        img {
          width: 64px;
          height: 64px;
          object-fit: cover;
          margin-right: 16px;
          border-radius: 5px;
        }
      }
      .image-meta {
        word-break: break-all;
        padding: 8px 0;
        a {
          color: #666;
        }
      }
      .image-actions {
        margin-left: 16px;
        flex-basis: 32px;
        padding: 8px 16px;
        .remove {
          border: none;
          height: 24px;
          width: 24px;
          padding: 0;
          background: red;
          color: #fff;
          font-size: 18px;
        }
      }
    }
  }
`;

export default FileInput;
