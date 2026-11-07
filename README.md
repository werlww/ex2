# Страница профиля (Next + Tailwind + shadcn/ui + Lucide)

## Запуск
```bash
npx create-next-app@latest my-profile      # TypeScript, Tailwind, App Router — Yes
cd my-profile
npx shadcn@latest init                     # стиль: Neutral
npx shadcn@latest add avatar button card badge tabs separator
npm install lucide-react                   # обычно ставится вместе с shadcn
```
Затем скопируйте папки `app/` и `components/profile/` из архива в проект
(заменив `app/page.tsx`) и запустите `npm run dev`.

## Сдача
```bash
git init && git add . && git commit -m "Profile page"
git remote add origin <ссылка на репозиторий>
git push -u origin main
```
