import React from "react";
import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";

const RelatedProducts = ({ categoryId, productId }) => {
    const { data } = useFetch(
        `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
    );

    return (
        <div className="related-products">
            <Products headingText="Productos relacionados" products={data} />
        </div>
    );
};

export default RelatedProducts;
