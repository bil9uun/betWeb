//comp

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Trophy } from "lucide-react";

interface MatchCardProps {
  matchName?: string;
  leagueName?: string;
  startTime: undefined | Date;
  team1?: {
    name?: string;
    odds?: number;
  };
  team2?: {
    name?: string;
    odds?: number;
  };
}

export default function LeagueMatch({
  matchName,
  leagueName,
  startTime,
  team1,
  team2,
}: MatchCardProps) {
  const formatDate = (dateString: Date | undefined) => {
    const date = new Date(dateString!);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <Card className="w-full max-w-md  hover:text-black hover:bg-accent transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">{matchName}</CardTitle>
        <Badge variant="secondary" className="flex items-center space-x-1">
          <Trophy size={16} />
          <span>{leagueName}</span>
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          <Clock size={16} />
          <time dateTime={(startTime || "") as string}>
            {formatDate(startTime)}
          </time>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <p className="font-medium">{team1?.name}</p>
            {/* <Badge variant="outline">{team1?.odds.toFixed(2)}</Badge> */}
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl font-bold">VS</span>
          </div>
          <div className="space-y-1">
            <p className="font-medium">{team2?.name}</p>
            {/* <Badge variant="outline">{team2?.odds.toFixed(2)}</Badge> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
