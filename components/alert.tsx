import React from "react";

//빨강경고
export function AlertRed(v) {
  console.log(v);
  return (
    <div className="relative">
      <div className="fixed w-full h-full top-0 left-0 bg-slate-500 opacity-75 z-40"></div>
      <div
        id="alert-additional-content-2"
        className="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 z-50 opacity-100 relative"
        role="alert"
      >
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium">This is a danger alert</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">{v.alertMsg}</div>
        <div className="flex">
          <button
            type="button"
            className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
            data-dismiss-target="#alert-additional-content-2"
            aria-label="Close"
            onClick={v.alertClose}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

//녹색경고
export function AlertGreen(v) {
  console.log(v);
  return (
    <div
      id="alert-additional-content-3"
      className="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 opacity-100 relative"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">This is a success alert</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{v.alertMsg}</div>
      <div className="flex">
        <button
          type="button"
          className="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800"
          data-dismiss-target="#alert-additional-content-3"
          aria-label="Close"
          onClick={v.alertClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}

//노랑경고
export function AlertYellow(v) {
  console.log(v);
  return (
    <div
      id="alert-additional-content-4"
      className="p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800 opacity-100 relative"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <h3 className="text-lg font-medium">This is a warning alert</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{v.alertMsg}</div>
      <div className="flex">
        <button
          type="button"
          className="text-yellow-800 bg-transparent border border-yellow-800 hover:bg-yellow-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-gray-800 dark:focus:ring-yellow-800"
          data-dismiss-target="#alert-additional-content-4"
          aria-label="Close"
          onClick={v.alertClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
