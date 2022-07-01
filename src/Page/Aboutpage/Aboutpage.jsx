import React from 'react'
import About from '../../Component/Body/About/About'
import Footer from '../../Component/Footer/Footer'
import Header from '../../Component/Header/Header'
import Helmet from '../../Component/Helmet/Helmet'

const Aboutpage = () => {
  return (
    <Helmet title='About'>
        <Header/>
        <About/>
        <Footer/>
    </Helmet>
  )
}

export default Aboutpage