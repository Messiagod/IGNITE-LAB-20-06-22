import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"

const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
    }
  }
` 
interface Lesson{
  id: string,
  title: string;
}

function App() {
 /*  MODO useEffect DE REALIZAR A REQUEST
  useEffect(()=>{
    client.query({
      query: GET_LESSIONS_QUERY,
    }).then(response =>{
      console.log(response.data)
    })
  }) */
  const { data } = useQuery<{lessons : Lesson[]}>(GET_LESSONS_QUERY)
  
  return (
    <ul>
      {data?.lessons.map(lesson =>{
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
