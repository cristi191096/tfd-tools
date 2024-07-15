"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle} from "lucide-react"
import { useState } from "react";
import { searchUser } from "../../_actions/user";


export function UserSearch({onSubmit}: {onSubmit: (username: string) => Promise<void> }) {

    const [submitPending, setSubmitPending] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>("")

    const handleClick = async () => {
        console.log("hello")
        if(inputValue === "") {
            return
        }    

        setSubmitPending(true)

        await onSubmit(inputValue)

        setSubmitPending(false)

    }

    return (
        <div className="flex flex-row justify-between">
        <Input placeholder="username" onChange={(e) => setInputValue(e.target.value)} className="mr-4"/>
        { submitPending ? (
          <Button className="text-sm md:text-base self-center cursor-not-allowed" size={"lg"} disabled>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        ) :(
        <Button onClick={handleClick} type="submit" className="text-base md:text-xl self-center" size={"lg"}>Search</Button>
        )}
        </div>
    )

}