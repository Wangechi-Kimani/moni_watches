import { useState } from "react";

import Card from "../ui/Card";
import classes from "./NewProductForm.module.css";

function NewProductForm(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  function resetFormData(event) {
    setTitle('');
    setPrice('');
    setDesc('');
    document.getElementById('file').value = ''
  }

  async function submitHandler(event) {
    event.preventDefault();

    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("description", desc);
    formData.append("title", title);

    props.addFormData(formData);
    resetFormData();
  }

  //   async function fileUpload(file) {
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("price", price);
  //     formData.append("description", desc);
  //     formData.append("title", title);

  //     const config = {
  //       headers: {
  //         "content-type": "multipart/form-data",
  //       },
  //     };

  //     return post(url, formData, config);
  //   }

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            required
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            required
            id="price"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price || ""}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            rows="5"
            name="description"
            onChange={(e) => setDesc(e.target.value)}
            value={desc || ""}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Product Image</label>
          <input
            type="file"
            required
            id="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <span className={classes.imageSize}>Upload image file should be less than 2MB</span>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add product</button>
        </div>
      </form>
    </div>
  );
}

export default NewProductForm;
