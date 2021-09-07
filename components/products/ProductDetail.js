import {useState} from "react";
import classes from "./ProductDetail.module.css";
import { useRouter } from "next/router";


function ProductDetail(props) {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  async function addToCartHandler() { 
    setIsLoading(true);
    setDisabled(true);
    
    const product = {
      id:props.id,
      price:props.price,
      title:props.title,
      image:props.image
    }
    addItem(product);

    setTimeout(() => {
      setIsLoading(false);
      setDisabled(false);
    }, 2000);
  }

  function addToCheckOutHandler() {
    router.push('/checkout');
  }


  return (
    <section className={classes.container}>
      <div className={classes.section}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
          <div className={classes.details}>
            <h2>{props.title}</h2>
            <h3>Ksh.{props.price}</h3>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <div>
              <span>
                {/* <Button>Add To Cart</Button> */}
                <button onClick={addToCartHandler} disabled={disabled}>{isLoading ? "Loading" : "Add To Cart"}</button>
              </span>
            </div>
            <div>
            {/* <Button>Buy Now</Button> */}
            <button onClick={addToCheckOutHandler}>buy now</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.specification}>
        <h4>Specifictions</h4>
        <div className={classes.specDetails}>
          <div>
            {specs.map((spec, index) => (
              <p key={index}>{spec}</p>
            ))}
          </div>
          <div>
            {moreSpecs.map((spec, index) => (
              <p key={index}>{spec}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const specs = [
  "Brand Name:UOSU",
  "Origin:CN(Origin)",
  "Case Material:Stainless Steel",
  "Movement:Automatic Self-Wind",
  "Band Width:16mm",
  "Feature:luminous hands",
  "Case Thickness:13mm",
  "Band Length:23mm",
  "Dial Diameter:26mm",
];
const moreSpecs = [
  "Water Resistance Depth: 3Bar",
  "Clasp Type: Folding Clasp with Safety",
  "Style: Dress",
  'Case Shape: Round',
  "Feature: Water Resistant",
  "Model Number: MG065T",
  "Dial Window Material Type: Hardlex",
  "Boxes & Cases Material: Paper",
  "Band Material Type: Stainless Steel",
];

const allSpecs = [
  "Brand Name: UOSU",
  "Water Resistance Depth: 3Bar",
  "Origin: CN(Origin)",
  "Clasp Type: Folding Clasp with Safety",
  "Case Material: Stainless Steel",
  "Style: Dress",
  "Movement: Automatic Self-WindCase",
  "Shape: RoundBand",
  "Width: 16mm;",
  "Feature: Water Resistant",
  "Feature: luminous hands",
  "Model Number: MG065T",
  "Case Thickness: 13mm",
  "Dial Window Material Type: Hardlex",
  "Band Length: 23cm",
  "Boxes & Cases Material: Paper",
  "Dial Diameter: 36mm",
  "Band Material Type: Stainless Steel",
];

export default ProductDetail;
