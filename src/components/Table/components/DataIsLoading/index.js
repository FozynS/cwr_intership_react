import React from 'react'
import styles from './index.module.scss'

const DataIsLoading = ({showLabelNotLoaded, labelNotLoaded}) => {
    return (
        <tr>
            <td colSpan="3" className='text-center p-5 h6'>
                {showLabelNotLoaded && labelNotLoaded ?
                    <span>{labelNotLoaded}</span> :
                    <>
                        <span>Data is loading </span>
                        <span className={styles['dot-1']}>.</span>
                        <span className={styles['dot-2']}>.</span>
                        <span className={styles['dot-3']}>.</span>
                    </>
                }

            </td>
        </tr>
    )
}

export default DataIsLoading