import { Link } from "react-router-dom";
import "./Guitaronsale.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";
import { useState } from "react";
import {  Navigation } from "swiper";
import dataGuitar from "../../Data/dataGuitar";
import dataAll from "../../Data/dataAll";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
      const res = dataAll.all.find(item => item.id + "" === id)
      setProduct(res)
  }, [id])

  if (!product) return ""
}

const Guitaronsale = () => {
  return (
    <div className=" body">
      <div className="header-body">
        <div className="header-wrap">
          <h2 className="header-wrap-item" >Guitar on Sales:</h2>
        </div>
      </div>
      <div className="body-guitaronsale">

        <div className="container-swiper">
          
          <Swiper
            slidesPerView={4}
            slidesPerGroup={2}
            navigation={true}
            modules={[ Navigation]}
            className="mySwiper"
          >

            {
              dataAll.all.map((item,index) => (
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
            {/* <SwiperSlide>
              <div className="swiper-body">
                <div className="swiper-body-on-sale">
                  ON SALE!
                </div>
                <div className="swiper-body-top-seller">
                  TOPSELLER
                </div>
                <div className="swiper-body-img">
                  <Link className="swiper-body-img-item" to="">
                    <img src="https://muzikercdn.com/uploads/products/2863/286399/main_6343f6f3.jpg" alt="Squier Bullet Stratocaster" />
                  </Link>
                </div>
                <div className="swiper-body-info-box">
                  <h3>
                    <Link to="">Squier Bullet Stratocaster</Link>
                  </h3>
                  <div className="type-rating">
                    <span>Electric guitar</span>
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
                      <span>166$</span>
                    </h2>
                    <p className="stock">
                      In Stock
                      <i className="fa-solid fa-square-check"></i>
                    </p>
                  </div>
                  <div className="control">
                    <button><i className="fa-solid fa-cart-shopping"></i></button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-body">
                <div className="swiper-body-on-sale">
                  ON SALE!
                </div>
                <div className="swiper-body-top-seller">
                  TOPSELLER
                </div>
                <div className="swiper-body-img">
                  <Link className="swiper-body-img-item" to="">
                    <img src="https://muzikercdn.com/uploads/products/3861/386169/main_2ab6b8fc.jpg" alt="Epiphone Les Paul Modern" />
                  </Link>
                </div>
                <div className="swiper-body-info-box">
                  <h3>
                    <Link to="">Epiphone Les Paul Modern</Link>
                  </h3>
                  <div className="type-rating">
                    <span>Electric guitar</span>
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
                      <span>890$</span>
                    </h2>
                    <p className="stock">
                      In Stock
                      <i className="fa-solid fa-square-check"></i>
                    </p>
                  </div>
                  <div className="control">
                    <button><i className="fa-solid fa-cart-shopping"></i></button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-body">
                <div className="swiper-body-on-sale">
                  ON SALE!
                </div>
                <div className="swiper-body-top-seller">
                  TOPSELLER
                </div>
                <div className="swiper-body-img">
                  <Link className="swiper-body-img-item" to="">
                    <img src="https://muzikercdn.com/uploads/products/6256/625697/main_b504a8bc.jpg" alt="Ibanez AZ2402" />
                  </Link>
                </div>
                <div className="swiper-body-info-box">
                  <h3>
                    <Link to="">Ibanez AZ2402</Link>
                  </h3>
                  <div className="type-rating">
                    <span>Electric guitar</span>
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
                      <span>1799$</span>
                    </h2>
                    <p className="stock">
                      In Stock
                      <i className="fa-solid fa-square-check"></i>
                    </p>
                  </div>
                  <div className="control">
                    <button><i className="fa-solid fa-cart-shopping"></i></button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-body">
                <div className="swiper-body-on-sale">
                  ON SALE!
                </div>
                <div className="swiper-body-top-seller">
                  TOPSELLER
                </div>
                <div className="swiper-body-img">
                  <Link className="swiper-body-img-item" to="">
                    <img src="https://muzikercdn.com/uploads/products/4863/486361/main_b818cc9b.jpg" alt="Takamine GC2" />
                  </Link>
                </div>
                <div className="swiper-body-info-box">
                  <h3>
                    <Link to="">Takamine GC2</Link>
                  </h3>
                  <div className="type-rating">
                    <span>Accoustic guitar</span>
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
                      <span>179$</span>
                    </h2>
                    <p className="stock">
                      In Stock
                      <i className="fa-solid fa-square-check"></i>
                    </p>
                  </div>
                  <div className="control">
                    <button><i className="fa-solid fa-cart-shopping"></i></button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-body">
                <div className="swiper-body-on-sale">
                  ON SALE!
                </div>
                <div className="swiper-body-top-seller">
                  TOPSELLER
                </div>
                <div className="swiper-body-img">
                  <Link className="swiper-body-img-item" to="">
                    <img src="https://muzikercdn.com/uploads/products/865/86510/main_072954d6.jpg" alt="Squier Bullet Stratocaster" />
                  </Link>
                </div>
                <div className="swiper-body-info-box">
                  <h3>
                    <Link to="">Squier Bullet Stratocaster</Link>
                  </h3>
                  <div className="type-rating">
                    <span>Electric guitar</span>
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
                      <span>166$</span>
                    </h2>
                    <p className="stock">
                      In Stock
                      <i className="fa-solid fa-square-check"></i>
                    </p>
                  </div>
                  <div className="control">
                    <button><i className="fa-solid fa-cart-shopping"></i></button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-body">
                <div className="swiper-body-on-sale">
                  ON SALE!
                </div>
                <div className="swiper-body-top-seller">
                  TOPSELLER
                </div>
                <div className="swiper-body-img">
                  <Link className="swiper-body-img-item" to="/">
                    <img src="https://muzikercdn.com/uploads/products/3861/386169/main_2ab6b8fc.jpg" alt="Squier Bullet Stratocaster" />
                  </Link>
                </div>
                <div className="swiper-body-info-box">
                  <h3>
                    <Link to="">Squier Bullet Stratocaster</Link>
                  </h3>
                  <div className="type-rating">
                    <span>Electric guitar</span>
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
                      <span>166$</span>
                    </h2>
                    <p className="stock">
                      In Stock
                      <i className="fa-solid fa-square-check"></i>
                    </p>
                  </div>
                  <div className="control">
                    <button><i className="fa-solid fa-cart-shopping"></i></button>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
            
          </Swiper>

        </div>
      </div>
    </div>
  )
}
export default Guitaronsale