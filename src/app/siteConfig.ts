import { defaultSiteConfig } from "@/lib/defaultSiteConfig";

const basePath: string = '/text-tools';
const metadataEn = {
    title: "Kyle Klus | Text Tools",
    description: "A collection of text tools to help with text manipulation and formatting.",
    authors: [{ name: defaultSiteConfig.author, url: defaultSiteConfig.url }],
    keywords: ["text tools", "text manipulation", "text formatting", "online tools", "free tools"],
    creator: defaultSiteConfig.author,
    publisher: defaultSiteConfig.author,
    abstract: "A collection of text tools to help with text manipulation and formatting.",
    applicationName: "Text Tools",
    category: "tools",
    classification: "text tools",
    openGraph: {
        type: "website",
        locale: "en_US",
        countryName: "US",
        url: `${defaultSiteConfig.url}${basePath}`,
        title: "Kyle Klus | Text Tools",
        description: "A collection of text tools to help with text manipulation and formatting.",
    },
}

export const siteConfig = {
    ...defaultSiteConfig,
    basePath,
    metadata: {
        en: metadataEn,
        de: {
            ...metadataEn,
            description: "Eine Sammlung von Text-Tools, um Text-Manipulation und Text-Formatierung zu unterstützen.",
            keywords: ["text tools", "text manipulation", "text formatting", "online tools", "free tools", "werkzeuge", "text-tools", "text-manipulation", "text-formatting", "online-tools", "free-tools", "tools", "kostenlos", "gratis"],
            abstract: "Eine Sammlung von Text-Tools, um Text-Manipulation und Text-Formatierung zu unterstützen.",
            category: "werkzeuge",
            openGraph: {
                ...metadataEn.openGraph,
                locale: "de_DE",
                countryName: "DE",
                url: `${defaultSiteConfig.url}${basePath}`,
                description: "Eine Sammlung von Text-Tools, um Text-Manipulation und Text-Formatierung zu unterstützen.",
            },
        }
    }
};