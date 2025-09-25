import styles from './Tools.module.css';

export default function Stats(props: { text: string, occurrenceText?: string }) {
    const { text, occurrenceText } = props;
    const showOccurrences = occurrenceText !== undefined;
    const occurrences = showOccurrences && occurrenceText !== "" ? text.split(occurrenceText).length - 1 : 0;
    const wordCount = text.length === 0 ? 0 : text.split(' ').length;
    const charCount = text.length;
    const lineCount = text.length === 0 ? 0 : text.split('\n').length;

    return (
        <div className={styles.stats} >
            {showOccurrences && <div>Occurrences: {occurrences}</div>}
            {!showOccurrences && <div>Words: {wordCount}</div>}
            {!showOccurrences && <div className={styles.divider}></div>}
            {!showOccurrences && <div>Characters: {charCount}</div>}
            {!showOccurrences && <div className={styles.divider}></div>}
            {!showOccurrences && <div>Lines: {lineCount}</div>}
        </div>
    );
}