import imageUrlBuilder from '@sanity/image-url'
import config from '@/sanity/config'
import Image from 'next/image'
import { createClient } from 'next-sanity';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Article } from '@/types/Article'
import styles from './block.module.css'

const sanityConfig = createClient(config);
const builder = imageUrlBuilder(sanityConfig)

function urlFor(source: SanityImageSource) {
    return builder.image(source)
}

export function BlockImage(asset: SanityImageSource) {
    const src = urlFor(asset).url()
    return (
        <div className={styles.container}>
            <Image src={src} alt="" width={0} height={0} sizes="100vw" style={{ width: '80%', height: 'auto', maxWidth: '600px', borderRadius:'2%', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
        </div>
    )
}

export function HeadImage(asset: SanityImageSource, article: Article ) {
    const src = urlFor(asset).url()
    return (
        <div className={styles.container}>
            <Image src={src} alt="" width={0} height={0} sizes="100vw" style={{ width: '80%', height: 'auto', maxWidth: '600px', borderRadius:'2%', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}/>
        </div>
    )
}