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
            <label htmlFor="category">Category</label>
            <input type="text"  />
        </div>
        <div>
            <label htmlFor="stock">Stock</label>
            <input type="text"  />
        </div>
        <div>
            <label htmlFor="decription">Description</label>
            <input type="text"  />
        </div>
        <button className='bg-green-600 py-4 px-7 rounded-md border border-white'>Add</button>
      </form>
    </div>
  )
}

export default AddProduct
