import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    console.log(posts)

    const renderPosts = posts.map((post) => {
        return(
            <Article 
                key={post.id}
                title={post.title} 
                date={post.date} 
                preview={post.preview}
                minutes={post.minutes}
            />
        )
    })

    return (
        <main>
            {renderPosts}
        </main>
    )
}

export default ArticleList