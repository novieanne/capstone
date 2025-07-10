import { router } from '@inertiajs/react';

type PaginationProps = {
  from: number | null;
  to: number | null;
  total: number;
  prevPageUrl: string | null;
  nextPageUrl: string | null;
};

export default function Pagination({
  from,
  to,
  total,
  prevPageUrl,
  nextPageUrl,
}: PaginationProps) {
  const currentTab = new URLSearchParams(window.location.search).get('tab') || 'list';

  // Append current tab to all pagination links
  const appendTab = (url: string) => {
    if (!url) return '';
    const hasQuery = url.includes('?');
    return `${url}${hasQuery ? '&' : '?'}tab=${currentTab}`;
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <p className="text-sm text-gray-700">
        Showing {from ?? 0}–{to ?? 0} of {total}
      </p>
      <div className="space-x-2">
        <button
          disabled={!prevPageUrl}
          onClick={() => prevPageUrl && router.visit(appendTab(prevPageUrl))}
          className={`px-3 py-1 rounded ${
            prevPageUrl
              ? 'bg-gray-300 hover:bg-gray-400'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          &lt; Previous
        </button>

        <button
          disabled={!nextPageUrl}
          onClick={() => nextPageUrl && router.visit(appendTab(nextPageUrl))}
          className={`px-3 py-1 rounded ${
            nextPageUrl
              ? 'bg-gray-300 hover:bg-gray-400'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}
