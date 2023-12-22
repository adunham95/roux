import AuthWrapper from '@/auth/AuthWrapper';
import MarketingLayout from '@/components/Layouts/page/MarketingLayout';
import { MarketingCallToAction } from '@/components/marketing/cta';
import { MarketingFeature } from '@/components/marketing/feature';
import { HeroV2 } from '@/components/marketing/hero_v2';
import React from 'react';

const Index = () => {
  return (
    <AuthWrapper>
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
                  "Rediscover your culinary journey. Track every substitution and adjustment to every recipe, so it's truly your own.",
              },
              {
                id: 'customize',
                emoji: '👩‍🍳',
                title: 'Cooking Mode(Coming Soon)',
                description:
                  'Let our cooking mode lead you through each recipe step, ensuring perfection with every dish.',
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
                title: 'Fork It!(Coming Soon)',
                description:
                  'Get creative in the kitchen. Place your unique twists on classic dishes and new flavor combinations.',
              },
              {
                id: 'challenges',
                emoji: '🔥',
                title: 'Challenges(Coming Soon)',
                description:
                  'Impress our team with your culinary creations, and you could earn the recognition you deserve as a culinary maestro.',
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
    </AuthWrapper>
  );
};

export default Index;
