// import React from 'react' // Used to be required for every React component.
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd }) => {
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'crimson' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.prototypes = {
  title: PropTypes.string.isRequired,
}


export default Header

// import React from 'react'
// import PropTypes from 'prop-types'

// const Header = props => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// Header.defaultProps = {
//   title: 'Bio'
// }

// Header.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   gender: PropTypes.string, //optional
  

// }

// export default Header
