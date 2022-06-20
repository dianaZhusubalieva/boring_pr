import React, { useState } from "react";
import { Product } from "../../api/types/types";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { EDIT_PAGE } from "../../utils/urls";

interface CardProps {
  product: Product;
}

const ProductCard: React.FC<CardProps> = ({ product }) => {
  const params = useParams();
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(
    ""
  );
  return (
    <div className="card">
      <figure className="card__thumb">
        <img src={product.image} className="card__image" />
        <figcaption className="card__caption">
          <h2 className="card__title">{product.description}</h2>
          <p className="card__snippet">{product.price + "$"}</p>
          <Link to={EDIT_PAGE}>
            <Button
              variant="outline-secondary"
              onClick={(params) => {
                // setSelectedProduct(params);
                // console.log(selectedProduct);
              }}
            >
              edit
            </Button>
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default ProductCard;
