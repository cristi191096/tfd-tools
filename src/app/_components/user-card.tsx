import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export function UserCard({data}: {data: User}) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{data.username}</CardTitle>
                <CardDescription>{data.platform}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-semibold">Mastery: {data.masteryRank}</p>
            </CardContent>
        </Card>
    )

}