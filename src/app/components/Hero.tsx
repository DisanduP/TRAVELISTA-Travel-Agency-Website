import { Button } from './ui/button';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY1NzY2MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tropical beach paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="mb-6">
          Discover Your Next Adventure
        </h1>
        <p className="mb-8 max-w-2xl mx-auto text-lg opacity-90">
          Explore stunning destinations across Sri Lanka and beyond. Let us create unforgettable 
          travel experiences tailored just for you.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-2 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="flex-1 px-4 py-3 rounded-md text-gray-900 outline-none"
          />
          <input
            type="date"
            className="px-4 py-3 rounded-md text-gray-900 outline-none"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 px-8">
            <Search className="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl mb-2">500+</div>
            <div className="text-sm opacity-90">Destinations</div>
          </div>
          <div>
            <div className="text-4xl mb-2">10K+</div>
            <div className="text-sm opacity-90">Happy Travelers</div>
          </div>
          <div>
            <div className="text-4xl mb-2">15+</div>
            <div className="text-sm opacity-90">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl mb-2">98%</div>
            <div className="text-sm opacity-90">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
