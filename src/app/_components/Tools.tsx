"use client";

import { useState } from "react";
import styles from './Tools.module.css';
import { ToolMode } from "./ToolMode";
import { Nav } from "react-bootstrap";
import ReplaceStringToolPage from "./ReplaceStringToolPage";
import ReplaceStringBetweenToolPage from "./ReplaceStringBetweenToolPage";
import CountOccurrencesToolPage from "./CountOccurrencesToolPage";
import ReplaceStringWithRegexToolPage from "./ReplaceStringWithRegexToolPage";

export default function Tools() {
    const [text, setText] = useState("");
    const [mode, setMode] = useState<ToolMode>(ToolMode.ReplaceString);

    return (
        <div className={styles.tools}>
            <Nav variant="tabs" className={styles.tabContainer} defaultActiveKey={ToolMode.ReplaceString} onSelect={(selectedKey) => {
                if (selectedKey) {
                    setMode(selectedKey as ToolMode);
                }
            }}>
                {Object.values(ToolMode).map((mode) => (
                    <Nav.Item key={mode} className={styles.tabItem}>
                        <Nav.Link className={styles.tabLink} eventKey={mode}>{mode}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            {mode === ToolMode.ReplaceString && <ReplaceStringToolPage text={text} setText={setText} />}
            {mode === ToolMode.ReplaceStringBetween && <ReplaceStringBetweenToolPage text={text} setText={setText} />}
            {mode === ToolMode.ReplaceStringWithRegex && <ReplaceStringWithRegexToolPage text={text} setText={setText} />}
            {mode === ToolMode.CountOccurrences && <CountOccurrencesToolPage text={text} setText={setText} />}
        </div>
    );
}