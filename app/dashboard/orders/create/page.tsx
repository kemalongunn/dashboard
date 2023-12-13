import { Button } from '@/app/ui/button';
import { lusitana } from '@/app/ui/font';
import { CreateOrder } from '@/app/ui/orders/buttons';
import { OrderTable } from '@/app/ui/orders/table';
import Search from '@/app/ui/search';
import Link from 'next/link';

async function  page() {
  const products = await fetch("http://localhost:8090/api/products", {
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTcwNTA2NzIzOX0.XoW4IXorM_9eHZzMfo-8o5PFRMo0Z8PPezg-fXVlH5H2ZUh7lFiN9Fczs8AxYcsCnztXqcOa3frPuUDIhUtySw' 
    },
  });
  const productsList = await products.json()
  return (
    <div className='w-full'>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Create Order</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search orders..." />
        <CreateOrder/>
      </div>
      <div>
        <OrderTable products = {productsList} />
      </div>
     
    </div>
  )
}

export default page