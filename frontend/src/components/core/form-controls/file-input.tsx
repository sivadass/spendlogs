import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import { uploadInstance } from "../../../utils/axios";
import { transformImageURL } from "../../../utils/common";
import Spinner from "./spinner";

const UploadingView = () => {
  return (
    <StyledUploadContainer>
      <Spinner color="green" />
    </StyledUploadContainer>
  );
};

interface UploadedListProps {
  file: string;
  onRemove: (e: any) => any;
}

const UploadedList: React.FC<UploadedListProps> = ({ file, onRemove }) => {
  return (
    <ul className="uploaded-list">
      <li key={file}>
        <div className="image-preview">
          <img src={transformImageURL(file)} alt="Preview" />
        </div>
        <div className="image-meta">
          <a href={file} target="_blank" rel="noopener noreferrer">
            {file}
          </a>
        </div>
        <div className="image-actions">
          <button
            className="remove"
            onClick={e => {
              e.preventDefault();
              onRemove(e);
            }}
          >
            &times;
          </button>
        </div>
      </li>
    </ul>
  );
};

interface FileInputProps {
  type: string;
  label: string;
  placeholder: string;
  className: string;
  required?: boolean;
  field: any;
  form: any;
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
  required = false,
  className,
  field,
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileURL, setFileURL] = useState<string>(field.value);

  const onDrop = (acceptedFiles: any, rejectedFiles: any) => {
    handleImageUpload(acceptedFiles);
  };

  const handleImageUpload = (fileData: any) => {
    const file = fileData[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`
    );
    setIsLoading(true);
    uploadInstance
      .post("/", formData)
      .then(res => {
        setFileURL(res.data.secure_url);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handelImageRemove = (image: any) => {
    setFileURL("");
  };

  useEffect(() => {
    setFieldValue(field.name, fileURL);
  }, [fileURL]);

  return (
    <StyledDropZone>
      <Dropzone accept="image/jpg, image/jpeg, application/pdf" onDrop={onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={classNames("dropzone", {
                "dropzone-active": isDragActive,
                errors: errors[`${field.name}`] && touched
              })}
            >
              {label && (
                <FormLabel htmlFor={field.name}>
                  {label} {required && <span>*</span>}
                </FormLabel>
              )}
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="field-control">Drop files here...</p>
              ) : !isLoading ? (
                <p className="field-control">Select or drop JPG or PDF file</p>
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
      {fileURL.length > 0 && (
        <UploadedList file={fileURL} onRemove={handelImageRemove} />
      )}
    </StyledDropZone>
  );
};

const StyledUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormLabel = styled.label`
  font-size: 13px;
  line-height: 20px;
  display: block;
  width: 100%;
  color: rgba(0, 0, 0, 0.54);
  span {
    color: #ff5722;
  }
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
          font-size: 14px;
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
