import React from "react";
import { useSelector } from "react-redux";
import { selectAuthors } from "../features/authors//authorsSlice";
import { Link, useParams } from "react-router-dom";


export default function Author () {

  const { name } = useParams();
  const authors = useSelector(selectAuthors);
  const author = authors[name];

  return (
    <main>
      {name ? <h1>Articles by {name}</h1> : <h1>No author selected</h1>}
      <ul>
        {
          author && author.articles ? author.articles.map(slug => {
            return (
              <li key={slug}>
                <Link to={`/articles/${slug}`}>
                  {slug}
                </Link>
              </li>
            )
          }) : <p> No Articles Found... </p>
        }
      </ul>
    </main>
  )
}
