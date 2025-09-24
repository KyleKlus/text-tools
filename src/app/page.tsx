import Content from "@/app/_lib/container/Content";

import type { Metadata, Viewport } from 'next'
import styles from './TextToolsPage.module.css';
import Tools from "./_components/Tools";

export const metadata: Metadata = {
    title: "Kyle Klus | Text Tools",
    description: "A collection of text tools to help with text manipulation and formatting.",
    openGraph: {
        type: "website",
        url: "https://kyleklus.de/text-tools",
        title: "Kyle Klus | Text Tools",
        description: "A collection of text tools to help with text manipulation and formatting.",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <>
            <Content className={[styles.textToolsPage, 'applyHeaderOffset', 'dotted'].join(' ')}>
                <h1>Text Tools</h1>
                <Tools />
            </Content>
        </>
    );
}