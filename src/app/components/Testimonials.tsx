import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Travelista made our honeymoon in Sri Lanka absolutely perfect! Every detail was taken care of, and we discovered places we never would have found on our own.',
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'Professional, reliable, and truly passionate about travel. They helped us plan an amazing family vacation that everyone enjoyed. Highly recommended!',
  },
  {
    name: 'Emma Williams',
    location: 'London, UK',
    rating: 5,
    text: 'Best travel agency I have ever worked with. They listened to what we wanted and delivered beyond our expectations. Will definitely book with them again!',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Travelers Say</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-blue-200 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">{testimonial.text}</p>
                <div>
                  <p>{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
