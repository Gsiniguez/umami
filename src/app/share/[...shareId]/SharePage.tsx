'use client';
import { useShareToken } from 'components/hooks';
import Page from 'components/layout/Page';
import WebsiteDetailsPage from '../../(main)/websites/[websiteId]/WebsiteDetailsPage';
import Header from './Header';
import styles from './SharePage.module.css';

export default function SharePage({ shareId }) {
  const { shareToken, isLoading } = useShareToken(shareId);

  if (isLoading || !shareToken) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Page>
        <Header />
        <WebsiteDetailsPage websiteId={shareToken.websiteId} />
        {/* <Footer /> */}
      </Page>
    </div>
  );
}
