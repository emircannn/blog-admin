
interface ImageUploadHandler {
    (
      event: React.ChangeEvent<HTMLInputElement> | any,
      setPhoto: React.Dispatch<React.SetStateAction<File | any>>,
      setPhotoPre: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null | any>>
    ): void;
  }
  
export const handleSelectImage: ImageUploadHandler = (event,setPhoto,setPhotoPre) => {
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