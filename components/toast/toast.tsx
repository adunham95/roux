import { CheckCircleIcon } from '@heroicons/react/24/outline';
import {
  XMarkIcon,
  BellIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/20/solid';
import { IToast, useToast } from '@/stores/toast';
import { useEffect } from 'react';

export default function Toasts() {
  const { toasts } = useToast();

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {toasts.map((toast) => (
            <ToastElement key={toast.id} {...toast} />
          ))}
        </div>
      </div>
    </>
  );
}

function ToastElement(props: IToast) {
  const { id, style, title, subTitle } = props;
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  function getIcon(
    type: 'danger' | 'success' | 'warning' | 'info' | undefined,
  ) {
    switch (type) {
      case 'danger':
        return (
          <ExclamationCircleIcon
            className="h-6 w-6 text-error"
            aria-hidden="true"
          />
        );
      case 'warning':
        return (
          <ExclamationTriangleIcon
            className="h-6 w-6 text-warning"
            aria-hidden="true"
          />
        );
      case 'success':
        return (
          <CheckCircleIcon
            className="h-6 w-6 text-success"
            aria-hidden="true"
          />
        );

      default:
        return <BellIcon className="h-6 w-6 text-info" aria-hidden="true" />;
    }
  }

  return (
    <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-surface shadow-lg ring-1 ring-surface-1 ring-opacity-5">
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">{getIcon(style)}</div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-tc-1">{title}</p>
            {subTitle && <p className="mt-1 text-sm text-tc-3">{subTitle}</p>}
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              type="button"
              className="inline-flex rounded-md bg-surface text-tc-1 hover:text-tc-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              onClick={() => {
                removeToast(id);
              }}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
