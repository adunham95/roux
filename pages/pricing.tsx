import MarketingLayout from '@/components/Layouts/page/MarketingLayout';
import { Container } from '@/components/container';
import { MarkingHeader } from '@/components/marketing/header';
import PricingSection from '@/components/marketing/pricingSection';
import React from 'react';

const Pricing = () => {
  return (
    <MarketingLayout pageName="Pricing">
      <Container className="py-8">
        <MarkingHeader
          label="Pricing"
          title="Choose Your Culinary Adventure"
          description="Discover our flexible pricing options for the Kitchendry and choose the plan that suits your culinary journey. Whether you're an aspiring home chef or a professional cook, our subscription plans provide a range of features to elevate your cooking experience."
        />
        <PricingSection />
      </Container>
    </MarketingLayout>
  );
};

export default Pricing;
