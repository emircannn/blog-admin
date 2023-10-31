/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react';
import Request from './Request'
import Writer from './Writter'
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';

const EditorsPages = () => {

  const [editorRequests, setEditorRequests] = useState<User[]>([])
  const [editors, setEditors] = useState<User[]>([])
  const { toast } = useToast()

  useEffect(() => {
    const getEditorRequest = async () => {
      const token = typeof window != "undefined" && window.localStorage && window.localStorage.getItem("token");
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}admin/getEditorRequests`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            setEditorRequests(res.data.data)
          }
      } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      }
    }
    getEditorRequest()
  }, [])

  useEffect(() => {
    const getEditorRequest = async () => {
      const token = typeof window != "undefined" && window.localStorage && window.localStorage.getItem("token");
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}admin/getEditors`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

          if(res.data.error) {
            toast({title : res.data.error.response.data.message.split(':')[1] || res.data.error.response.data.message})
          } else {
            setEditors(res.data.data)
          }
      } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      }
    }
    getEditorRequest()
  }, [])

  return (
    <div className="p-3 flex flex-col gap-4 w-full overflow-y-auto">
        <h1 className="heading">Editörler</h1>
        <div className='flex flex-col gap-3'>
                {editors?.length > 0 ?
                  <div className='grid grid-cols-4 gap-3 mb-4'>
                    {editors.map((editor) => (
                      <Writer
                      key={editor.id}
                      data={editor}
                      />
                    ))}
                  </div>
                  :
                  <p className='text-xs font-semibold my-4 text-center'>
                    Henüz editör yok...
                  </p>
                }

            <h2 className='heading'>Editör istekleri</h2>
              {editorRequests?.length > 0 ?
              <div className='grid grid-cols-2 gap-2'>
                    {editorRequests.map((editor) => (
                      <Request
                      key={editor.id}
                      data={editor}
                      />
                    ))}
              </div>
              :
              <p className='text-xs font-semibold my-4 text-center'>
                Henüz editör isteği yok...
              </p>
              }
        </div>
    </div>
  )
}

export default EditorsPages