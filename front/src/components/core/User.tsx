import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IUserProfile {
  name: string | undefined;
  email: string | undefined;
  balance: number | undefined;
  imageUrl: string | undefined;
  index: any;
}

export default function User({
  name,
  email,
  balance,
  imageUrl,
  index,
}: IUserProfile) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row justify-between items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>
            {name!
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-2xl">{name}</CardTitle>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
        <h1 className="text-4xl">{index + 1}</h1>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Balance</span>
          <span className="text-2xl font-bold">${balance!.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
