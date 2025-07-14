import { Card } from '@/components/ui/card';
import { Service } from '@/types/services';

interface ProcessSectionProps {
  process: Service['process'];
}

export function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-8">Uygulama Süreci</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {process.map((step: string, index: number) => (
          <Card key={index} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <h3 className="font-semibold">Adım {index + 1}</h3>
            </div>
            <p className="text-muted-foreground">{step}</p>
          </Card>
        ))}
      </div>
    </div>
  );
} 