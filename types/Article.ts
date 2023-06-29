import { SanityImageWithAssetStub } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "sanity"

export type Article = {
  _id: string,
  _createdAt: Date,
  title: string,
  slug: string,
  headimage: SanityImageWithAssetStub | undefined,
  desc: string,
  content: PortableTextBlock[],
  unlisted: boolean | undefined
};