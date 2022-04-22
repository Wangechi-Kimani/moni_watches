import { useRouter } from "next/router";
import { useRef, useState, useEffect, Fragment } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

import  classes  from "../styles/analog_watch.module.css";

import ProductList from "../components/products/ProductList";
import Button from "../components/ui/Button";
import { connectDB, getProducts } from "../utils/db";
import { fetchProducts } from "../utils/helpers";

const AnalogWatchesPage = (props) => {
  const products = props.watches;
  const prevPageNum = useRef();

  const [currentPage, setCurrentPage] = useState(1);
  const [nextPrevProducts, setNextPrevProducts] = useState([]);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [loading, setLoading] = useState(false);


  //custom hook
  useEffect(async () => {
    prevPageNum.current = currentPage;
    setShowNextBtn(true);

    if (currentPage === 1) {
      setNextPrevProducts([]);
    } else {
      const fetchedProducts = await fetchProducts(currentPage);
      setNextPrevProducts(fetchedProducts);
      // setLoading(false);
      // console.log(fetchedProducts);
    }
    // console.log(currentPage);
  }, [currentPage]);

  const goToNextPage = async () => {
    setCurrentPage(prevPageNum.current + 1);
  };

  const goToPrevPage = async () => {
    setCurrentPage(prevPageNum.current - 1);
  };

  // if (loading) {
  //   return (
  //     <div style={{ textAlign: "center" }}>
  //       {/* <ScaleLoader color="#ad0244" /> */}
  //       {/* <p>Loading...</p> */}
  //     </div>
  //   );
  // }

  if (nextPrevProducts.length === 0 && currentPage !== 1) {
    return (
      <div style={{textAlign: 'center'}}>
        <p>No available products</p>
        <Button onClick={goToPrevPage}>Prev Page</Button>
      </div>
    );
  }

  if(loading) return <p>Loading...</p>

  return (
    <Fragment> 
      {/* {loading && <p>Loading...</p>} */}
      {currentPage === 1 && <ProductList products={products} />}
      {/* {nextPrevProducts !== null && <ProductList products={nextPrevProducts} />} */}
      {nextPrevProducts !== 1 && <ProductList products={nextPrevProducts} />}

      <div className={classes.container}>
        {currentPage !== 1 && (
          <div>
            <Button onClick={goToPrevPage}>Prev Page</Button>
          </div>
        )}
        {showNextBtn && (
          <div>
            <Button onClick={goToNextPage}>Next Page</Button>
          </div>
        )}
      </div>
    </Fragment>
  );

  // return <ProductList products={products} />
};

export default AnalogWatchesPage;

export async function getStaticProps() {
  try {
    const client = await connectDB();

    const watches = await getProducts(client, "watches", 0, 5);
    // console.log(watches.length);

    client.close();

    return {
      props: {
        watches: watches.map((watch) => ({
          title: watch.title,
          price: watch.price,
          image: watch.image,
          // image: watch.path.substring(6),
          id: watch._id.toString(),
        })),
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
  }
}
