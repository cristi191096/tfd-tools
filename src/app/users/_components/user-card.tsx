import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";


export function UserCard({data}: {data: User}) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-row justify-between">
                <div>
                <CardTitle>{data.username}</CardTitle>
                <CardDescription>{`${data.descendant.Name} Level ${data.descendant.Level}`}</CardDescription>
                </div>
                <Avatar>
                <AvatarImage src={data.descendant.Image} alt={data.descendant.Name} />
                <AvatarFallback>{data.descendant.Name[0]}</AvatarFallback>
                </Avatar>
                </div>
            </CardHeader>
            <CardContent>
                <div className="font-semibold">
                <p>Mastery: {data.masteryRank}</p>                
                </div>
                <Separator className="my-2"/>
                <div className="">
                    {data.descendant.Stats.map(stat => <p key={stat.name}>{`${stat.name}: ${stat.value}`}</p>)}
                </div>
            </CardContent>
        </Card>
    )

}