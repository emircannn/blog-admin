export const handleSelectImage = (event,setPhoto,setPhotoPre) => {
  const selectedFile = event.target.files[0];
  setPhoto(selectedFile);

  const reader = new FileReader();
  reader.onload = () => {
    setPhotoPre(reader.result);
  };
  if(selectedFile) {
    reader.readAsDataURL(selectedFile);
  }

};