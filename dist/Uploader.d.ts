import React from 'react';
interface Props {
    id?: string;
    multiple?: boolean;
    children?: React.ReactElement;
    onSuccess?: (file: FileList | null) => void;
    accept?: string;
}
declare const Uploader: React.FC<Props>;
export default Uploader;
