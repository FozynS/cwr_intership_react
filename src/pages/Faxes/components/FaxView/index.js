import React, {useContext, useRef, useState} from 'react'
import {Waypoint} from "react-waypoint"

import FaxPageContext from "../../../../contexts/FaxPageContext"

import {ReactComponent as FaxIcon} from "../../../../assets/icons/fax.svg"

import {Document, Page} from 'react-pdf'
import PDFJSWorker from 'react-pdf/dist/esm/pdf.worker.entry'

import {FaxLogs} from "../FaxLogs";
import FaxToolbar from "../FaxToolbar";
import {useDraggableScroll} from "../../../../hooks/useDraggableScroll";

import style from './index.module.scss'

const FaxLoader = ({message}) => {
  return (
    <div className={'h-100 d-flex flex-column align-items-center justify-content-center'}>
      <FaxIcon className={'mb-4'} />
      <div>{message}</div>
    </div>
  )
}

const generatePageArray = (total) => {
  return Array.from(Array(total).keys()).map(key => key + 1)
}

const FaxView = () => {
  const {selectedRow, faxLogs, pdfFile} = useContext(FaxPageContext)

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [scalePage, setScalePage] = useState(0.8)

  const pdfViewRef = useRef()

  const { onMouseDown } = useDraggableScroll(pdfViewRef)

  return (
    <div style={{position: 'relative', minHeight: '721px', height: '100%', paddingTop: '42px', paddingBottom: '68px'}}>

      { selectedRow
        ?
          <>
            <FaxToolbar total={totalPages} current={currentPage} scale={scalePage} setScale={setScalePage} />

            <div className={'w-100 h-100 p-2'}>
              { pdfFile &&

                <div className={style.scroll} ref={pdfViewRef} onMouseDown={onMouseDown}>
                  <Document
                    file={pdfFile}
                    noData={<div>test</div>}
                    options={{ workerSrc: PDFJSWorker }}
                    onLoadSuccess={({numPages}) => setTotalPages(numPages)}
                  >
                    {
                      generatePageArray(totalPages).map((page, index) => (
                        <Waypoint key={index} onEnter={() => setCurrentPage(page)} bottomOffset={'50%'}>
                          <div>
                            <Page
                              className={style.canvas}
                              pageNumber={page}
                              scale={scalePage}
                              renderTextLayer={false}
                              renderAnnotationLayer={false}
                            />
                          </div>
                        </Waypoint>
                      ))
                    }
                  </Document>
                </div>

              }
            </div>

            <FaxLogs logs={faxLogs} />
          </>
        :
          <FaxLoader message={'Choose FAX from list to see details'}/>
      }

    </div>
  )
}

export default FaxView