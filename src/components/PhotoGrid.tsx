import React, { useState, useCallback } from "react";
import useReactRouter from "use-react-router";
import cx from "classnames";
import "react-photoswipe/lib/photoswipe.css";
import { PhotoSwipeGallery } from "react-photoswipe";
import { NavLink } from "react-router-dom";
import styles from "./PhotoGrid.module.scss";

interface PhotoGridProps {
  borders?: boolean;
  wide?: boolean;
  children?: React.ReactNode;
}

export default function PhotoGrid({
  borders,
  wide,
  children = null
}: PhotoGridProps) {
  return (
    <div
      className={cx({
        [styles.photoGrid]: true,
        [styles.borders]: borders,
        [styles.wide]: wide
      })}
    >
      <div className={styles.contents}>{children}</div>
    </div>
  );
}

interface PhotoNavGrid {
  items: Array<{
    to: string;
    photo: string;
  }>;
}

PhotoGrid.Nav = function PhotoNavGrid({ items }: PhotoNavGrid) {
  return (
    <PhotoGrid>
      {items.map(item => (
        <div key={item.photo} className={styles.image}>
          <div className={styles.ratio} />
          <NavLink to={item.to}>
            <img alt="" src={item.photo} />
          </NavLink>
        </div>
      ))}
    </PhotoGrid>
  );
};

const PHOTOSWIPE_OPTS = {
  mainClass: "pswp--minimal--dark",
  barsSize: { top: 0, bottom: 0 },
  // captionEl: false,
  shareEl: false
};

export interface PhotoGridItem {
  photo: string;
  src: string;
  w: number;
  h: number;
  title?: string;
}

interface PhotoswipeGridProps {
  items: PhotoGridItem[];
}

PhotoGrid.Swipe = function PhotoswipeGrid({ items }: PhotoswipeGridProps) {
  const {
    location: { hash }
  } = useReactRouter();

  const [isOpen, setIsOpen] = useState<boolean>(
    Boolean(hash.match(/gid/) && hash.match(/pid/))
  );

  const renderThumb = useCallback(
    (item: PhotoGridItem) => (
      <div key={item.photo} className={styles.image}>
        <div className={styles.ratio} />
        <div className={styles.a} onClick={() => setIsOpen(true)}>
          <img alt="" src={item.photo} />
        </div>
      </div>
    ),
    []
  );

  return (
    <PhotoGrid wide borders>
      <PhotoSwipeGallery
        isOpen={isOpen}
        items={items}
        options={PHOTOSWIPE_OPTS}
        onClose={() => setIsOpen(false)}
        thumbnailContent={renderThumb}
      />
    </PhotoGrid>
  );
};
