import React from 'react'

function AddProduct() {
  return (
    <div className='w-full'>
      <form action="" className='w-8/12 flex flex-col items-center p-6'>
        <div>
            <label htmlFor="Name">Name</label>
            <input type="text"  />
        </div>
        <div>
            <label htmlFor="price">price</label>
            <input type="number"  />
        </div>
        <div>
            <label htmlFor="brand">Brand</label>
            <input type="text"  />
        </div>
        <div>
            <label htmlFor="decription">Description</label>
            <input type="text"  />
        </div>
      </form>
    </div>
  )
}

export default AddProduct
