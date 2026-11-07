import { Mail, Globe, AtSign, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Figma", "Git"];

const contacts = [
  { icon: Mail, text: "olesya&vera@example.com", href: "mailto:o&v@example.com" },
  { icon: Globe, text: "olesya&vera.dev", href: "https://olesya-vera.dev" },
  { icon: AtSign, text: "t.me/olesya-vera", href: "https://t.me/olesya-vera" },
  { icon: CalendarDays, text: "На платформе с 12 марта 2023" },
];

export function ProfileAbout() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>О себе</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Более двух лет занимаемся веб-разработкой. Начинали с вёрстки лендингов,
          сейчас проектируем интерфейсы веб-приложений и собираем дизайн-системы.
          В свободное время пишем заметки о фронтенде, участвуем в open-source
          проектах и учимся у коллег. Верим, что хороший интерфейс — тот, который
          не нужно объяснять.
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s} variant="secondary">{s}</Badge>
          ))}
        </div>

        <Separator />

        <ul className="grid gap-3 sm:grid-cols-2">
          {contacts.map(({ icon: Icon, text, href }) => (
            <li key={text} className="flex items-center gap-2 text-sm">
              <Icon className="h-4 w-4 text-muted-foreground" />
              {href ? (
                <a href={href} className="hover:underline">{text}</a>
              ) : (
                <span>{text}</span>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
