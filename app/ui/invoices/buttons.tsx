'use client';

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';
import { useActionState, startTransition } from 'react';
import { ButtonLoadingSpinner } from '@/app/ui/loading-spinner';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {

  const [state, formAction, pending] = useActionState(deleteInvoice, null);

  const onClickDelete = () => {
    // prevent an error by startTransition: "An async function was passed to useActionState, but it was dispatched outside of an action context. This is likely not what you intended. Either pass the dispatch function to an `action` prop, or dispatch manually inside `startTransition`"
    startTransition(() => {
      formAction(id);
    })
  }

  return (
    <>
      <button onClick={onClickDelete} className="rounded-md border p-2 hover:bg-gray-100">
        <input
          hidden
          id="id"
          name="id"
          defaultValue={id}
          placeholder="Invoice ID"
        />
        <span className="sr-only">Delete</span>
        {pending ? <ButtonLoadingSpinner /> : <TrashIcon className="w-5" />}
      </button>
    </>
  );
}
