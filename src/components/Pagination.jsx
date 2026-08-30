function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`mr-4 px-2 py-1 rounded-sm shadow-md ${currentPage === 1 ? '' : "bg-white"} hover:scale-105 transition-transform duration-300`}
      >
        Anterior
      </button>

      <span>{currentPage} / {totalPages}</span>
      
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`ml-4 px-2 py-1 rounded-sm shadow-md ${currentPage === 7 ? '' : "bg-white"} hover:scale-105 transition-transform duration-300`}
      >
        Próxima
      </button>
    </div>
  );
}

export default Pagination;