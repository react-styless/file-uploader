import React from 'react';
import { v4 } from 'uuid';

interface Props {
  id?: string;
  multiple?: boolean;
  children?: React.ReactElement;
  onSuccess?: (file: FileList | null) => void;
  accept?: string;
}
const Uploader: React.FC<Props> = ({
  id = v4(),
  multiple,
  children,
  accept = '*',
  onSuccess,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const labelRef = React.useRef<HTMLLabelElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (!inputRef.current) return;
    e.stopPropagation();
    e.preventDefault();
    inputRef.current.click();
  };
  const handleChange = React.useCallback(
    async (
      e: React.ChangeEvent<HTMLInputElement> & React.DragEvent<HTMLLabelElement>
    ) => {
      const { files } = e.type === 'drop' ? e.dataTransfer : e.target;
      onSuccess?.(files);
      console.log(files);
      inputRef.current!.value = '';
    },
    [onSuccess]
  );
  const handleDragIn = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const handleDragOver = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const handleDrop = React.useCallback(
    (e: React.DragEvent<HTMLLabelElement>) => {
      e.preventDefault();
      e.stopPropagation();
      handleChange(
        e as React.ChangeEvent<HTMLInputElement> &
          React.DragEvent<HTMLLabelElement>
      );
    },
    [handleChange]
  );
  return (
    <>
      <input
        ref={inputRef}
        id={id}
        type='file'
        multiple={multiple}
        accept={accept}
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <label
        ref={labelRef}
        onClick={handleClick}
        htmlFor={id}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {children}
      </label>
    </>
  );
};

export default Uploader;
