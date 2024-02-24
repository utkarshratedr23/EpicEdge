import { FaPlus } from "react-icons/fa";

type ProductProps={
    productId:string;
    photo:string;
    handler:()=>void;
    name:string
    price:number;
    stock:number;
}
const server="jljjlgb"
const ProductCard=({productId,price,name,photo,stock,handler}:ProductProps)=>{
    return <div className="productCard">
    <img src={photo} alt={name}/>
    <p>{name}</p>
    <span>{price}Rs</span>
    <div>
        <button onClickCapture={()=>handler()}>
            <FaPlus/>
        </button>
    </div>
    </div>
    
}
export default ProductCard
