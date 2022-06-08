import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

const Day = () => {
  const { day } = useParams();

  const words = useFetch(`http://localhost:3003/words?day=${day}`);

  return (
    <>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
