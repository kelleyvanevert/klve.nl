import React from "react";
import useReactRouter from "use-react-router";
import { Redirect, Link } from "react-router-dom";
import PhotoGrid from "~/components/PhotoGrid";
import styles from "./PhotoCategory.module.scss";
import { photoCats } from "./data";

export default function PhotoCategory() {
  const {
    match: {
      params: { category: key }
    }
  } = useReactRouter<{ category: string }>();

  if (!photoCats[key]) {
    return <Redirect to="/photography" />;
  }

  const cat = photoCats[key];

  return (
    <article>
      <div className="wrap">
        <h1>
          <strong>
            <span className={styles.back}>
              <Link to="/photography">
                <i />
              </Link>
            </span>
            {cat.title}
          </strong>
        </h1>
      </div>
      <PhotoGrid.Swipe items={cat.images} />
    </article>
  );
}
