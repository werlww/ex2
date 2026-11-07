import { Settings, Share2, Pencil } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ProfileHeader() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-6 pt-6 sm:flex-row sm:items-start">
        <Avatar className="h-28 w-28">
          <AvatarImage src="" alt="Аватар Веры и леси" />
          <AvatarFallback className="text-3xl">ОВ</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-2 text-center sm:text-left">
          <h1 className="text-2xl font-bold tracking-tight">Олеся и Вера</h1>
          <p className="text-muted-foreground">Frontend-разработчик</p>
          <p className="text-sm font-medium">@werlw&olesya</p>
          <p className="max-w-xl text-sm text-muted-foreground">
            Делаем удобные и красивые интерфейсы на React и Next.js. Любим
            минимализм, доступность и аккуратный код.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Button>
            <Pencil className="mr-2 h-4 w-4" />
            Редактировать профиль
          </Button>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Поделиться
          </Button>
          <Button variant="outline" size="icon" aria-label="Настройки">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
