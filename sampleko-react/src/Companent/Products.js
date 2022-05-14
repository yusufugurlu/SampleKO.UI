import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';

function Products(props) {
    const [role, setRole] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        var getRole = localStorage.getItem('role');
        if (getRole) {
            setRole(getRole);
        }
    });



    useEffect(() => {
        if (data.length < 1) {
            var token = localStorage.getItem('accessToken');
            if (token) {
                setAccessToken(token);

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*",
                    }
                };

                axios.get(
                    'https://localhost:7024/api/Product/GetAll',
                    config
                ).then(response => {
                    console.log(response.data);
                    var productData = response.data;
                    if (response.status === 200) {
                        setData(productData.data);
                    }

                }).catch(console.log);
            }
        }
    }, []);

    return (
        <div>
            <label style={{ fontSize: "20px", textAlign: "center", marginTop: "20px" }} >{'Kullanıcı Rolü: ' + role}</label>

            <div style={{ fontSize: "20px", marginTop: "20px" }}>
                <label>Ürün Listesi</label>
            </div>
            <div style={{ marginTop: "10px" }}>
                {data.map((e) => {
                    return (
                        <Product Product={e} />
                    );
                })}
            </div>
        </div>

    );
}

export default Products;