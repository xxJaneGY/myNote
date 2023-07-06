import { atom } from "jotai";
import { NoteInfo } from "../constant/model/myNote.model";

export const isCheckedAuthAtom = atom<boolean>(false);

export const usernameAtom = atom<string>("");

export const isCreatePageOpenAtom = atom<boolean>(false);

export const noteIdAtom = atom<string>("");

export const noteInfoAtom = atom<NoteInfo[]>([]);
