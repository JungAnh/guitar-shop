import React from 'react'
import "./Topselleramp.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { Navigation } from "swiper";

import { useParams } from "react-router-dom";
import dataAmp from '../../Data/dataAmp';
import dataAll from '../../Data/dataAll';


const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
      const res = dataAll.all.find(item => item.id + "" === id)
      setProduct(res)
  }, [id])

  if (!product) return ""
}

const Topselleramp = () => {

  
    return (
      <div className=" body">
        <div className="header-body">
          <div className="header-wrap">
            <h2 className="header-wrap-item" >Top seller Amp:</h2>
          </div>
        </div>
        <div className="body-topselleramp">
          <div className="container-swiper">
            <Swiper
              slidesPerView={4}
              slidesPerGroup={2}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
             {
              dataAmp.amp.map((item,index) => (
                <SwiperSlide>
              <div key={index} className="swiper-body">
                <div className="swiper-body-on-sale">
                  ON SALE!
                </div>
                <div className="swiper-body-top-seller">
                  TOPSELLER
                </div>
                <div className="swiper-body-img">
                  <Link className="swiper-body-img-item" to={`/${item.id}`}>
                    <img src= {item.image} alt="Squier Bullet Stratocaster" />
                  </Link>
                </div>
                <div className="swiper-body-info-box">
                  <h3>
                    <Link to={`/${item.id}`}>{item.name}</Link>
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
              ))
             }
              
              
              
            </Swiper>

          </div>
        </div>
      </div>
    )
  }

  export default Topselleramp





