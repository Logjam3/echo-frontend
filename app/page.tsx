"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function HomePage() {
  const [tab, setTab] = useState("watchlist");

  return (
    <div className="min-h-screen bg-[#0b1120] text-white flex flex-col">
      <header className="p-6 border-b border-blue-900 bg-[#10192d] flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-blue-400">Echo Bureau</h1>
        <nav className="space-x-4">
          <Link href="/settings" className="text-sm hover:text-blue-300">Settings</Link>
        </nav>
      </header>

      <main className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r border-blue-900 bg-[#0f172a] p-6">
          <h2 className="text-blue-300 text-sm uppercase mb-4">Navigation</h2>
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="flex flex-col gap-2">
              <TabsTrigger value="watchlist" className="text-left w-full">📡 Watchlist</TabsTrigger>
              <TabsTrigger value="settings" className="text-left w-full">⚙️ Settings</TabsTrigger>
            </TabsList>
          </Tabs>
        </aside>

        {/* Main Panel */}
        <section className="flex-1 p-8 bg-[#0b1120] overflow-y-auto">
          <Tabs value={tab} className="w-full">
            <TabsContent value="watchlist">
              <h2 className="text-xl font-semibold mb-4">📡 Watchlist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for dynamic cards */}
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="bg-[#1e293b] border-blue-800 shadow">
                    <CardContent className="p-4">
                      <h3 className="text-blue-400 font-bold mb-1">Trend #{i + 1}</h3>
                      <p className="text-sm text-blue-200">Velocity rising ⚡</p>
                      <p className="text-xs text-slate-400 mt-2">Reddit Mentions: {Math.floor(Math.random() * 100)}</p>
                      <Button className="mt-4 w-full">View Insight</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <h2 className="text-xl font-semibold mb-4">⚙️ Settings</h2>
              <p className="text-slate-300">You’ll be able to configure alerts, personas, and thresholds here.</p>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
}
