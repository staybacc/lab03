import {useState} from "react";
import trashCanImage from 'E:/untitled/src/trash-can.png';

export default function ProductApp(){
    const imageStyle = {
        width: '20px',
        height: '20px'
    }
    const [products, setProducts] = useState([]);

    const handleDeleteProduct = (product) => {
        const updatedProducts = products.filter((p) => p !== product);
        setProducts(updatedProducts);
    };

    return(
        <div className={"entire-product-list"}>
        <div className={"input-and-button"}><input id={"input-1"} type={"text"} placeholder={"Product Name"}/>
        <button id={"button-add"} onClick={()=> {
            const element = document.getElementById("input-1").value + " ";
           if(!products.includes(element)) setProducts([element, ...products] )
        }}>Add</button>
            <div className={"product-list"}>
            {products.map((product, index) => (
                <p key={index} className="product-item">
                    {product}
                    <button  className={"delete-button"} onClick={()=> handleDeleteProduct(product)}>
                        <img src={trashCanImage} alt={"image"} style={imageStyle}/>
                    </button>
                </p>
            ))}
            </div>
        </div>

        </div>
    )
}