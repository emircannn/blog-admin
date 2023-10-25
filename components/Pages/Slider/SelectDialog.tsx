import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import ArticleBox from "./ArticleBox"

const SelectDialog = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">Yazı Seç</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
            <DialogTitle>Slider için yazı seç</DialogTitle>
            <DialogDescription>
                Görsel optimizasyon açısından sorun yaşamamak için en az 2 tane yazı seçmelisiniz...
            </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-2 p-2">
                <ArticleBox/>
                <ArticleBox/>
                <ArticleBox/>
                <ArticleBox/>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default SelectDialog