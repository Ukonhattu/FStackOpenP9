import DiaryEntry from "../types/DiaryEntry";

interface Props {
  entries: DiaryEntry[];
}

const DiaryEntries  = (props: Props) => {
    const { entries } = props;
  return (
    <div>
      <h2>Diary Entries</h2>
      {entries.map((entry) => (
        <div key={entry.id}>
          <p>
            Date: {entry.date} Visibility: {entry.visibility} Wheater: {entry.weather}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DiaryEntries;