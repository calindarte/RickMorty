import { Card, CardContent, Skeleton } from "@mui/material";

export default function CharacterSkeleton() {
    return(
    <Card>
        <Skeleton variant="rectangular" height={250} width={250}/>
        <CardContent>
            <Skeleton variant="rectangular" height={25}/>
        </CardContent>
    </Card>
    )
}