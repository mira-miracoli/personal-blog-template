import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Image from '@theme/IdealImage';
import styles from './index.module.css';
import avatar from '@site/static/img/avatar.webp';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.backgroundImage)}>
      <div className={clsx('container', styles.cardContainer)}>
        <div className={clsx(styles.cardInfo)}>
          <Image img={avatar} alt='Miracoli' about='Miracoli' className={clsx(styles.cardInfoImage)}
            width={150} height={150} loading='lazy' decoding='async'/>

          <h1 className="hero__title">{siteConfig.title}</h1>
          <h2 className="hero__subtitle">{siteConfig.tagline}</h2>

          <div style={{margin: '1rem'}}>
            <Link className={clsx('button button--primary')} title='Blog' to='/blog'>
                📝 Zum Blog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Miracoli's Blog">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
