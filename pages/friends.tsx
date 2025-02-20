import { DiscussionEmbed } from 'disqus-react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export interface Friend {
  id: string
  link: string
  avatar: string
  bgColor: string
}

const Friends = () => {
  const friends: Friend[] = [
    {
      id: '@Felinae',
      link: 'https://code.felinae98.cn/',
      avatar: 'https://avatars3.githubusercontent.com/u/23295345?s=160',
      bgColor: '#473922'
    },
    {
      id: '@agnoCJY',
      link: 'https://jychuuu.com/',
      avatar: 'https://avatars1.githubusercontent.com/u/46088026?s=160',
      bgColor: '#191919'
    },
    {
      id: '@TenkeySeven',
      link: 'https://blog.tenkeyseven.com/',
      avatar: 'https://avatars2.githubusercontent.com/u/33371927?s=160',
      bgColor: '#b59672'
    },
    {
      id: '@Silvester',
      link: 'https://silvester.wang/',
      avatar: 'https://avatars0.githubusercontent.com/u/34436920?s=160',
      bgColor: '#595058'
    },
    {
      id: '@ash0ne',
      link: 'https://blog.ash0ne.com/',
      avatar: 'https://avatars3.githubusercontent.com/u/28522665?s=160',
      bgColor: '#9f8cd1'
    },
    {
      id: '@FKY',
      link: 'http://blog.fkynjyq.com/',
      avatar: 'https://avatars2.githubusercontent.com/u/16451516?s=160',
      bgColor: '#005240'
    },
    {
      id: '@idealclover',
      link: 'https://idealclover.top/',
      avatar: 'https://avatars2.githubusercontent.com/u/24428416?s=160',
      bgColor: '#487747'
    },
    {
      id: '@kastnerorz',
      link: 'https://github.com/kastnerorz',
      avatar: 'https://avatars3.githubusercontent.com/u/26199342?s=160',
      bgColor: '#26498e'
    },
    {
      id: '@Patrick Wu',
      link: 'https://patrickwu.space/',
      avatar: 'https://avatars0.githubusercontent.com/u/15316889?s=160',
      bgColor: '#61a3cf'
    }
  ]

  return (
    <>
      <Head>
        <title>Friends & Guestbook - Leftchest&apos;s Blog</title>
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 justify-center flex-grow max-w-3xl">
          <Navbar />

          <div className="my-16">
            <div className="mb-12 text-center text-3xl font-bold dark:text-white">Friends & Guestbook</div>

            <div className="flex justify-center items-center flex-wrap space-x-3">
              {friends.map(f => (
                <a
                  key={f.id}
                  href={f.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: f.bgColor }}
                  className="inline-block relative overflow-hidden px-4 py-2 rounded mb-3 hover:opacity-90"
                >
                  <img
                    src={f.avatar}
                    alt="avatar"
                    className="absolute w-12 h-12 top-0 bottom-0 left-0 rounded-xl transform rotate-12"
                  />
                  <div className="text-white ml-12">{f.id}</div>
                </a>
              ))}
            </div>

            <div className="text-center text-gray-400 mt-4">
              <a className="rounded text-purple-400 hover:text-purple-300" href="mailto:leftchest@foxmail.com">
                Email me
              </a>{' '}
              if you want to get in touch!
            </div>

            <div className="mt-8">
              <DiscussionEmbed shortname="hncaa" config={{ identifier: 'leftchest-blog-guestbook' }} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Friends
