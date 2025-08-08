import Link from 'next/link';
import styles from './NoteList.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNote } from '@/lib/api';
import type { Note } from '@/types/note';

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  const queryClientHook = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: string) => deleteNote(id),
    onSuccess: () => {
      queryClientHook.invalidateQueries({ queryKey: ['notes'] });
    },
  });

  return (
    <ul className={styles.list}>
      {notes.map(note => (
        <li key={note.id} className={styles.listItem}>
          <h2 className={styles.title}>{note.title}</h2>
          <p className={styles.content}>{note.content}</p>
          <div className={styles.footer}>
            <span className={styles.tag}>{note.tag}</span>
            <Link href={`/notes/${note.id}`} className={styles.link}>
              View details
            </Link>
            <button
              type="button"
              className={styles.button}
              onClick={() => mutation.mutate(note.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
