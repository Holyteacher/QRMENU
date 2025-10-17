"use client";

import Link from "next/link";
import { Command, ChevronsLeft, ChevronsRight } from "lucide-react"; // Chevrons ikonlarını ekledik

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar, // Sidebar durumunu kontrol etmek için hook'u ekledik
} from "@/components/ui/sidebar";
import { APP_CONFIG } from "@/config/app-config";
import { rootUser } from "@/data/users";
import { sidebarItems } from "@/navigation/sidebar/sidebar-items";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar, state } = useSidebar(); // Hook'u burada kullanıyoruz

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/dashboard/default">
                <Command />
                <span className="text-base font-semibold">{APP_CONFIG.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarItems} />
      </SidebarContent>
      <SidebarFooter>
        {/* --- YENİ EKLENEN BUTON --- */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={toggleSidebar}>
              {state === "expanded" ? <ChevronsLeft /> : <ChevronsRight />}
              <span>Collapse</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* --- YENİ BUTON BİTİŞ --- */}
        <NavUser user={rootUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
