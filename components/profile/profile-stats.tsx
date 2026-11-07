import { FileText, Users, UserPlus, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Публикации", value: "128", icon: FileText },
  { label: "Подписчики", value: "12.4K", icon: Users },
  { label: "Подписки", value: "342", icon: UserPlus },
  { label: "Лайки", value: "48.9K", icon: Heart },
];

export function ProfileStats() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map(({ label, value, icon: Icon }) => (
        <Card key={label}>
          <CardContent className="flex flex-col items-center gap-1 py-5">
            <Icon className="h-5 w-5 text-muted-foreground" />
            <span className="text-2xl font-bold">{value}</span>
            <span className="text-sm text-muted-foreground">{label}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
