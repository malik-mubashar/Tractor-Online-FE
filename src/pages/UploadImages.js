import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

function UploadImages() {
  const [images, setImages] = useState([]);
  const [imagesFileList, setImagesFileList] = useState([]);

	function handleDrop(acceptedFiles) {
		console.log('acceptedFiles',acceptedFiles)
    // Create an array to store the modified images
    const modifiedImages = [];
    const modifiedImagesFileList = [];

    // Loop through each file and modify it
    acceptedFiles.forEach((file,i) => {
      // Create a new image element
      const img = new Image();
      img.src = URL.createObjectURL(file);

      // Add a watermark to the image
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
				canvas.height = img.height;
				// console.log('img.width;',img.width)
				// console.log('img.height;',img.height)
        ctx.drawImage(img, 0, 0);
				const watermarkText = 'Tractoronline.com.pk';
				let fontSize=img.width>500?'50px':'25px'
        ctx.font = `${fontSize} Arial`;
        ctx.fillStyle = 'white';

        // Decrease the opacity of the watermark
        ctx.globalAlpha = 0.7;

        // Center the watermark on the image
        const textWidth = ctx.measureText(watermarkText).width;
        const x = (canvas.width - textWidth) / 2;
        const y = canvas.height / 2;
        ctx.fillText(watermarkText, x, y);

        const modifiedFile = canvas.toDataURL(file.type);

        // Add the modified image to the array
        modifiedImages.push(modifiedFile);
        modifiedImagesFileList.push(dataURLtoFile(modifiedFile,`${1}.jpeg`));

        // If all images have been modified, update the state
        if (modifiedImages.length === acceptedFiles.length) {
					setImages(modifiedImages);
					setImagesFileList(modifiedImagesFileList)
        }
      };
    });
	}

	function dataURLtoFile(dataurl, filename) {
 
		var arr = dataurl.split(','),
				mime = arr[0].match(/:(.*?);/)[1],
				bstr = atob(arr[1]), 
				n = bstr.length, 
				u8arr = new Uint8Array(n);
				
		while(n--){
				u8arr[n] = bstr.charCodeAt(n);
		}
		
		return new File([u8arr], filename, {type:mime});
}

//Usage example:
// var file = dataURLtoFile('data:text/plain;base64,aGVsbG8gd29ybGQ=','hello.txt');
console.log('imagesFileList',imagesFileList);
console.log('images',images);
	

  return (
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps, getInputProps }) => (
				<section
				style={{ height: "400px", width: "400px" }}
					
				>
					<div
							style={{ height: "400px", width: "400px" }}
						{...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
          </div>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
          ))}
        </section>
      )}
    </Dropzone>
  );
}

export default UploadImages;