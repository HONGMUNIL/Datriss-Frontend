import type { PageNationProps } from "./Pagination.types";

function PageNation({
  showPage,
  totalPage,
  onPageChange,
}: PageNationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  if (totalPage === 0) {
    return null;
  }

  return (
    <div className="mb-4 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(showPage - 1)}
        disabled={showPage === 1}
        className="cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        이전
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`h-9 w-9 cursor-pointer rounded-lg border text-sm ${
            showPage === page
              ? "border-indigo-600 bg-indigo-600 text-white"
              : "border-slate-300 bg-white text-slate-700"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(showPage + 1)}
        disabled={showPage === totalPage}
        className="cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        다음
      </button>
    </div>
  );
}

export default PageNation;