import React from 'react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">ALX Listing App</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Luxury Villa"
          description="Beautiful villa with ocean view"
          image="/assets/property1.jpeg"
        />
        <Card
          title="Modern Apartment"
          description="Stylish apartment in city center"
          image="/assets/property2.jpeg"
        />
        <Card
          title="Cozy Cottage"
          description="Perfect getaway in the countryside"
          image="/assets/property3.jpeg"
        />
        <Card
          title="Beach House"
          description="Stunning beachfront property"
          image="/assets/property4.jpeg"
        />
        <Card
          title="Mountain Cabin"
          description="Peaceful retreat in the mountains"
          image="/assets/property5.jpeg"
        />
        <Card
          title="City Loft"
          description="Industrial-style loft with character"
          image="/assets/property6.jpeg"
        />
        <Card
          title="City Loft"
          description="Industrial-style loft with character"
          image="/assets/property7.jpeg"
        />
      </div>
      
      <div className="mt-8">
        <Button text="View More" onClick={() => console.log('Clicked!')} />
      </div>
    </div>
  );
};

export default Home;