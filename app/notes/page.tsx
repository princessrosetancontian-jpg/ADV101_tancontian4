'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface Note {
  id: number;
  title: string;
  body: string;
}

export default function NotesPage() {
  const router = useRouter();
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, title: 'SYSTEM INIT', body: 'Welcome to Note Terminal.' }
  ]);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const handleLogout = () => {
    router.push('/');
  };

  const handleAddNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    const newNote: Note = {
      id: Date.now(),
      title,
      body,
    };

    setNotes([newNote, ...notes]);
    setTitle('');
    setBody('');
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={styles.container}>
        <header style={styles.header}>
          <div>
            <span style={styles.headerBadge}>PRED OS</span>
            <h1 style={styles.headerTitle}>NOTE DASHBOARD</h1>
          </div>
          <button onClick={handleLogout} style={styles.logoutBtn}>
            LOGOUT
          </button>
        </header>

        <main style={styles.main}>
          <div style={styles.formCard}>
            <h3 style={styles.sectionTitle}>CREATE ENTRY</h3>
            <form onSubmit={handleAddNote} style={styles.form}>
              <input
                type="text"
                placeholder="ENTRY TITLE..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={styles.input}
              />
              <textarea
                placeholder="WRITE DATA CONTENT HERE..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={4}
                style={styles.textarea}
              />
              <button type="submit" style={styles.addBtn}>
                SAVE NOTE
              </button>
            </form>
          </div>

          <div style={styles.notesList}>
            <h3 style={styles.sectionTitle}>STORED DATA LOGS</h3>
            {notes.length === 0 ? (
              <p style={{ color: '#7088a8', fontFamily: "'Rajdhani', sans-serif" }}>No logs detected. Create one above.</p>
            ) : (
              notes.map((note) => (
                <div key={note.id} style={styles.noteCard}>
                  <div style={styles.noteHeader}>
                    <h4 style={styles.noteTitle}>{note.title}</h4>
                    <button
                      onClick={() => handleDeleteNote(note.id)}
                      style={styles.deleteBtn}
                    >
                     CLOSE TAB
                    </button>
                  </div>
                  <p style={styles.noteBody}>{note.body}</p>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0d14',
    color: '#ffffff',
    fontFamily: "'Rajdhani', sans-serif",
    padding: '24px 16px',
    backgroundImage: 'radial-gradient(circle at 50% 10%, #111d2e 0%, #080a0f 100%)',
  },
  header: {
    maxWidth: '850px',
    margin: '0 auto 32px auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #00f0ff',
    paddingBottom: '16px',
    boxShadow: '0 4px 15px -5px rgba(0, 240, 255, 0.3)',
  },
  headerBadge: {
    color: '#00f0ff',
    fontSize: '11px',
    fontFamily: "'Orbitron', sans-serif",
    letterSpacing: '2px',
    display: 'block',
  },
  headerTitle: {
    fontSize: '24px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: '900',
    margin: 0,
    letterSpacing: '1px',
    textShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
  },
  logoutBtn: {
    padding: '8px 18px',
    backgroundColor: 'rgba(255, 0, 85, 0.15)',
    color: '#ff0055',
    border: '1px solid #ff0055',
    borderRadius: '2px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: '700',
    fontSize: '12px',
    cursor: 'pointer',
  },
  main: {
    maxWidth: '850px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  formCard: {
    backgroundColor: 'rgba(13, 20, 32, 0.95)',
    padding: '24px',
    borderRadius: '2px',
    border: '1px solid #1e3a5f',
  },
  sectionTitle: {
    margin: '0 0 16px 0',
    fontSize: '16px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: '700',
    color: '#00f0ff',
    letterSpacing: '1px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  input: {
    padding: '12px',
    borderRadius: '2px',
    border: '1px solid #1e3a5f',
    backgroundColor: '#05080e',
    color: '#ffffff',
    fontSize: '15px',
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: '600',
    outline: 'none',
  },
  textarea: {
    padding: '12px',
    borderRadius: '2px',
    border: '1px solid #1e3a5f',
    backgroundColor: '#05080e',
    color: '#ffffff',
    fontSize: '15px',
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: '600',
    resize: 'vertical',
    outline: 'none',
  },
  addBtn: {
    padding: '12px',
    backgroundColor: '#00f0ff',
    color: '#05080e',
    border: 'none',
    borderRadius: '2px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: '900',
    fontSize: '14px',
    cursor: 'pointer',
    letterSpacing: '1px',
  },
  notesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  noteCard: {
    backgroundColor: 'rgba(13, 20, 32, 0.8)',
    padding: '18px',
    borderRadius: '2px',
    borderLeft: '4px solid #00ff22',
    borderTop: '1px solid #1457ae',
    borderRight: '1px solid #1762c5',
    borderBottom: '1px solid #84b00b',
  },
  noteHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  noteTitle: {
    margin: 0,
    fontSize: '18px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: '700',
    color: '#ffffff',
  },
  noteBody: {
    margin: 0,
    color: '#a0aec0',
    fontSize: '15px',
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: '600',
    lineHeight: '1.5',
  },
  deleteBtn: {
    backgroundColor: 'transparent',
    color: '#ff4d8d',
    border: '1px solid #ff0055',
    padding: '4px 10px',
    borderRadius: '2px',
    fontSize: '11px',
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: '700',
    cursor: 'pointer',
  },
};