import { useCallback, useRef, forwardRef, ReactNode } from "react";
import cx from "classnames";
import Link from "next/link";
import "react-photoswipe-2/lib/photoswipe.css";
// @ts-ignore
import { PhotoSwipeGallery } from "react-photoswipe-2";

import styles from "./PhotoGrid.module.css";

type PhotoGridProps = {
  borders?: boolean;
  wide?: boolean;
  children?: ReactNode;
};

export const PhotoGrid = forwardRef<HTMLDivElement, PhotoGridProps>(
  ({ borders, wide, children = null }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(
          styles.grid,
          borders && styles.borders,
          wide && styles.wide
        )}
      >
        <div className={styles.contents}>{children}</div>
      </div>
    );
  }
);

type PhotoNavGrid = {
  items: Array<{
    to: string;
    photo: string;
  }>;
};

export function PhotoGridNav({ items }: PhotoNavGrid) {
  return (
    <PhotoGrid>
      {items.map((item) => (
        <div key={item.photo} className={styles.image}>
          <div className={styles.ratio} />
          <Link href={item.to} className={styles.a}>
            <img alt="" src={item.photo} />
          </Link>
        </div>
      ))}
    </PhotoGrid>
  );
}

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

export function PhotoGridSwipe({ items }: PhotoswipeGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  const renderThumb = useCallback(
    (item: PhotoGridItem) => (
      <div key={item.photo} className={styles.image}>
        <div className={styles.ratio} />
        <div className={styles.a}>
          <img alt="" src={item.photo} />
        </div>
      </div>
    ),
    []
  );

  const options = {
    mainClass: "pswp--minimal--dark",
    barsSize: { top: 0, bottom: 0 },
    // captionEl: false,
    shareEl: false,
  };

  return (
    <PhotoGrid wide borders ref={ref}>
      <PhotoSwipeGallery
        items={items}
        options={options}
        thumbnailContent={renderThumb}
      />
    </PhotoGrid>
  );
}
