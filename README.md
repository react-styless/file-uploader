# react-file-uploader

Simple file uploader component for React without style.

### Installation

```bash
// with npm
$ npm install @react-styless/file-uploader  --save
```

### Usage

This is the basic usage of file-uploader

```Javascript
import Uploader from '@react-styless/file-uploader';

const App = () => {
  const handleSuccess = (e) => {
    console.log(e);
  }
  return <Uploader onSuccess={handleSuccess}><button>Upload</button></Uploader>;
}
```
