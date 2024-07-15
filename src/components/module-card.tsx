"use client"

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image"

const moduleVariants = cva("self-center border-2 w-[70px] h-[70px] bg-gradient-to-br", {
    variants: {
        variant: {
            Standard: "from-cyan-500 from-10% to-slate-900",
            Transcendent: "from-red-500 from-10% to-slate-900",
            Ultimate: "from-yellow-500 from-10% to-slate-900",
            Rare: "from-purple-500 from-10% to-slate-900"
        }        
    },
    defaultVariants: {
        variant: "Standard"
    }
})

interface ModuleCardProps extends VariantProps<typeof moduleVariants>{
    name?: string;
    image?: string;
    stat?: ModuleStat | undefined;
    capacity?: number;
    maxCapacity?: number;
}

export function ModuleCard({name, image, stat, capacity = 0, maxCapacity, variant}: ModuleCardProps) {

    return (
        <div className="py-1 w-[150px] h-[200px] border-2 flex flex-col overflow-clip">
            <p className="px-2 text-wrap text-center font-semibold self-center">{name ? name : ""}</p>
            {image ? 
            <div className={cn("my-1 flex flex-row",moduleVariants({variant}))}>
                <div className="flex flex-col-reverse">
                   {
                    Array.from({length: maxCapacity ?? 0}).map((_, index) => (
                        <div key={index} className={cn("w-1 h-1 my-[1px]", index <= capacity ? "bg-yellow-300": "bg-slate-700")}></div>
                    ))
                   }
                </div>
                <Image src={image} alt={name ? name: ""} width={50} height={50} className="self-center"/>
            </div>
             : <></>}
             <p className="px-2 text-wrap text-center text-muted-foreground self-center">{stat ? stat.value : ""}</p>
        </div>
    )
}