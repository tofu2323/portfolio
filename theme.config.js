import React6 from 'react'

const YEAR = new Date().getFullYear()

export default {
  readMore: 'Read More 🙌',
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time>© Fumiya Goto
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  titleSuffix: ' | Gotch',
  postFooter: null
}
