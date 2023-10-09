import {Visibility, Weather, NewDiaryEntry} from "../types/DiaryEntry";
import * as diaryService from "../services/diaryService";
import { useState } from "react";
import { AxiosError } from "axios";

const DiaryEntryForm = () => {
    const [date, setDate] = useState("");
    const [comment, setComment] = useState("");
    const [visibility, setVisibility] = useState<Visibility>(Visibility.Good);
    const [weather, setWeather] = useState<Weather>(Weather.Sunny);
    const [error, setError] = useState<string | undefined>();
    
    const submitNewEntry = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("New entry:", { date, comment, visibility, weather });
        const newEntry: NewDiaryEntry = {
            date: new Date(date).toString(),
            comment,
            visibility,
            weather,
        };
        diaryService.create(newEntry).then((savedEntry) => {
            console.log("Saved entry:", savedEntry);
        }).catch((e: AxiosError) => {
            console.error(e.message || 'Unknown Error');
            setError(e.message || 'Unknown error');
        });
    };
    
    return (
        <div>
        {error && <div style={{color: 'red'}}>{error}</div>}
        <h2>Diary Entry Form</h2>
        <form onSubmit={submitNewEntry}>
            <div>
            Date: <input value={date} type="date" onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
            Comment:{" "}
            <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            </div>
            <div>
            Visibility:{" "}
            <select
                value={visibility}
                onChange={(e) => setVisibility(e.target.value as Visibility)}
            >
                <option value="GOOD">Good</option>
                <option value="MODERATE">Moderate</option>
                <option value="BAD">Bad</option>
            </select>
            </div>
            <div>
            Weather:{" "}
            <select
                value={weather}
                onChange={(e) => setWeather(e.target.value as Weather)}
            >
                <option value="SUNNY">Sunny</option>
                <option value="RAINING">Raining</option>
                <option value="CLOUDY">Cloudy</option>
                <option value="SNOWING">Snowing</option>
            </select>
            </div>
            <button type="submit">Add</button>
        </form>
        </div>
    );
    }

export default DiaryEntryForm;
