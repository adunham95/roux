import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Container } from '@/components/container';
import { DashboardCard } from '@/components/dashboardCard';
import TextInput from '@/components/inputs/text-input';
import { HeroSection } from '@/components/section/heroSection';
import { Section } from '@/components/section/section';
import { TabbedSection } from '@/components/section/tabbedSection';
import { UpSellBanner } from '@/components/upsell-banner/upsellBanner';
import { useState } from 'react';

const options = [
  {
    key: '1',
    imgSrc: '/images/sushi_placeholder.jpg',
    title: 'Sushi',
    category: 'Dinner',
  },
  {
    key: '2',
    imgSrc: '/images/pancake_placeholder.jpg',
    title: 'Pancakes',
    category: 'Breakfast',
  },
  {
    key: '3',
    imgSrc: '/images/seafood_placeholder.jpg',
    title: 'Seafood',
    category: 'Seafood',
  },
  {
    key: '4',
    imgSrc: '/images/charcuterieboard_placeholder.jpg',
    title: 'Charcuterie Board',
    category: 'Dinner',
  },
  {
    key: '5',
    imgSrc: '/images/sushi_placeholder.jpg',
    title: 'Sushi',
    category: 'Dinner',
  },
  {
    key: '6',
    imgSrc: '/images/pancake_placeholder.jpg',
    title: 'Pancakes',
    category: 'Breakfast',
  },
  {
    key: '7',
    imgSrc: '/images/seafood_placeholder.jpg',
    title: 'Seafood',
    category: 'Seafood',
  },
  {
    key: '8',
    imgSrc: '/images/charcuterieboard_placeholder.jpg',
    title: 'Charcuterie Board',
    category: 'Dinner',
  },
];

function Home() {
  const [search, setSearch] = useState('');
  return (
    <DefaultLayout pageName="Dashboard">
      <Container className="py-5">
        <HeroSection
          title="Get Cooking Today!"
          description="Unleash Your Culinary Creativity, One Recipe at a Time!"
          cta="Learn More"
        />
        <div className="mb-5">
          <UpSellBanner
            type="membership"
            title="Upgrade to Premium Membership Today"
            description="Access the cooking flow, custom branding and other features"
            cta="Upgrade"
            ctaHref="/settings/my-profile#membership"
          />
        </div>
        <DashboardCard
          title="Get Cooking"
          description="Find a recipe and get cooking"
        >
          <TextInput
            id="search"
            placeholder="Search"
            value={search}
            onChange={setSearch}
          />
          <Section
            className="mt-2"
            options={options}
            preCard={{ title: 'New Recipe', onClick: () => {} }}
          />
        </DashboardCard>
        <DashboardCard
          title="Featured"
          description="Recipes hand picked by our food team"
        >
          <Section options={options} />
        </DashboardCard>
        <DashboardCard
          title="Latest"
          description="Latest recipes from kitchens you follow"
        >
          <Section options={options} />
        </DashboardCard>
        <DashboardCard title="Meal Prepping">
          <TabbedSection
            tabs={[
              {
                name: 'Upcoming',
                count: 2,
                children: (
                  <>
                    <Section options={options.slice(0, 2)} />
                  </>
                ),
              },
              {
                name: 'Previous',
                count: 6,
                children: (
                  <>
                    <Section options={options.slice(0, 6)} />
                  </>
                ),
              },
            ]}
          />
        </DashboardCard>
      </Container>
    </DefaultLayout>
  );
}

export default Home;
