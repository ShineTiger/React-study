import {useEffect,useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    //useEffect는 렌더링이 완료된 후 실행하는 비동기적 hooks 이다. 
    useEffect((url)=>{
        fetch("http://localhost:3001/days") //promise반환
        .then(res => {
            return res.json();
        }) //여기서 res는 http 링크만 가지고 실제 json을 갖지 않으니 json()을 이용해서 객체로 만들어준다.
        .then(data => {
            setData(data); //객체하나씩 
        });   
    },[]);
    return data
}

export default useFetch;
