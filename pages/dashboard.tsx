import { DefaultLayout } from '@/components/Layouts/DefaultLayout';
import { Container } from '@/components/container';

export default function Home() {
  return (
    <DefaultLayout pageName="Dashboard">
      <Container>
        <h1>Data</h1>
      </Container>
    </DefaultLayout>
  );
}
