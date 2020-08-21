import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import '../styles/drapAndDrop.css'

// const thumbsContainer = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   marginTop: 16
// };

// const thumb = {
  
// };

// const thumbInner = {
//   display: 'flex',
//   minWidth: 0,
//   overflow: 'hidden'
// };

// const img = {
//   display: 'block',
//   width: 'auto',
//   height: '100%'
// };


export const DrapandDrop = (props) => {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const handleBton = (e) => {
   console.log( files.shift().preview)
  }
  
//   const thumbs = files.map(file => (
//     <div className="thumb" key={file.name}>
//       <div className="thumbInner">
//         <img
//           src={file.preview}
//           className="img__preview"
//         />
//       </div>
//     </div>
//   ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
    
  }, [files]);
  
  
    
 
  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Arrastre y suelte la imagen o click </p>
      </div>
      <aside className="thumbsContainer">
        {
          files.map(file => (
            <div className="thumb" key={file.name}>
              <div className="thumbInner">
                <img
                alt="logo"
                  src={file.preview}
                  className="img__preview"
                />
              </div>
            </div>
          )) 
        }
      </aside>
      <button className="btn btn-danger" onClick={handleBton}>Enviar</button>
    </section>
  );
}