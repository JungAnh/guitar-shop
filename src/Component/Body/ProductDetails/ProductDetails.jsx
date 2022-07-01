import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import "./ProductDetails.scss";
import dataAll from '../../Data/dataAll'
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
import Helmet from '../../Helmet/Helmet';




const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        const res = dataAll.all.find(item => item.id + "" === id)
        setProduct(res)
    }, [id])

    if (!product) return ""
    return (
        <Helmet title={product.name}>
            <div className='container'>

                <div className="product-header">
                    <span className='product-header-name'>{
                        product.name
                    }</span>
                    <span className='product-header-id'>
                        Product ID:
                        {
                            product.id
                        }
                    </span>

                </div>
                <div className="prd">
                    <div className="product-content">
                        <div className="product-header-wrap">

                            <div className="row">
                                <div className="col-6">
                                    <div className="product-header-left">
                                        <span className='product-header-img'>
                                            <img src={product.image} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="product-header-right">
                                        <span className='product-header-price'>
                                            <h2 className='price'> {product.price}</h2>
                                        </span>
                                        <span className='product-header-status'>{
                                            product.status
                                        }
                                        </span>
                                        <div className="product-content-action">
                                            <button className="add-to-card-btn">
                                                Add to cart
                                            </button>
                                            <h1>Khong tra tien Ship khong Ship hang</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>


                <div className="product-container">

                    <div className="product-container-recommended">
                        <h3>Recommended For You:</h3>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            {dataAll.all.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="swiper-body">
                                        <div className="swiper-body-img">

                                            <img src={item.image} alt="Squier Bullet Stratocaster" />

                                        </div>
                                        <div className="swiper-body-info-box">
                                            <h3>
                                                {item.name}
                                            </h3>
                                            <div className="type-rating">
                                                <span>{item.type}</span>
                                                <span>
                                                    <i className="fa-solid fa-star start"></i>
                                                    <i className="fa-solid fa-star start"></i>
                                                    <i className="fa-solid fa-star start"></i>
                                                    <i className="fa-solid fa-star start"></i>
                                                </span>
                                            </div>

                                        </div>
                                        <div className="swiper-body-price-box">
                                            <div className="price">
                                                <h2>
                                                    <div className="price-current"></div>
                                                    <span>{item.price}</span>
                                                </h2>
                                                <p className="stock">
                                                    {item.status}
                                                    <i className="fa-solid fa-square-check"></i>
                                                </p>
                                            </div>
                                            <div className="control">
                                                <button><i className="fa-solid fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>
                    <div className="product-container-overview">
                        <div className="product-container-overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="product-container-overview-table">
                            <table>
                                <tr>
                                    <td>
                                        Name:
                                    </td>
                                    <td>
                                        {product.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Brand:
                                    </td>
                                    <td>
                                        {product.brand}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Type:
                                    </td>
                                    <td>
                                        {product.type}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        String:
                                    </td>
                                    <td>
                                        {product.strings}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Pick-up:
                                    </td>
                                    <td>
                                        {product.pickups.config}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Neck:
                                    </td>
                                    <td>
                                        {product.pickups.neck}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Middle:
                                    </td>
                                    <td>
                                        {product.pickups.middle}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Bridge:
                                    </td>
                                    <td>
                                        {product.pickups.bridge}
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="product-container-descrip">
                        <h3>Description</h3>
                        {product.desc}
                    </div>
                </div>

            </div>
        </Helmet>
    )
}

export default ProductDetails