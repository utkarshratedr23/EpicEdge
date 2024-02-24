import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card'
const Home = () => {
    const addToCartHandler=()=>{

    }
  return (
    <div className='home'>
        <section></section>
        <h1>Latest Products 
            <Link to={"/search"} className="findmore"> More </Link>
        </h1>
        <main>
        <ProductCard
              productId="mjfhi"
              name="Macbook"
              price={56000}
              stock={457}
              handler={addToCartHandler}
              photo="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.aptronixindia.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F31f0162e6f7d821d2237f39577122a8a%2F1%2F3%2F13_inch_macbook_air_cto_fileminimizer__1_1_.png&tbnid=BpiRkCR3bszcsM&vet=12ahUKEwjiuoDf6sSEAxXgb2wGHd4cCAgQMygbegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fwww.aptronixindia.com%2F13-inch-macbook-air-apple-m1-chip&docid=LcraUZHHF39wIM&w=600&h=417&q=macbook&ved=2ahUKEwjiuoDf6sSEAxXgb2wGHd4cCAgQMygbegUIARDjAQ"
            />
        </main>
    </div>
  )
}

export default Home