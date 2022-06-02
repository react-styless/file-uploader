import React from 'react';
import { v4 } from 'uuid';
const Uploader = ({ id = v4(), multiple, children, accept = '*', onSuccess, }) => {
    const inputRef = React.useRef(null);
    const labelRef = React.useRef(null);
    const handleClick = (e) => {
        if (!inputRef.current)
            return;
        e.stopPropagation();
        e.preventDefault();
        inputRef.current.click();
    };
    const handleChange = React.useCallback(async (e) => {
        const { files } = e.type === 'drop' ? e.dataTransfer : e.target;
        onSuccess?.(files);
        console.log(files);
        inputRef.current.value = '';
    }, [onSuccess]);
    const handleDragIn = React.useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    const handleDragOut = React.useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    const handleDragOver = React.useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    const handleDrop = React.useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        handleChange(e);
    }, [handleChange]);
    return (<>
      <input ref={inputRef} id={id} type='file' multiple={multiple} accept={accept} style={{ display: 'none' }} onChange={handleChange}/>
      <label ref={labelRef} onClick={handleClick} htmlFor={id} onDragEnter={handleDragIn} onDragLeave={handleDragOut} onDragOver={handleDragOver} onDrop={handleDrop}>
        {children}
      </label>
    </>);
};
export default Uploader;
