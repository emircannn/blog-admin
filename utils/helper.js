import moment from 'moment';
require('moment/locale/tr');

export const dateFormater = (date) => {
  const turkishDateFormat = 'DD/MM/YYYY';
  moment.locale('tr'); 
  return moment(date).format(turkishDateFormat);
}


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

export function formatReadCount(count) {
  if (count >= 1e9) {
    return (count / 1e9).toFixed(1) + "b";
  } else if (count >= 1e6) {
    return (count / 1e6).toFixed(1) + "m";
  } else {
    return count?.toString();
  }
}