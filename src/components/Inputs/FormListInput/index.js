import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faXmark} from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import styles from './index.module.scss';
import classNames from "classnames";

const FormListInput = ({listData, setListData, disabled, placeholder}) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            addListItem();
        }
    }

    const getMaxId = () => {
        if (listData?.length < 1) {
            return 0;
        }
        const idList = listData.map(item => item.id);
        return Math.max.apply(null, idList);
    }

    const addListItem = () => {
        if (inputValue) {
            const newListData = [...listData];

            newListData.push({
                id: getMaxId() + 1,
                text: inputValue
            });

            setListData(newListData);
            setInputValue('');
        }
    }
    const removeFromListById = (id) => {
        setListData(listData.filter(item => item.id !== id));
    };

    useEffect(() => {
    }, [listData])

    return (
        <div className={styles.formListInput}>
            <div className={styles.formListInputField}>
                <input
                    className="form-control long"
                    type="text"
                    placeholder={placeholder}
                    disabled={disabled}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDownCapture={handleKeyPress}
                />
                <button
                    className={classNames(styles.formListInputBtn, !inputValue && ' hidden')}
                    type="button"
                    onClick={addListItem}
                    disabled={disabled}
                >
                    <FontAwesomeIcon icon={faPlus} color={'#2F80ED'} size={'xl'}/>
                </button>
            </div>

            <ul className={styles.formTagList}>
                {listData?.map(item =>
                    <li  className={styles.formTagListItem} key={item.id}>
                        <div className={styles.formTag}>
                           <span className={styles.formTagText}>
                               {item.text}
                           </span>
                            <button
                                type="button"
                                className={styles.formTagRemove}
                                onClick={() => removeFromListById(item.id)}
                            >
                                <FontAwesomeIcon icon={faXmark} color={'#fff'} size={'lg'}/>
                            </button>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default FormListInput;