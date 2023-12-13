import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import {
 PlusSmallIcon,
 MinusSmallIcon
} from '@heroicons/react/24/outline';
import { Button } from '../button';
export default async function OrderTable() {
  const products = [
    {
      productStockCode: 'ARG.AJ.1029',
      productStockName: '100 CC KAPAK',
      productStockGroupCode: '50',
      productStockGroupName: 'AMBALAJ URUNLER',
    },
    {
      productStockCode: 'ARG.AJ.1053',
      productStockName: "10'LU STRAFOR KOLİSİ",
      productStockGroupCode: '50',
      productStockGroupName: 'AMBALAJ URUNLER',
    },
    {
      productStockCode: 'ARG.AJ.1026',
      productStockName: '2 KATLI KÜLAH TUTUCU',
      productStockGroupCode: '50',
      productStockGroupName: 'AMBALAJ URUNLER',
    },
    {
      productStockCode: 'ARG.AJ.1030',
      productStockName: '200 CC KAPAK',
      productStockGroupCode: '50',
      productStockGroupName: 'AMBALAJ URUNLER',
    },
    {
      productStockCode: 'ARG.AJ.1054',
      productStockName: "25'LI STRAFOR KOLİSİ",
      productStockGroupCode: '50',
      productStockGroupName: 'AMBALAJ URUNLER',
    },
    {
      productStockCode: 'ARG.AJ.1023',
      productStockName: '3 LÜ KÜLAH TUTUCU',
      productStockGroupCode: '50',
      productStockGroupName: 'AMBALAJ URUNLER',
    },
  ];

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {products?.map((product) => (
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
              {products?.map((product) => (
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
                        className="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <PlusSmallIcon className='w-5'/>
                      </button>
                      <input
                        type="text"
                        id="quantity-input"
                        data-input-counter
                        aria-describedby="helper-text-explanation"
                        className="block h-11 w-20 border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="999"
                        required
                      />
                      <button
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
      </div>
    </div>
  );
}
