
import { Button, Link } from '@heroui/react';
import CartCard from './CartCard'
import { toast } from 'react-toastify';





const CartPage = ({ selectedProducts, setSelectedProducts }) => {

  const handleDeleteProduct = (cartProduct) =>{
    const RemainingProducts = selectedProducts.filter(selectedProduct =>(selectedProduct.id !== cartProduct.id));
    setSelectedProducts(RemainingProducts);
    toast.info('Products removed from the cart');
  }


  const handleCheckout = () =>{
    setSelectedProducts([]);
    toast.success('Selected products proceed to checkout.....')
  }

  return (
    <div className='shadow-md rounded-2xl my-20 p-15 container mx-auto'>


      <div>
        {selectedProducts.length > 0 ?
          <div>
            <h3 className='font-semibold text-2xl text-start'>Your Cart</h3>
            {selectedProducts.map(cartProduct => <CartCard handleDeleteProduct={handleDeleteProduct} key={cartProduct.id} cartProduct={cartProduct}></CartCard>)}
            < div className="mt-6">
              <Button onClick={handleCheckout} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full btn-block">Proceed To Checkout</Button>
            </div>
          </div>
          :
          <div className=''>
            <h3 className='text-2xl font-semibold my-4'>You don`t have anything in the cart!</h3>
            <Button><Link className={'text-white'} href='/ProductsPage' >Add Products</Link></Button>
          </div>
        }
      </div>

    </div >
  );
};

export default CartPage;