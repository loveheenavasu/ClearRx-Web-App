import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./uploadcertificate.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UplaodIcon from "assets/svg/UploadIcon";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import PdfIcon from "assets/svg/PdfIcon";
import UploadIconCross from "assets/svg/UploadIconCross";
import { toBase64 } from "utils/helper";
import useIsmobile from "hooks/useResize";

export default function UploadCertificate({ label, setFieldValue }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const isMobile = useIsmobile();

  const onDrop = async (acceptedFiles) => {
    const files = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    const base64FilesPromises = files.map((file) => toBase64(file));
    const base64Files = await Promise.all(base64FilesPromises);
    setFieldValue("uploadCertificate", [...uploadedFiles, ...base64Files]);
    setUploadedFiles([...uploadedFiles, ...base64Files]);
  };

  const handleDelete = (fileIndex) => {
    console.log("delete button is pressed");
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(fileIndex, 1);
    setUploadedFiles(updatedFiles);
  };

  return (
    <>
      <Row className=" upload-certificate-parent mb-20 ">
        <Form.Group
          as={Col}
          md="4"
          style={{ width: "100%" }}
          controlId="validationCustom01"
        >
          <Form.Label className={`label mb-2 ${isMobile ? "fs-11" : "fs-16"}`}>
            {label} <span className="red fs-12">*</span>
          </Form.Label>
          {uploadedFiles.length === 0 ? (
            <Dropzone
              // accept={{
              //   "application/pdf": [".pdf"],
              // }}
              multiple={true}
              onDrop={(acceptedFile) => onDrop(acceptedFile)}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} accept="application/pdf" />

                    <Row className="upload-certificate mx-1">
                      <>
                        <UplaodIcon />
                        <p
                          className="text-center fs-9"
                          style={{
                            color: "#3DB8ED",
                            marginTop: "0.75rem",
                            marginBottom: "0.375rem",
                          }}
                        >
                          Select a file or take a photo
                        </p>
                        <p className="text-center fs-11">
                          JPG, PNG or PDF, file size no more than 10MB
                        </p>
                      </>
                    </Row>
                  </div>
                </section>
              )}
            </Dropzone>
          ) : (
            <Row className="upload mx-1">
              {uploadedFiles?.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="pdf-icon d-flex justify-content-start Regular shadow"
                  >
                    <PdfIcon />
                    <UploadIconCross onClick={() => handleDelete(index)} />
                  </div>
                  {console.log(item, "asdlhjaslhsfisbfb")}
                  {/* <span className="blue">{item?.name}</span> */}
                </>
              ))}
            </Row>
          )}
        </Form.Group>
      </Row>
    </>
  );
}
UploadCertificate.propTypes = {
  label: PropTypes.string,
};
