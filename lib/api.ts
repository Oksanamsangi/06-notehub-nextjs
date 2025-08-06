import axios from "axios";
import type { Note, NewNoteData } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api/notes";
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

if (!TOKEN) {
  throw new Error("Token is not defined");
}

const notesClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

interface FetchNotesResponse {
    notes: Note[];
    totalPages: number;
}

export const fetchNotes = async (
  page = 1,
  query = '',
  perPage = 12
): Promise<FetchNotesResponse> => {
  const params: Record<string, string | number> = { page, perPage };
  if (query.trim()) params.search = query;

  const res = await notesClient.get<FetchNotesResponse>('/', { params });
  return res.data;
};

export interface FetchNotes {
  page?: number;
  search?: string;
  perPage?: number;
}

export const createNote = async (noteData: NewNoteData): Promise<Note> => {
  const res = await notesClient.post<Note>('/', noteData);
  return res.data;
};

export const fetchNoteById = async (id: number): Promise<Note> => {
  const res = await notesClient.get<Note>(`/${id}`);
  return res.data;
};

export const deleteNote = async (noteId: number): Promise<Note> => {
  const res = await notesClient.delete<Note>(`/${noteId}`);
  return res.data;
};



