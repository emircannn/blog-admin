import { ArrowLeft, ArrowRight, Forward } from 'lucide-react';
import { useState } from 'react';

function Pagination({ totalPages, onPageChange, siblingCount, size='40px', textSize='14px' }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      const isWithinSiblingRange =
        i >= currentPage - siblingCount && i <= currentPage + siblingCount;

      if (i === 1 || i === totalPages || isWithinSiblingRange) {
        pageNumbers.push(
          <li
            style={{width: size, height: size, fontSize: textSize}}
            key={i}
            className={`${i === currentPage ? 'bg-thirth' : ' bg-secondary text-primary'} rounded-full flex items-center 
            justify-center font-semibold cursor-pointer duration-300`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </li>
        );
      } else if (i === 2 || i === totalPages - 1) {
        // İkinci sayfa ve sonuncu sayfa arasına "..." eklenir
        pageNumbers.push(
        <li 
        className='flex items-center justify-center select-none'
        style={{width: size, height: size, fontSize: textSize}} key={i}>...</li>);
      }
    }
    return pageNumbers;
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="text-white flex items-center">
      <ul className='flex items-center gap-3'>
        <li 
        className='flex items-center justify-center cursor-pointer bg-graident hover:bg-secondary duration-300 rounded-full '
        style={{width: size, height: size, fontSize: textSize}}
        onClick={handlePrevClick}>
        <ArrowLeft className='text-white -rotate-180'/>
        </li>
        {renderPageNumbers()}
        <li 
        className='flex items-center justify-center cursor-pointer bg-graident hover:bg-secondary duration-300 rounded-full '
        style={{width: size, height: size, fontSize: textSize}}
        onClick={handleNextClick}>
        <ArrowRight className='text-white'/>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
