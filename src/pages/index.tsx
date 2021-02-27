import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Stake from '../components/stake'
import Pool from '../components/pool'
import Extra from '../components/extra'
import Layout from '../components/layout'
import { getPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import { report } from 'process'

type Props = {
  allPosts: {
    hero: Post
    stories: Post[]
  }
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts.hero
  const morePosts = allPosts.stories

  return (
    <>
      <Layout>
        <Head>
          <title>RaceX - Cardano ADA Stake Pool</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@racexpool" />
          <meta name="twitter:title" content="RaceX - Cardano ADA Stake Pool" />
          <meta name="twitter:description" content={`Inspired by high-performance cars, our Cardano ADA Stake Pool is secure, fast, 
            high available and cloud native. All to bring you the best rewards possible.`} />
          <meta name="twitter:image" content="https://racexpool.com/assets/blog/welcome/cover.jpeg" />
          <meta
            name="og:description"
            content={`Inspired by high-performance cars, our Cardano ADA Stake Pool is secure, fast, 
            high available and cloud native. All to bring you the best rewards possible.`}
          />
          <meta property="og:image" content="/assets/blog/welcome/cover.jpeg" />
        </Head>
        <Container>
          <Intro />
          <Stake />
          <Pool />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <Extra />
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'hero',
  ])

  return {
    props: { allPosts },
  }
}