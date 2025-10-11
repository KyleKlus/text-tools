/** @format */
import Footer from '@/lib/layouts/footer/Footer';
import Header from '@/lib/layouts/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/lib/default-look.css';
import './globals.css';

import Main from '@/lib/container/Main';

import { Fira_Code } from "next/font/google";
import { ThemeProvider } from '@/lib/provider/theme-provider';
import ThemeButton from '@/lib/interaction/forms/buttons/ThemeButton';
import ScrollToTargetButton from '@/lib/interaction/forms/buttons/ScrollToTargetButton';

const firaCode = Fira_Code({ weight: '400', subsets: ['latin'] });

interface ILayoutProps {
    title?: string;
    className?: string;
}

export default function Layout(props: React.PropsWithChildren<ILayoutProps>) {
    return (
        <html style={{ fontFamily: firaCode.style.fontFamily }}>
            <body>
                <ThemeProvider>
                    <Header >
                        <ThemeButton />
                    </Header >
                    <Main>
                        <ScrollToTargetButton targetElementId={'top'} />
                        <div id={'top'}></div>
                        {props.children}
                        <Footer />
                    </Main>
                </ThemeProvider>
            </body>
        </html>
    );
}