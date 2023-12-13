'use client';

import {
 PlusSmallIcon,
 MinusSmallIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../button';

export  function OrderTable({products}:any) {
  const [quantity,setQuantity] = useState(0);
 
  const handleChangeQuantity = (e:any) => {
    setQuantity(e.target.value);
  }
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }
  const handleDecrease = () => {
    setQuantity((prevQuantity) => prevQuantity - 1)
  }
  console.log(products)
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {products?.map((product:any) => (
              <div
                key={product.productStockCode}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{product.productStockName}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table table-auto">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Ürün Adı
                </th>
                <th scope="col" className="px-3 py-5 font-medium flex justify-center">
                  Miktar
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products?.map((product:any) => (
                <tr
                  key={product.productStockCode}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {product.productStockName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 item flex justify-center">
                    <div className="relative flex max-w-[8rem] items-center">
                      <button
                      onClick={handleIncrease}
                        className="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <PlusSmallIcon className='w-5'/>
                      </button>
                      <input
                        type="number"
                        id="quantity-input"
                        data-input-counter
                        className="block h-11 w-20 border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder={quantity.toString()}
                        required
                        disabled
                        onChange={handleChangeQuantity}
                      />
                      <button
                        onClick={handleDecrease}
                        className="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <MinusSmallIcon className='w-5'/>
                      </button>
                   
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/orders"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button  type="submit">Create Order</Button>
      </div>
      </div>
    </div>
  );
}
