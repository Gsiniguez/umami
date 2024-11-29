'use client';
import { useNavigation } from 'components/hooks';
import FilterTags from 'components/metrics/FilterTags';
import { FILTER_COLUMNS } from 'lib/constants';
import WebsiteChart from './WebsiteChart';
import WebsiteExpandedView from './WebsiteExpandedView';
import WebsiteMetricsBar from './WebsiteMetricsBar';
import WebsiteProvider from './WebsiteProvider';
import WebsiteTableView from './WebsiteTableView';

export default function WebsiteDetailsPage({ websiteId }: { websiteId: string }) {
  // const pathname = usePathname();
  const { query } = useNavigation();

  // const showLinks = !pathname.includes('/share/');
  const { view } = query;

  const params = Object.keys(query).reduce((obj, key) => {
    if (FILTER_COLUMNS[key]) {
      obj[key] = query[key];
    }
    return obj;
  }, {});

  return (
    <WebsiteProvider websiteId={websiteId}>
      {/* <WebsiteHeader websiteId={websiteId} showLinks={showLinks} /> */}
      <FilterTags websiteId={websiteId} params={params} />
      <WebsiteMetricsBar websiteId={websiteId} showFilter={true} showChange={true} sticky={true} />
      <WebsiteChart websiteId={websiteId} />
      {!view && <WebsiteTableView websiteId={websiteId} />}
      {view && <WebsiteExpandedView websiteId={websiteId} />}
    </WebsiteProvider>
  );
}
