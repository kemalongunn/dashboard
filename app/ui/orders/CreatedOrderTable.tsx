'use client';

import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/outline';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export function CreateOrderTable({ products }: any) {
  const [quantity, setQuantity] = useState(0);
  const [orderItems, setOrderItems] = useState<{ productStockCode: string; productQuantity: number }[]>([]);
  const router = useRouter()
  const {replace,refresh} = useRouter();
  const handleChangeQuantity = (productStockCode: string, newQuantity: number) => {
    setOrderItems((prevOrderItems) => {
      const updatedOrderItems = [...prevOrderItems];
      const index = updatedOrderItems.findIndex(item => item.productStockCode === productStockCode);

      if (index !== -1) {
        updatedOrderItems[index] = { productStockCode, productQuantity: newQuantity };
      } else {
        updatedOrderItems.push({ productStockCode, productQuantity: newQuantity });
      }

      return updatedOrderItems;
    });
  };

  const handleIncrease = (productStockCode: string) => {
    handleChangeQuantity(productStockCode, (orderItems.find(item => item.productStockCode === productStockCode)?.productQuantity || 0) + 1);
  };
  const handleDecrease = (productStockCode: string) => {
    handleChangeQuantity(
      productStockCode,
      Math.max(0, (orderItems.find(item => item.productStockCode === productStockCode)?.productQuantity || 0) - 1)
    );
  };
 
  const handleCreateOrder = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTcwNTEzNDU2OH0.Xj-uJ8sRbHzCpXWtkTdSmdI337sXXQ7n-MlRZL_AYaJ8H_Thp0M4-iQvLtvIasB-bNE7S5CrbETJPI8aPPepJw" ,
      };    
      let payload =  {
        "totalOrderRow": orderItems.length,
        "orderStatus": {
            "id": 1,
        },
        "customerId": 1003,
        "orderRows": orderItems
    }
      // API'ye POST isteği yap
      const response = await fetch("http://localhost:8090/api/orders", {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push('/dashboard/orders');
        router.refresh();
        
      } else {
        console.error('Sipariş oluşturulurken bir hata oluştu:', response.status);
      }
    } catch (error:any) {
      console.error('Sipariş oluşturulurken bir hata oluştu:', error.message);
    }
  };

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {products?.map((product: any) => (
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
          <table className="hidden min-w-full table-auto text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Ürün Adı
                </th>
                <th
                  scope="col"
                  className="flex justify-center px-3 py-5 font-medium"
                >
                  Miktar
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products?.map((product: any) => (
                <tr
                  key={product.productStockCode}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {product.productStockName}
                  </td>
                  <td className="item flex justify-center whitespace-nowrap px-3 py-3">
                    <div className="relative flex max-w-[8rem] items-center">
                      <button
          onClick={() => handleIncrease(product.productStockCode)}
          className="h-11 rounded-s-lg border border-gray-300 bg-blue-100 p-3 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <PlusSmallIcon className="w-5" />
                      </button>
                      <input
                        type="number"
                        id={`quantity-input-${product.productStockCode}`}
                        data-input-counter
                        className="block h-11 w-20 border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder={quantity.toString()}
                        required
                        disabled
                        value={orderItems.find(item => item.productStockCode === product.productStockCode)?.productQuantity || 0}              
                        onChange={(e) => handleChangeQuantity(product.productStockCode, parseInt(e.target.value, 10))}
                      />
                      <button
          onClick={() => handleDecrease(product.productStockCode)}
          className="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <MinusSmallIcon className="w-5" />
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
            İptal
          </Link>
          <button onClick={handleCreateOrder} className="rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400">
            Olustur
          </button>
        </div>
      </div>
    </div>
  );
}
