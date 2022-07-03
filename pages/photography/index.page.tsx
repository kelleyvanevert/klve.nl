import { PhotoGridNav } from "../../lib/PhotoGrid";

import { photoCats } from "../../lib/photos";

export default function Photography() {
  return (
    <section className="wrap">
      <h1 className="hidden">Photography</h1>
      <p className="relative top-[-30px] text-center">
        (Select category to see more photos.)
      </p>
      <PhotoGridNav
        items={Object.entries(photoCats).map(([key, cat]) => ({
          ...cat,
          to: `/photography/${key}`,
        }))}
      />
    </section>
  );
}
