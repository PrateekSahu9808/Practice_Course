import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <main>
        <h1>The Blog</h1>
        <p>
            <Link href="/blog/post-1">Post1</Link>
            <Link href="/blog/post-2">Post2</Link>
        </p>
    </main>
  )
}

export default BlogPage