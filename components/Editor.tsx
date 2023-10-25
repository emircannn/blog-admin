'use client';

import Editor from 'ckeditor5-custom-build/build/ckeditor'
import React, { Dispatch, SetStateAction } from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react'

interface Props {
  setData: Dispatch<SetStateAction<string | any>>
  data: string | any
}

const EditorWrapper: React.FC<Props> = ({
  setData,
  data
}) => {
  return (
      <CKEditor
        editor={ Editor }
        data={data}
        onChange={ (event: any, editor: any) => {
          const data = editor.getData();
          if(setData) {
            setData(data);
          }
        } }
      /> 
  )
}

export default EditorWrapper