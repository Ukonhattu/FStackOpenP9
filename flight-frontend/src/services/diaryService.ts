import axios from "axios";
import DiaryEntry, {NewDiaryEntry} from "../types/DiaryEntry";

const baseUrl = "http://localhost:3000/api/diaries";

export const getAll = async (): Promise<DiaryEntry[]> => {
    const response = await axios.get<DiaryEntry[]>(baseUrl);
    return response.data;
};

export const create = async (diaryEntry: NewDiaryEntry): Promise<DiaryEntry> => {
    const response = await axios.post<DiaryEntry>(baseUrl, diaryEntry);
    return response.data;
}