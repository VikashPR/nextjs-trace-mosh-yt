"use client";

import React from 'react'
import styles from "./ProductCard.module.css"

const ProductCard = () => {
  return (
    <>  
      <div
      className={styles.card}
      onCLick ={() => console.log("bruh")}
      >
        Add to Kart
      </div>
    </>
  )
}

export default ProductCard