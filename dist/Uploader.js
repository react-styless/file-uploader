var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    const handleChange = React.useCallback((e) => __awaiter(void 0, void 0, void 0, function* () {
        const { files } = e.type === 'drop' ? e.dataTransfer : e.target;
        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(files);
        console.log(files);
        inputRef.current.value = '';
    }), [onSuccess]);
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
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { ref: inputRef, id: id, type: 'file', multiple: multiple, accept: accept, style: { display: 'none' }, onChange: handleChange }),
        React.createElement("label", { ref: labelRef, onClick: handleClick, htmlFor: id, onDragEnter: handleDragIn, onDragLeave: handleDragOut, onDragOver: handleDragOver, onDrop: handleDrop }, children)));
};
export default Uploader;
