import { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AddEditProduct from './AddEditProduct';


const Index = () => {    
    // This state is use for handeling open close modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // fetch product data from local storage
    const [fetchData, setFetchData] = useState([])

    // This state use for update product id
    const [updateProductId, setUpdateProductId] = useState(0);

    // This function is use for open modal
    const openModal = () => {
        setIsModalOpen(true);
    };
    
    // This function is use for close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    // This functin use for fetch data from local storage
    const fetchDataFromLocalStorage = () => {
      const data = localStorage.getItem('product');
        if (data) {
          setFetchData(JSON.parse(data));
        }
    };
  
    // This function is use for deleteing product from localstorage
    const handleDeleteProduct = (id) =>{
      const updatedData = fetchData.filter((item) => item.id !== id);
      setFetchData(updatedData);
      localStorage.setItem('product', JSON.stringify(updatedData));
    }

    // This function is use for getting update id
    const handleUpdateProduct = (id) => {
      setUpdateProductId(id)
      setIsModalOpen(true);
    }

    useEffect(() => {
      fetchDataFromLocalStorage();
    }, []); 
    
    
  return (    
    <div className="relative h-screen overflow-scroll">
        <div className='flex items-center justify-end bg-[#1A1C23] p-3'>
            <h1 className='mr-auto font-bold text-white text-xl uppercase'>Product List</h1>    
            
            {/* Add Products AddEdit Modal */}
            <AddEditProduct isOpen={isModalOpen} onClose={closeModal} fetchDataFromLocalStorage={fetchDataFromLocalStorage} updateProductId={updateProductId}/>
            <button type="button" onClick={openModal} className="font-medium rounded-lg text-sm px-5 py-2.5 ml-2 text-center inline-flex items-center text-white bg-gray-600 border-2 hover:bg-white hover:text-gray-600 hover:border-2 hover:border-gray-600">
                Add Product
            </button>

        </div>

        {/* This is a table showing user's */}
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white uppercase bg-black">
              <tr>
                <th scope="col" className="px-6 py-3">
                    Image 
                </th>
                <th scope="col" className="px-6 py-3">
                    Name 
                </th>
                <th scope="col" className="px-6 py-3">
                    Price 
                </th>
                <th scope="col" className="px-6 py-3">
                    Stock 
                </th>
                <th scope="col" className="px-6 py-3">
                    Sku
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {
                fetchData.length > 0 ?
                fetchData.map((item,index) => {
                  return(
                    <>
                      <tr key={index} className="bg-[#1A1C23] border-b">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div className="flex items-center justify-start">
                                  <img className="w-10 h-10 rounded" src="/images/FreshVegetable.png" alt="product"/>
                              </div>
                          </th>
                          <td className="px-6 py-4">
                              {item.name}
                          </td>
                          <td className="px-6 py-4">
                              <b>₹</b> {"100"}
                          </td>
                          <td className="px-6 py-4">
                              {"05"}
                          </td>
                          <td className="px-6 py-4">
                              {"HJGDSJ"}
                          </td>
                          <td className="px-6 py-4">
                              {"Nice apples"}
                          </td>
                          <td className="px-6 py-4">
                              <div className='flex text-xl'>
                                  <FiEdit onClick={() => handleUpdateProduct(item.id)} className="text-blue-500 cursor-pointer mx-1"/>
                                  <RiDeleteBin6Line onClick={() => handleDeleteProduct(item.id)} className="text-red-500 cursor-pointer"/>
                              </div>
                          </td>
                      </tr>
                    </>
                  )
                })
                :
                <tr className='bg-[#1A1C23] border-b text-center font-bold uppercase'>
                  <td colSpan={7} className='px-6 py-4'>
                    <span>Products not found</span>
                  </td>
                </tr>
              }
            </tbody>
        </table>
    </div>
  )
}

export default Index