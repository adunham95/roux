import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import { Container } from '@/components/container';
import { Section } from '@/components/section/section';

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

export default function Home() {
  return (
    <DefaultLayout pageName="Dashboard">
      <Container>
        <Container className="pt-5">
          <Section title="Featured" options={options} />
        </Container>
      </Container>
    </DefaultLayout>
  );
}
