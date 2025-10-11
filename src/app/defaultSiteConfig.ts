const basePath: string = '/text-tools';
const url: string = 'https://kyleklus.de';
const heropageUrl: string = `${url}/#heroPage`;
const portfoliopageUrl: string = `${url}/#portfolioPage`;
const aboutpageUrl: string = `${url}/#aboutPage`;
const privacyUrl: string = `${url}/privacy`;
const termsOfServiceUrl: string = `${url}/terms-of-service`;
const projectsUrl: string = `${url}/projects`;
const cookbookDEUrl: string = `${url}/Kyles-Cookbook/de`;
const cookbookENUrl: string = `${url}/Kyles-Cookbook/en`;
const receiptManagerUrl: string = `${url}/receipt-manager-tool`;
const textToolsUrl: string = `${url}/text-tools`;
const qrCodeGeneratorUrl: string = `${url}/qr-code-generator`;
const githubUrl: string = 'https://github.com/KyleKlus';
const linkedinUrl: string = 'https://www.linkedin.com/in/kyle-klus-9a2588275';
const kofiUrl: string = 'https://ko-fi.com/majorenkidu';
const contactUrl: string = 'mailto:kyle.klus.2@gmail.com';
const author: string = 'Kyle Klus';
const metadataEn = {
    title: "Kyle Klus | Text Tools",
    description: "A collection of text tools to help with text manipulation and formatting.",
    authors: [{ name: author, url: url }],
    keywords: ["text tools", "text manipulation", "text formatting", "online tools", "free tools"],
    creator: author,
    publisher: author,
    abstract: "A collection of text tools to help with text manipulation and formatting.",
    applicationName: "Text Tools",
    category: "tools",
    classification: "text tools",
    openGraph: {
        type: "website",
        locale: "en_US",
        countryName: "US",
        url: `${url}${basePath}`,
        title: "Kyle Klus | Text Tools",
        description: "A collection of text tools to help with text manipulation and formatting.",
    },
}

export const defaultSiteConfig = {
    basePath,
    url,
    author,
    projectsUrl,
    cookbookDEUrl,
    cookbookENUrl,
    receiptManagerUrl,
    textToolsUrl,
    qrCodeGeneratorUrl,
    heropageUrl,
    portfoliopageUrl,
    aboutpageUrl,
    privacyUrl,
    termsOfServiceUrl,
    githubUrl,
    linkedinUrl,
    kofiUrl,
    contactUrl,
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
                url: `${url}${basePath}`,
                description: "Eine Sammlung von Text-Tools, um Text-Manipulation und Text-Formatierung zu unterstützen.",
            },
        }
    }
};