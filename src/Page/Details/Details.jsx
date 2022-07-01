import React from 'react'
import ProductDetails from '../../Component/Body/ProductDetails/ProductDetails'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Helmet from '../../Component/Helmet/Helmet'

const Details = () => {
  return (
    <Helmet title=''>
        <Header/>
        <ProductDetails/>
        <Footer/>
    </Helmet>
  )
}

export default Details