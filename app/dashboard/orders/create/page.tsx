import { Button } from '@/app/ui/button';
import { lusitana } from '@/app/ui/font';
import { CreateOrderTable } from '@/app/ui/orders/CreatedOrderTable';
import { CreateOrder } from '@/app/ui/orders/buttons';
import Search from '@/app/ui/search';
import Link from 'next/link';

async function  Page() {
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
        <h1 className={`${lusitana.className} text-2xl`}>Siparis Olustur</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Siparis Ara..." />
        <CreateOrder/>
      </div>
      <div>
        <CreateOrderTable products = {productsList} />
      </div>
     
    </div>
  )
}

export default Page