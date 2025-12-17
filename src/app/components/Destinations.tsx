import { Card, CardContent } from './ui/card';
import { MapPin, Star } from 'lucide-react';
import { Button } from './ui/button';

const destinations = [
  {
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY1NzY2MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $899',
    rating: 4.9,
    tours: 24,
  },
  {
    name: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1669986480140-2c90b8edb443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjU4Mzk0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $1,499',
    rating: 4.8,
    tours: 18,
  },
  {
    name: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1758557693900-353e84f85859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHRvdXJpc218ZW58MXx8fHwxNzY1ODEyMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $1,199',
    rating: 4.7,
    tours: 32,
  },
  {
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDF8fHx8MTc2NTgyNTQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $1,799',
    rating: 5.0,
    tours: 15,
  },
  {
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1765247842756-ba8857b2e40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBjb3VwbGUlMjB2YWNhdGlvbnxlbnwxfHx8fDE3NjU4ODE4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $1,299',
    rating: 4.9,
    tours: 28,
  },
  {
    name: 'African Safari',
    image: 'https://images.unsplash.com/photo-1763878119119-aff0820121fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB3aWxkbGlmZSUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjU3NzI4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $2,299',
    rating: 4.9,
    tours: 12,
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Popular Destinations</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Handpicked destinations that offer unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{destination.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3>{destination.name}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-gray-600 text-sm">{destination.tours} tours available</p>
                    <p className="mt-1 text-blue-600">{destination.price}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}
