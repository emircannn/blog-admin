import {HashLoader}from 'react-spinners'

const loading = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-white dark:bg-darkerColor">
        <HashLoader color='#F5F5F5' size={30}/>
    </div>
  )
}

export default loading