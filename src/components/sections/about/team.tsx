import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Kurucu & Baş Dermatolog',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Estetik Uzmanı',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Cilt Bakım Uzmanı',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop&q=60',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Lazer Uzmanı',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=60',
  },
];

export function Team() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Profesyonel Ekibimiz
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Deneyimli ve uzman kadromuzla size en iyi hizmeti sunuyoruz.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 