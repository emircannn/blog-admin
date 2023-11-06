import React from 'react'
import Comment from './Comment'

const CommentsPage = () => {
  return (
    <div className="p-3 flex flex-col gap-4 w-full overflow-y-auto">
        <h1 className="heading">Yorumlar</h1>

        <div className="grid grid-cols-2 gap-3">
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    </div>
  )
}

export default CommentsPage