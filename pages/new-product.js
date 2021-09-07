import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

// import NewProductForm from "../components/products/NewProductForm";
import NewProductForm from "../components/products/NewProductFormTest";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: maroon;
`;

const NewProductPage = () => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function addProductHandler(product) {
    const url = "/api/new-product";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    setSubmitting(true);
    setIsError(false);
    const response = await axios.post(url, product, config);
    const { data } = response;
    setSubmitting(false);
    console.log(data);

    if (data.error) {
      setIsError(true);
      setError(data.error);
    }

    if (!data.error) {
      setIsSuccess(true);
      setSuccess(data.message);
      setIsError(false);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }
  }

  return (
    <>
      {isError && (
        <div style={{ color: "red", textAlign: "center" }}>{error}</div>
      )}
      {isSuccess && (
        <div style={{ color: "#ad0244", textAlign: "center" }}>{success}</div>
      )}
      {submitting && (
        <div style={{textAlign:'center'}}>
          <SyncLoader css={override} color="#ad0244" />
        </div>
      )}
      <NewProductForm addFormData={addProductHandler} />
    </>
  );
};

export default NewProductPage;
