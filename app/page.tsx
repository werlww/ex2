import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileStats } from "@/components/profile/profile-stats";
import { ProfileAbout } from "@/components/profile/profile-about";
import { ProfileTabs } from "@/components/profile/profile-tabs";
import { SiteFooter } from "@/components/profile/site-footer";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="mx-auto w-full max-w-4xl flex-1 space-y-6 px-4 py-8">
        <ProfileHeader />
        <ProfileStats />
        <ProfileAbout />
        <ProfileTabs />
      </main>
      <SiteFooter />
    </div>
  );
}
