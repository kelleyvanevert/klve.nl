import styled from "styled-components/macro";
import React, { useCallback } from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import "react-photoswipe/lib/photoswipe.css";
import { PhotoSwipeGallery } from "react-photoswipe";

interface PhotoGridProps {
  borders?: boolean;
  wide?: boolean;
  children?: React.ReactNode;
}

export default function PhotoGrid({
  borders,
  wide,
  children = null,
}: PhotoGridProps) {
  return (
    <Container className={cx(borders && "borders", wide && "wide")}>
      <div className="contents">{children}</div>
    </Container>
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
};

const PHOTOSWIPE_OPTS = {
  mainClass: "pswp--minimal--dark",
  barsSize: { top: 0, bottom: 0 },
  // captionEl: false,
  shareEl: false,
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
  // const { hash } = useLocation();

  // const [isOpen, setIsOpen] = useState<boolean>(
  //   Boolean(hash.match(/gid/) && hash.match(/pid/))
  // );

  // useNavEffect(({ hash }) => {
  //   // setIsOpen(Boolean(hash.match(/gid/) && hash.match(/pid/)));
  // });

  const renderThumb = useCallback(
    (item: PhotoGridItem) => (
      <div key={item.photo} className="image">
        <div className="ratio" />
        <div
          className="a"
          // onClick={() => setIsOpen(true)}
        >
          <img alt="" src={item.photo} />
        </div>
      </div>
    ),
    []
  );

  return (
    <PhotoGrid wide borders>
      <PhotoSwipeGallery
        // isOpen={isOpen}
        items={items}
        options={PHOTOSWIPE_OPTS}
        // onClose={() => setIsOpen(false)}
        thumbnailContent={renderThumb}
      />
    </PhotoGrid>
  );
};

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
  }
  &.borders .image {
    border-right: 1px dashed #ccc;
    border-bottom: 1px dashed #ccc;
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
    }
  }
`;