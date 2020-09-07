import styled from "styled-components/macro";
import React, { useCallback, useRef } from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import "react-photoswipe/lib/photoswipe.css";
// @ts-ignore
import { PhotoSwipeGallery } from "react-photoswipe-2";

interface PhotoGridProps {
  borders?: boolean;
  wide?: boolean;
  children?: React.ReactNode;
}

export const PhotoGrid = React.forwardRef<HTMLDivElement, PhotoGridProps>(
  ({ borders, wide, children = null }, ref) => {
    return (
      <Container ref={ref} className={cx(borders && "borders", wide && "wide")}>
        <div className="contents">{children}</div>
      </Container>
    );
  }
);

interface PhotoNavGrid {
  items: Array<{
    to: string;
    photo: string;
  }>;
}

export function PhotoGridNav({ items }: PhotoNavGrid) {
  return (
    <PhotoGrid>
      {items.map((item) => (
        <div key={item.photo} className="image">
          <div className="ratio" />
          <NavLink to={item.to}>
            <img alt="" src={item.photo} />
          </NavLink>
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
      <div key={item.photo} className="image">
        <div className="ratio" />
        <div className="a">
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
    getThumbBoundsFn(index: number) {
      const thumbnailImage = ref.current
        ?.getElementsByClassName("pswp-thumbnail")
        [index]?.getElementsByTagName("img")[0];
      if (!thumbnailImage) {
        return;
      }

      const pageYScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      const rect = thumbnailImage.getBoundingClientRect();
      return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
    },
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

const Container = styled.div`
  margin: 0 -50px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 0 -30px;
  }

  .contents {
    margin-right: -1px;

    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }

  &.borders {
    border-top: 1px dashed #ccc;

    .dark-mode & {
      border-color: #555;
    }
  }
  &.borders .image {
    border-right: 1px dashed #ccc;
    border-bottom: 1px dashed #ccc;

    .dark-mode & {
      border-color: #555;
    }
  }

  .image {
    box-sizing: border-box;
    position: relative;
    float: left;

    width: 25%;
  }
  &.wide .image {
    width: 20%;
  }

  /* TODO larger screens */
  @media (max-width: 1200px) {
    .image {
      width: 33.3333%;
    }
    &.wide .image {
      width: 25%;
    }
  }
  @media (max-width: 960px) {
    .image {
      width: 50%;
    }
    &.wide .image {
      width: 33.3333%;
    }
  }
  @media (max-width: 600px) {
    .image {
      width: 100%;
    }
    &.wide .image {
      width: 50%;
    }
  }
  @media (max-width: 400px) {
    &.wide .image {
      width: 100%;
    }
  }

  .image {
    .ratio {
      position: relative;
      width: 100%;
      padding-bottom: 100%;
    }
    a,
    .a {
      display: block;
      position: absolute;
      top: 1.5em;
      left: 1.5em;
      right: 1.5em;
      bottom: 1.5em;

      &:after {
        display: none;
      }
    }
    a img,
    .a img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;

      cursor: pointer;
    }
  }
`;
