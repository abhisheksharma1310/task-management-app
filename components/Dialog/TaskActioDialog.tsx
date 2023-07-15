import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import {
  faArrowLeft,
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import DeleteDialog from "@/components/Dialog/DeleteDialog";

import "./styles.css";

type propsType = {
  open: Boolean;
  id: string;
  setOpen: Function;
};

export default function Example({ open, setOpen, id }: propsType) {
  const [openDelete, setOpenDelete] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open ? true : false} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Task Action
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Click on icon to perform action on this selected task.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="menu-icon"
                    onClick={() => setOpen(false)}
                  />
                  <Link href={`/task/${id}/view`}>
                    <FontAwesomeIcon
                      icon={faEye}
                      className="menu-icon"
                      onClick={() => setOpen(false)}
                    />
                  </Link>
                  <Link href={`/task/${id}/edit`}>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="menu-icon"
                      onClick={() => setOpen(false)}
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="menu-icon"
                    onClick={() => setOpenDelete(true)}
                  />
                  {open && (
                    <DeleteDialog
                      open={openDelete}
                      setOpen={setOpenDelete}
                      id={id}
                    />
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
