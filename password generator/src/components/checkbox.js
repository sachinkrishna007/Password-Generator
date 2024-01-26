import React from 'react'

const Checkbox = () => {
    const {value,onChange} = props
  return (
    <div>
      <input type='checkbox' checked={value} onChange={onChange}></input>
    </div>
  )
}

export default Checkbox
