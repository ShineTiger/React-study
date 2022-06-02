
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Day = () => {


    const {day} = useParams();
    
    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    return(
        <>
            <table>
                <tbody>
                    {words.map(word =>(
                        <tr>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Day;