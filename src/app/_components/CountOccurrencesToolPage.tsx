"use client";

import { useState } from "react";
import styles from './Tools.module.css';

export default function CountOccurrencesToolPage(props: { text: string, setText: (text: string) => void }) {
    const { text, setText } = props;
    const [occurrences, setOccurrences] = useState(0);
    const [countText, setCountText] = useState("");

    return (
        <div className={styles.toolPage}>
            <div className={styles.replaceStringControls}>
                <input type="text" placeholder="Text..." value={countText} onChange={(e) => {
                    setCountText(e.target.value);
                    setOccurrences(text.split(e.target.value).length - 1);
                }} />
            </div>
            <div className={styles.textareaContainer}>
                <div className={styles.stats}>
                    <div>Occurrences: {occurrences}</div>
                </div>
                <textarea className={styles.textarea} placeholder="Enter text here..." value={text} onChange={(e) => {
                    setText(e.target.value);
                }} />
            </div>
        </div>
    );
}