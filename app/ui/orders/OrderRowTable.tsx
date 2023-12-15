import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices, getOrders } from '@/app/lib/data';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default async function OrderRowTable({orderRows}:any) {
 return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {orderRows?.map((order: any) => (
              <div
                key={order.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {order.productQuantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Ürün Adı
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Siparis Miktarı
                </th>
                
              </tr>
            </thead>
            <tbody className="bg-white">
              {orderRows?.map((order: any) => (
                  <tr
                   key={order.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {order.productStockName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {order.productQuantity}
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
