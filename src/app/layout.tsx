/** @format */
import Footer from '@/app/_lib/layouts/footer/Footer';
import Header from '@/app/_lib/layouts/header/Header';
import './default-look.css';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from '@/app/_lib/container/Main';

import { Fira_Code } from "next/font/google";
import { ThemeProvider } from '@/app/_lib/provider/theme-provider';
import ThemeButton from '@/app/_lib/interaction/forms/buttons/ThemeButton';

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
                        <div id={'top'}></div>
                        {props.children}
                        <Footer />
                    </Main>
                </ThemeProvider>
            </body>
        </html>
    );
}