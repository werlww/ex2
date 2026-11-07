import { Image as ImageIcon, FileText, Bookmark, Heart, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const posts = [
  { title: "Как мы перешли на shadcn/ui", text: "Рассказываем, почему копируемые компоненты удобнее готовой библиотеки.", likes: 124, comments: 18 },
  { title: "Tailwind: 5 приёмов для адаптива", text: "Небольшая подборка классов, которые экономят время.", likes: 98, comments: 7 },
  { title: "Итоги года в разработке", text: "Что получилось, что нет и чему научились.", likes: 210, comments: 34 },
];

function PostList({ items }: { items: typeof posts }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((p) => (
        <Card key={p.title}>
          <CardHeader>
            <CardTitle className="text-base">{p.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">{p.text}</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Heart className="h-4 w-4" />{p.likes}</span>
              <span className="flex items-center gap-1"><MessageCircle className="h-4 w-4" />{p.comments}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function Empty({ icon: Icon, text }: { icon: typeof FileText; text: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed py-12 text-muted-foreground">
      <Icon className="h-8 w-8" />
      <p className="text-sm">{text}</p>
    </div>
  );
}

export function ProfileTabs() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all">Все посты</TabsTrigger>
        <TabsTrigger value="media">Медиа</TabsTrigger>
        <TabsTrigger value="docs">Документы</TabsTrigger>
        <TabsTrigger value="saved">Избранное</TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="mt-4">
        <PostList items={posts} />
      </TabsContent>
      <TabsContent value="media" className="mt-4">
        <Empty icon={ImageIcon} text="Пока нет фото и видео" />
      </TabsContent>
      <TabsContent value="docs" className="mt-4">
        <Empty icon={FileText} text="Документов пока нет" />
      </TabsContent>
      <TabsContent value="saved" className="mt-4">
        <PostList items={posts.slice(0, 1)} />
      </TabsContent>
    </Tabs>
  );
}
