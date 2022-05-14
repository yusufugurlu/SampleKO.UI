import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Product(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (props.Product)
            setData(props.Product);

    }, [props.Product]);

    return (
        <div>
            <div style={{ borderStyle: "solid", marginBottom: "10px" }}>

                <p> {"Marka: " + data.brandName}</p>
                <p>   {"Ürün: " + data.name}</p>
                <p> {"Açılama: " + data.description}</p>
                <p>   {"Stok: " + data.stock+" Adet"}</p>
                <p>  {"Fiyat: " + data.amount +" TL"}</p>

            </div>
        </div>

    );
}

export default Product;