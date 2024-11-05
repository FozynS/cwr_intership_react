import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const CircleLoader = ({ absolute = false, color = null, size = null }) => {
    const getSpinnerBorderSizeClassName = () => {
        if (!size) {
            return '';
        }

        const className = 'spinner-border-' + size;

        return className in styles ? styles[className] : className;
    };

    return (
        <div className={classNames('p-1 d-flex align-items-center justify-content-center', styles['circle-loader'], absolute ? styles['circle-loader--absolute'] : '')}>
            <div className={classNames('spinner-border', color ? '' : 'text-primary', getSpinnerBorderSizeClassName())} role="status" color={color}></div>
        </div>
    );
};

export default CircleLoader;
