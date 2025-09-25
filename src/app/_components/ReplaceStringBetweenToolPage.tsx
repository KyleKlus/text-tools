"use client";

import { useState } from "react";
import styles from './Tools.module.css';
import Stats from "./Stats";

export default function ReplaceStringBetweenToolPage(props: { text: string, setText: (text: string) => void }) {
    const { text, setText } = props;
    const [replaceText, setReplaceText] = useState("");
    const [replaceWith, setReplaceWith] = useState("");
    const [replaceTextEnd, setReplaceTextEnd] = useState("");

    return (
        <div className={styles.toolPage}>
            <div className={styles.replaceStringControls}>
                <input type="text" placeholder="Start..." value={replaceText} onChange={(e) => {
                    setReplaceText(e.target.value);
                }} />
                <input type="text" placeholder="Replace with..." value={replaceWith} onChange={(e) => {
                    setReplaceWith(e.target.value);
                }} />
                <input type="text" placeholder="End..." value={replaceTextEnd} onChange={(e) => {
                    setReplaceTextEnd(e.target.value);
                }} />
                <button
                    onClick={() => {
                        let newText = "";

                        newText = text;
                        let startIndex = text.indexOf(replaceText);
                        while (startIndex !== -1) {
                            const endIndex = text.indexOf(replaceTextEnd, startIndex);
                            if (endIndex === -1) {
                                break;
                            }
                            newText = newText.replace(text.substring(startIndex + replaceText.length, endIndex), replaceWith);
                            startIndex = text.indexOf(replaceText, endIndex);
                        }

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