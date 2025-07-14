import React from 'react';
import { Container } from '@/components/ui/container';

export function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Misyonumuz</h2>
            <p className="text-lg text-muted-foreground">
              Müşterilerimizin güzellik ve sağlık ihtiyaçlarını en üst düzeyde karşılamak için çalışıyoruz. Beatty Center&rsquo;da her zaman en iyisini sunmayı hedefliyoruz.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Vizyonumuz</h2>
            <p className="text-lg text-muted-foreground">
              Türkiye&rsquo;nin önde gelen estetik ve güzellik merkezlerinden biri olarak, 
              sürekli yenilenen teknolojiler ve tedavi yöntemleriyle sektörde öncü olmayı 
              hedefliyoruz. Müşteri memnuniyeti ve güvenliği bizim için her zaman 
              öncelikli konumdadır.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
} 