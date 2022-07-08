import Head from "next/head";
import tw from "tailwind-styled-components";
import { GalleryFilter } from "../components/GalleryFilter";
import { GalleryItems } from "../components/GalleryItems";

export default function Gallery() {
  return (
    <div className="max-w-11xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Xakusi | Gallery</title>
        <meta name="description" content="Browse and see all minted items" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-11xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryContainer>
          <GalleryFilter />

          <GalleryItems />
        </GalleryContainer>
      </main>
    </div>
  );
}

const GalleryContainer = tw.div`
    flex
`;
