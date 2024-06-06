import React, { useEffect, useState } from 'react'

const CreateProduct = () => {

    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        setIsOpen(true);
    })
  return (
    <div>
      {isOpen && (
        <input type="text" />
      )}
    </div>
  )
}

export default CreateProduct
