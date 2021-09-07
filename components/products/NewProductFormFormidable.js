import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewProductForm.module.css';

function NewProductFormFormidable(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const productData = {
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      description: enteredDescription,
    };

    props.onAddproduct(productData);
    
  }

  function fileUpload(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("title", title);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return post(url, formData, config);
  }


  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Product Title</label>
          <input type='text' required id='title' ref={titleInputRef} name='title' />
        </div>
        
        <div className={classes.control}>
          <label htmlFor='price'>Price</label>
          <input type='number' required id='price' ref={priceInputRef} name='price'/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
            name='description'
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Product Image</label>
          <input type='file' required id='image' ref={imageInputRef} name='file'/>
        </div>
        <div className={classes.actions}>
          <button>Add product</button>
        </div>
      </form>
    </Card>
  );
}

export default NewProductFormFormidable;
