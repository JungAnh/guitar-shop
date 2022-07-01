import React from 'react'
import { Link } from 'react-router-dom';
import "./Product.scss";
import { useState } from 'react';
import dataAll from '../../Data/dataAll';

const Product = () => {
  const [items, setItems] = useState(12);
  const loadMore = () => {
    setItems(items + 8);
  };
  
  const slice = dataAll.all.slice(0, items);
  
  
  return (
    <div className='product-page'>
      {/* <div className='search-bar'>
        <label className='search-label' htmlFor="search"></label>
        <input className='search-input' type="text" placeholder='Search ...' />
      </div> */}
      <div className='container'>
        <div className="row">
          {/* <div className="col-3 p-0">
            <div className="container-filters">
              <h1 className='container-filters-title'>Filters:</h1>
              <h3>Category:</h3>
              <ul>
                <li>
                  <label htmlFor="guitar">Guitar</label>
                  <input type="checkbox" />
                </li>
                <li>
                  <label htmlFor="guitar">Amp</label>
                  <input type="checkbox" />
                </li>
              </ul>
              <h3>Brand:</h3>
              <ul>
                <li>
                  <label htmlFor="guitar">Fender</label>
                  <input type="checkbox" />
                </li>
                <li>
                  <label htmlFor="guitar">Fender Squier</label>
                  <input type="checkbox" />
                </li>
                <li>
                  <label htmlFor="guitar">Ibanez</label>
                  <input type="checkbox" />
                </li>
                <li>
                  <label htmlFor="guitar">Yamaha</label>
                  <input type="checkbox" />
                </li>
                <li>
                  <label htmlFor="guitar">Gibson</label>
                  <input type="checkbox" />
                </li>
                <li>
                  <label htmlFor="guitar">Epiphone</label>
                  <input type="checkbox" />
                </li>
                <li>
                  <label htmlFor="guitar">Takamine</label>
                  <input type="checkbox" />
                </li>
                <li>
                  <label htmlFor="guitar">Cort</label>
                  <input type="checkbox" />
                </li>
                <li>
                  <label htmlFor="guitar">Jackson</label>
                  <input type="checkbox" />
                </li><li>
                  <label htmlFor="guitar">Chapman</label>
                  <input type="checkbox" />
                </li><li>
                  <label htmlFor="guitar">Vox</label>
                  <input type="checkbox" />
                </li><li>
                  <label htmlFor="guitar">Marshall</label>
                  <input type="checkbox" />
                </li><li>
                  <label htmlFor="guitar">Orange</label>
                  <input type="checkbox" />
                </li><li>
                  <label htmlFor="guitar">Boss</label>
                  <input type="checkbox" />
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-12 p-0">
            <div className="container">
              <div className="row">
                {slice.map((item, index) => (

                  <div key={index} className="container-products-body col-3  ">
                    <div className="container-products-body-wrap">
                      <div className="container-products-body-on-sale">
                        ON SALE!
                      </div>
                      <div className="container-products-body-img">
                        <Link className="container-products-body-img-item" to={`/${item.id}`}>
                          <img src={item.image} alt="" />
                        </Link>
                      </div>
                      <div className="container-products-body-info-box">
                        <h3>
                          <Link to={`/${item.id}`}>
                            {item.name}
                          </Link>
                        </h3>
                        <div className="container-products-body-info-box-type-rating">
                          <span>{item.type}</span>
                          <span>
                            <i className="fa-solid fa-star start"></i>
                            <i className="fa-solid fa-star start"></i>
                            <i className="fa-solid fa-star start"></i>
                            <i className="fa-solid fa-star start"></i>
                          </span>
                        </div>

                      </div>
                      <div className="container-products-body-price-box">
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
                  </div>
                ))}
              </div>
            </div>
            <button className='load-more' onClick={() => loadMore() }>Load More</button>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Product