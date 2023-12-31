import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices, getOrders } from '@/app/lib/data';

export default async function InvoicesTable() {
  // const invoices = await fetchFilteredInvoices(query, currentPage);
  const orders = await getOrders(0,5)
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {orders?.map((order:any) => (
              <div
                key={order.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">{order.orderStatus.createdDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Id
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Oluşturma Tarihi
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Durum
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Toplam Kalem Adedi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders?.map((order:any) => (
                <tr
                  key={order.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {order.id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {order.createdDate}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {order.orderStatus.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {order.totalOrderRow}
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
