import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Helmet = props => {
  useEffect(() => {
    document.title = 'Adidas - ' + props.title
  },[])

  return (
    <div>
      {props.children}
    </div>
  )

}

Helmet.propTypes = {
  title: PropTypes.string.isRequired
}

export default Helmet;