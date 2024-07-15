"use client"

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { ModuleCard } from "./module-card"

function getDefaultSlots() : Slot[] {
 return [
    {id: "Skill 1", card:   null},        
    {id: "Main 1", card:    null},
    {id: "Main 3", card:    null},
    {id: "Main 5", card:    null},
    {id: "Main 7", card:    null},
    {id: "Main 9", card:    null},
    {id: "Sub 1", card:     null},
    {id: "Main 2", card:    null},    
    {id: "Main 4", card:    null},                
    {id: "Main 6", card:    null},    
    {id: "Main 8", card:    null},        
    {id: "Main 10", card:   null},
]
}

function updateSlot(grid: Slot[], setGrid : Dispatch<SetStateAction<Slot[]>>, id : string, module : Module | null) {
    const newGrid = [...grid]; // Create a copy to avoid mutation
    //console.log(newGrid)
    const index = newGrid.findIndex(
        (slot) => slot.id === id
      );

      if (index !== -1) {
        newGrid[index].card = module;
        setGrid(newGrid); // Update state with the new grid
      } else {
        console.error(`Invalid slot coordinates: id: ${module?.slotID}`);
      }
}

export function WeaponModuleViewer() {

    return (
        <div className="grid grid-cols-5 grid-rows-2 gap-x-4 gap-y-2">
            {/* <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>                  */}
        </div>
    )
}

type Slot = {
    id: string;
    card?: Module | null; 
}

export function DescendantModuleViewer({modules}: {modules: Module[]}) {

    const [slots, setSlots] = useState<Slot[]>(getDefaultSlots())

    useEffect(() => {
        //console.log(modules)
        const resetSlots = () => {
            slots.map(slot => updateSlot(slots, setSlots, slot.id, null))
           // console.log(slots)
        }
        resetSlots();
        modules.map(module => updateSlot(slots, setSlots, module.slotID, module))
              
    }, [modules])

    return (
        <div className="flex flex-row justify-between">
            <div className="w-60 border-2 bg-slate-700">
                <p>Profile</p>
            </div>
        <div className="grid grid-cols-6 grid-rows-2 gap-x-4 gap-y-2 p-4 border-2">
            {slots.map(slot => {
                const variant = slot.card && slot.card.tier ? slot.card.tier : "Standard"
                
                return <ModuleCard key={slot.id} name={slot.card?.name} capacity={slot.card?.enchantLevel} maxCapacity={slot.card?.stats.length ? slot.card?.stats.length - 1 : 0} stat={slot.card?.stats[slot.card?.enchantLevel]} image={slot.card?.image} variant={variant as "Standard" | "Transcendent" | "Rare" | "Ultimate" | null | undefined}/>
                })}
        </div>
        </div>
    )
}