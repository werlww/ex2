import { Hexagon, Send, MessageCircle, AtSign, Rss } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const links = ["О нас", "Поддержка", "Блог", "Вакансии"];
const legal = ["Конфиденциальность", "Условия использования"];
const socials = [
  { icon: Send, label: "Telegram" },
  { icon: MessageCircle, label: "Чат" },
  { icon: AtSign, label: "Почта" },
  { icon: Rss, label: "Блог RSS" },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 text-sm lg:flex-row lg:justify-between">
        <div className="flex items-center gap-2">
          <Hexagon className="h-5 w-5" />
          <span className="text-muted-foreground">© 2026 Orbit. Все права защищены</span>
        </div>

        <Separator orientation="vertical" className="hidden h-5 lg:block" />

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {links.map((l) => (
            <a key={l} href="#" className="hover:underline">{l}</a>
          ))}
        </nav>

        <Separator orientation="vertical" className="hidden h-5 lg:block" />

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-muted-foreground">
          {legal.map((l) => (
            <a key={l} href="#" className="hover:underline">{l}</a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map(({ icon: Icon, label }) => (
            <a key={label} href="#" aria-label={label} className="text-muted-foreground hover:text-foreground">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
