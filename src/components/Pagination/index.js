import React, {useEffect, useState} from 'react'

import getVisiblePages from "../../utilities/getVisiblePages"

const Pagination = ({params, currentPage, setCurrentPage, loading}) => {

  const [visiblePages, setVisiblePages] = useState([])

  useEffect(() => {
    setVisiblePages(getVisiblePages(currentPage, params.last_page))
  }, [params, currentPage])

  return (
    <>
      <ul className={`pagination m-0 ${loading ? 'pe-none opacity-50' : 'opacity-100'}`}>

        <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
          <span role="button" className={'page-link'} onClick={() => {setCurrentPage(currentPage - 1)}}>Previous</span>
        </li>

        { visiblePages.map((page, index) => {

          if (page !== '...') {
            return (
              <li key={page} className={page === currentPage ? 'page-item active pe-none' : 'page-item'} onClick={() => {setCurrentPage(page)}}>

            <span role="button" className={'page-link'}>
              {page}
            </span>

              </li>
            )
          } else {
            return (
              <li key={page} className={'pe-none'}>
                <span role="button" className={'page-link'}>
                  {page}
                </span>
              </li>
            )
          }

        })}

        <li className={currentPage === params.last_page ? 'page-item disabled' : 'page-item'}>
          <span role="button" className={'page-link'} onClick={() => {setCurrentPage(currentPage + 1)}}>Next</span>
        </li>

      </ul>
    </>
  )
}

export default Pagination