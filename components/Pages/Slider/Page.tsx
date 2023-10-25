'use client'

import SelectDialog from "./SelectDialog"
import SliderWrapper from "./SliderWrapper"

const Page = () => {

    const data = [
        {title: `İstanbul'un Fethi`, text: ` 1453 yılında İstanbul, Büyük İskender'den beri birçok imparatorluğun hedefi olmuştu. Ancak bu tarih, Fatih Sultan Mehmet'in kahramanca liderliği altında gerçekleşen unutulmaz bir zaferin başlangıcıydı. 6 Nisan'da başlayan kuşatma, 29 Mayıs'ta zaferle sonuçlandı.
        Fatih Sultan Mehmet'in kararlılığı ve ordusunun cesareti, şehrin surlarını aşmayı başardı. Topkapı Sarayı'ndan Aya İrini'ye kadar uzanan surların düşüşü, İstanbul'u fethin simgesi haline getirdi.
        Fetih günü, İstanbul halkı için yeni bir başlangıçtı. Ayasofya camiye çevrildi ve şehir, İslam'ın merkezi haline geldi. İstanbul, Osmanlı İmparatorluğu'nun başkenti oldu ve 16. yüzyılda dünyanın en büyük şehirlerinden biri haline geldi.
        İstanbul'un fethi, tarih boyunca büyük bir öneme sahiptir. Fatih Sultan Mehmet'in cesareti ve vizyonu, İstanbul'u hem kültürel hem de stratejik anlamda dünya sahnesinde öne çıkardı. Bu zafer, İstanbul'un köprü olduğu Batı ve Doğu'nun buluştuğu bir nokta olarak tarihe yazıldı ve hala büyüleyici bir geçmişi hatırlatır.`, image: '/images/text.jpg'},
        {title: 'Kanuni Sultan Süleyman', text: `Kanuni Sultan Süleyman, Osmanlı İmparatorluğu'nun en büyük hükümdarlarından biriydi. 1520-1566 yılları arasında tahtta kalan Sultan Süleyman, adaleti ve kültürel gelişmeyi teşvik etti. "Muhteşem Süleyman" olarak da bilinen hükümdar, güçlü bir ordu kurdu ve Osmanlı İmparatorluğu'nu zirveye taşıdı. Ayrıca, ünlü şair Rumi ve sanatçılara da büyük destek verdi. Kanuni Sultan Süleyman, Osmanlı tarihinde eşsiz bir lider olarak hatırlanır.`, image: '/images/test.jpg'}
    ]

  return (
    <div className="max-w-[1030px] w-full space-y-3">
        <div className="p-3 flex justify-between">
            <div className="flex flex-col gap-2">
            <p className="heading">
                Slider Ayarı
            </p>
                <p className="text-sm font-medium opacity-70">
                    Ana sayfanızda öne çıkacak yazıları buradan belirleyin. (En az iki tane seçmek zorundasınız!)
                </p>
            </div>

            <SelectDialog/>
        </div>
        <SliderWrapper data={data}/>
    </div>
  )
}

export default Page