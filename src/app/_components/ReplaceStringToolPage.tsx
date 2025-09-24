"use client";

import { useState } from "react";
import styles from './Tools.module.css';

export default function ReplaceStringToolPage(props: { text: string, setText: (text: string) => void }) {
    const { text, setText } = props;
    const [charCount, setCharCount] = useState(text.length);
    const [wordCount, setWordCount] = useState(text.split(' ').length);
    const [lineCount, setLineCount] = useState(text.split('\n').length);
    const [replaceText, setReplaceText] = useState("");
    const [replaceWith, setReplaceWith] = useState("");

    return (
        <div className={styles.toolPage}>
            <div className={styles.replaceStringControls}>
                <input type="text" placeholder="Replace..." value={replaceText} onChange={(e) => {
                    setReplaceText(e.target.value);
                }} />
                <input type="text" placeholder="With..." value={replaceWith} onChange={(e) => {
                    setReplaceWith(e.target.value);
                }} />
                <button
                    onClick={() => {
                        let newText = "";
                        newText = text.replaceAll(replaceText, replaceWith);
                        setText(newText);
                        setCharCount(newText.length);
                        setWordCount(newText.split(' ').length);
                        setLineCount(newText.split('\n').length);
                    }}>
                    Replace
                </button>
            </div>
            <div className={styles.textareaContainer}>
                <div className={styles.stats} >
                    <div>Words: {wordCount}</div>
                    <div className={styles.divider}></div>
                    <div>Characters: {charCount}</div>
                    <div className={styles.divider}></div>
                    <div>Lines: {lineCount}</div>
                </div>
                <textarea className={styles.textarea} placeholder="Enter text here..." value={text} onChange={(e) => {
                    setText(e.target.value);
                    setCharCount(e.target.value.length);
                    setWordCount(e.target.value.split(' ').length);
                    setLineCount(e.target.value.split('\n').length);
                }} />
            </div>
        </div>
    );
}