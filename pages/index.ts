import React from "react";
import Card from '@/components/Card';
import Button from '@/components/common/Button';
  
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">ALX Listing App</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Sample Property"
          description="A beautiful property located in the heart of the city."
          image="/assets/placeholder.jpg"
          price="$500,000"
          />
      </div>

      <div className="mt-8">
        <Button
          text="Load More Listings" 
          onclick={() => console.log('Clicked!')} />
      </div>
    </div>
  );
};

export default Home;

