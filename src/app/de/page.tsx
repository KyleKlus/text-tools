import Content from "@/lib/container/Content";

import type { Metadata, Viewport } from 'next'
import styles from '../TextToolsPage.module.css';
import Tools from "../_components/Tools";
import { defaultSiteConfig } from "../defaultSiteConfig";

export const metadata: Metadata = {
    ...defaultSiteConfig.metadata.de,
    openGraph: {
        ...defaultSiteConfig.metadata.de.openGraph,
        url: `${defaultSiteConfig.metadata.de.openGraph.url}/de`
    }
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <Content className={[styles.textToolsPage, 'dotted', 'applyBottomPadding'].join(' ')}>
            <h1>Text Tools</h1>
            <Tools locale="de" />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
                <div className={styles.donationContainer}>
                    <div>Du magst dieses Tool?</div>
                    <a
                        href='https://ko-fi.com/W7W1D5JTZ'
                        target='_blank'
                        className={styles.donateButton}
                    >
                        Spende ❤️
                    </a>
                </div>
            </div>

        </Content>
    );
}