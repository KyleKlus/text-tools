import Content from "@/lib/container/Content";

import type { Metadata, Viewport } from 'next'
import styles from '../TextToolsPage.module.css';
import Tools from "../_components/Tools";
import { siteConfig } from "../siteConfig";

export const metadata: Metadata = {
    ...siteConfig.metadata.en,
    openGraph: {
        ...siteConfig.metadata.en.openGraph,
        url: `${siteConfig.metadata.en.openGraph.url}/en`
    }
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <Content className={[styles.textToolsPage, 'crossed'].join(' ')}>
            <h1>Text Tools</h1>
            <Tools locale="en" />
        </Content>
    );
}