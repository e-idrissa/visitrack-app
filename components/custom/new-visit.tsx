"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { NewVisitForm } from "./form/new-visit"
import { useState } from "react"

type Props = {
  user: string
}
export function NewVisit({ user }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDialog = () => setIsOpen(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>+ New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[30rem]">
        <DialogHeader>
          <DialogTitle>Add Visit</DialogTitle>
        </DialogHeader>
        <NewVisitForm userId={user!} onSuccess={toggleDialog}/>
      </DialogContent>
    </Dialog>
  )
}
