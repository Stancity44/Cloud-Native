import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// Cloud-Native Home Page Header
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary heroAzureHome")} style={{ backgroundImage: 'url(/Cloud-Native/img/cloud-native-hero-bg.webp)', padding: '8rem 0rem' }}>
      <div className="container">
      <div className="row" style={{ alignItems: 'center' }}>
      <div className="col col--6 text--left">
        <h1 className="hero__title">AI Apps and Agents</h1>
        <p>{siteConfig.customFields.description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg text--left"
            to="/Build-IA/"
            data-bi-area="Hero"
            data-bi-name="Build Intelligent Apps"
          >
            Start now
          </Link>
        </div>
        </div>
        </div>
      </div>
    </header>
  );
}

// Cloud-Native Home Page
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`AI Apps and Agents`}
      description={`${siteConfig.customFields.description}`} >
      <HomepageHeader />
      <main className={styles.pageBg}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
