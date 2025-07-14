import Image from 'next/image';
import { TESTIMONIALS, Testimonial } from '@/constants/testimonials';
import { StarIcon } from '@/components/ui/icons';

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Müşterilerimizin Yorumları
          </h2>
          <p className="text-gray-600 text-lg">
            Beatty Center&rsquo;da yaşadıkları deneyimleri paylaşan değerli müşterilerimiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial: Testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                {testimonial.image && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  {testimonial.role && (
                    <p className="text-gray-600">{testimonial.role}</p>
                  )}
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 