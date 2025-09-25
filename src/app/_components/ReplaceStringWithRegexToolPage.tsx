"use client";

import { useState } from "react";
import styles from './Tools.module.css';
import Stats from "./Stats";

export default function ReplaceStringWithRegexToolPage(props: { text: string, setText: (text: string) => void }) {
    const { text, setText } = props;
    const [regex, setRegex] = useState("");
    const [replaceWith, setReplaceWith] = useState("");

    return (
        <div className={styles.toolPage}>
            <div className={styles.replaceStringControls}>
                <input type="text" placeholder="Regex..." value={regex} onChange={(e) => {
                    setRegex(e.target.value);
                }} />
                <input type="text" placeholder="With..." value={replaceWith} onChange={(e) => {
                    setReplaceWith(e.target.value);
                }} />
                <button
                    onClick={() => {
                        let newText = "";
                        const regexObj = new RegExp(`${regex}`, 'gi');
                        newText = text.replaceAll(regexObj, replaceWith);
                        setText(newText);
                    }}>
                    Replace
                </button>
            </div>
            <div className={styles.textareaContainer}>
                <Stats text={text} />
                <textarea className={styles.textarea} placeholder="Enter text here..." value={text} onChange={(e) => {
                    setText(e.target.value);
                }} />
            </div>
        </div>
    );
}