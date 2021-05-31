import { Feed } from 'feed'
import { Post } from '../pages/index'
import { formatSlug } from './slugFormat'

const domain = 'https://blog.hncaa.cn'

export const generateRss = (posts: Post[]) => {
  const year = new Date().getFullYear()
  const feed = new Feed({
    id: domain,
    link: domain,
    title: "Leftchest's Blog",
    copyright: `All rights reserved ${year}, Leftchest`,
    image: `${domain}/favicon.png`,
    favicon: `${domain}/favicon.ico`,
    author: {
      name: 'Leftchest',
      email: 'leftchest@foxmail.com',
      link: 'https://hncaa.cn'
    }
  })

  posts.forEach(post => {
    if (post.published) {
      feed.addItem({
        title: post.name,
        id: `${domain}${formatSlug(post.date, post.slug)}`,
        link: `${domain}${formatSlug(post.date, post.slug)}`,
        description: post.preview,
        date: new Date(post.date)
      })
    }
  })

  return feed.rss2()
}
