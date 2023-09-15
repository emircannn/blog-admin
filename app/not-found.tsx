import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='container min-h-[calc(100vh_-_416px)] flex items-center justify-center gap-4 flex-col'>
      <h1 className='heading text-center'>Üzgünüz, sayfa bulunamadı.</h1>
      <p className='text-sm font-semibold opacity-60 text-center'>Aradığınız sayfayı maalesef bulamıyoruz. Bu sayfanın varlığı sona ermiş veya geçici olarak kullanılamaz durumda olabilir.</p>
      <Button>
      <Link href="/">
        Ana Sayfaya Dön
      </Link>
      </Button>
    </div>
  )
}