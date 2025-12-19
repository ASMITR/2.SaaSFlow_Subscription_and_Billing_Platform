import Pricing from '@/components/sections/Pricing';

export const metadata = {
  title: 'Pricing - SaaSFlow',
  description: 'Choose the perfect plan for your business. Start free and scale as you grow.',
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      <Pricing />
    </div>
  );
}