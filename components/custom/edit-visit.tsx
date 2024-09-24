import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Edit3 } from "lucide-react"
import { EditVisitForm } from "./form/edit-visit"
import { Visit } from "@prisma/client"
import { useState } from "react"

type Props = {
  visit: Visit
}

export function EditVisit({ visit }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDialog = () => setIsOpen(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
      <Button variant="edit"><Edit3 className="size-4 mr-1"/>Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[30rem]">
        <DialogHeader>
          <DialogTitle>Edit Visit</DialogTitle>
        </DialogHeader>
        <EditVisitForm visit={visit} onSuccess={toggleDialog}/>
      </DialogContent>
    </Dialog>
  )
}
