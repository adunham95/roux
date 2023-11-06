import MarketingLayout from '@/components/Layouts/page/MarketingLayout';
import { MarketingCallToAction } from '@/components/marketing/cta';
import { MarketingFeature } from '@/components/marketing/feature';
import { HeroV2 } from '@/components/marketing/hero_v2';
import React from 'react';

const Index = () => {
  return (
    <MarketingLayout>
      <>
        <HeroV2 />
        <MarketingFeature
          title="Features Include"
          subTitle="Cook, Create, Remember!"
          features={[
            {
              id: 'personal-cookbook',
              emoji: '📚',
              title: 'Personal Cookbook',
              description:
                'Build your own digital recipe library with all your favorite dishes, family heirlooms, and new culinary experiments. Never lose a recipe again.',
            },
            {
              id: 'recipe-history',
              emoji: '🕰️',
              title: 'Recipe History',
              description:
                "Rediscover your culinary journey. Track every recipe you've ever tried, making it easy to remember those delicious dishes you want to recreate",
            },
            {
              id: 'customize',
              emoji: '👩‍🍳',
              title: 'Customize and Personalize(Coming Soon)',
              description:
                "Tweak recipes to perfection. Make notes, substitutions, and adjustments to every recipe, so it's truly your own.",
            },
            {
              id: 'meal-plan',
              emoji: '🍽️',
              title: 'Meal Planning Made Easy(Coming Soon)',
              description:
                'Plan your weekly meals effortlessly. Remix recipes to design a diverse menu that keeps you excited about every meal.',
            },
            {
              id: 'culinary-inspiration',
              emoji: '🧑‍🍳',
              title: 'Culinary Inspiration(Coming Soon)',
              description:
                'Get creative in the kitchen. Explore unique twists on classic dishes and new flavor combinations to awaken your taste buds.',
            },
            {
              id: 'upgrade',
              emoji: '🚀',
              title: 'Upgrade Your Cooking Game(Coming Soon)',
              description:
                'Elevate your culinary skills and broaden your palate with Kitchendry, your ultimate kitchen companion.',
            },
          ]}
        />
        {/* <MarketingTimeline /> */}
        <MarketingCallToAction
          title="Ready to reimagine"
          subtitle="your cooking journey?"
          description={
            "Your kitchen adventures are about to get a whole lot tastier. Sign up and let's whip up something amazing together. Your kitchen, your rules"
          }
          ctaLink="/sign-up"
          ctaTitle="Sign Up"
          secondaryLink="/"
          secondaryTitle="Learn More"
        />
      </>
    </MarketingLayout>
  );
};

export default Index;
