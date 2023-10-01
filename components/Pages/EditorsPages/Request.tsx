import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

const Request = () => {
  return (
    <div className="flex items-center justify-between p-3 backgroundColor rounded-xl">
        <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Emircan Yasar</p>
            <p className="text-sm font-medium">@emircann</p>
        </div>

        <div className="flex items-center gap-2">
            <Button size='icon'>
                <Check/>
            </Button>
            <Button size='icon' variant='destructive'>
                <X/>
            </Button>
        </div>
    </div>
  )
}

export default Request