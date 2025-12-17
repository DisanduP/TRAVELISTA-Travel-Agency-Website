import { Plane, Hotel, Map, Compass, Umbrella, Camera } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Find the best deals on flights to destinations worldwide with our exclusive partnerships.',
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    description: 'From luxury resorts to cozy boutique hotels, we have accommodations for every budget.',
  },
  {
    icon: Map,
    title: 'Custom Itineraries',
    description: 'Personalized travel plans designed around your preferences and interests.',
  },
  {
    icon: Compass,
    title: 'Guided Tours',
    description: 'Expert local guides to show you the hidden gems and must-see attractions.',
  },
  {
    icon: Umbrella,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage to protect your trip and give you peace of mind.',
  },
  {
    icon: Camera,
    title: 'Photo Packages',
    description: 'Professional photography services to capture your precious travel moments.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Everything you need for the perfect trip, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
