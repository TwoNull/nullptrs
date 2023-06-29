import { SanityImageWithAssetStub } from "@sanity/image-url/lib/types/types"
import { getArticle, getSocials } from "@/sanity/sanity-utils"
import { PortableText } from '@portabletext/react'
import { BlockImage } from '../components/block'
import { Bottom } from '../components/menu'
import styles from './page.module.css'

type Props = {
    params: { slug: string }
}

type ImageProps = {
    value: SanityImageWithAssetStub
}
export default async function Page({ params }: Props) {
    const [article, socials] = await Promise.all([getArticle(params.slug), getSocials()])

    const components = {
      types: {
        image: (props: ImageProps) => <BlockImage asset={props.value.asset} />,
      }
    }

    return (
      <>
        <main className={styles.main}>
          {article.headimage ? <BlockImage asset={article.headimage.asset} /> : <></>}
          <div className={styles.titlebox}>
            <h1>{article.title}</h1>
            <hr/>
            {article.desc ? <h3>{article.desc}</h3> : <></>}
          </div>
          <PortableText value={article.content} components={components} />
        </main>
        <Bottom socials={socials}/>
      </>
    )
}