import { Button } from '@/app/ui/button';
import { lusitana } from '@/app/ui/font';
import { CreateOrder } from '@/app/ui/orders/buttons';
import OrderTable from '@/app/ui/orders/table';
import Search from '@/app/ui/search';
import Link from 'next/link';

function page() {
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
        <OrderTable/>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/orders"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Order</Button>
      </div>
    </div>
  )
}

export default page