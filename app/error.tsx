'use client'
 
import { Button } from '@/components/ui/button'
 
export default function Error({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {

  return (
    <div className='container min-h-[calc(100vh_-_416px)] flex items-center justify-center gap-4 flex-col'>
      <h1 className='heading'>Üzgünüz, bir hata oluştu.</h1>
      <p className='text-sm font-semibold opacity-60 text-center'>Web sitemizi kullanırken beklenmedik bir sorunla karşılaştık. Bu sorun şu anda teknik ekibimiz tarafından inceleniyor.</p>
      <Button
        onClick={
          () => reset()
        }
      >
        Tekrar Dene
      </Button>
    </div>
  )
}