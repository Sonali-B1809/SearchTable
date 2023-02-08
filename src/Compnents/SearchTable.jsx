import React ,{useState,useEffect} from 'react'

function SearchTable() {
    let [data , setData] = useState([]);
    let [searchApiData , setSearchApiData] = useState([]);
    let [filterVal , setFilterVal]=useState("");
    useEffect(()=>{
    let fetchData=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json =>{
                setData(json)
                setSearchApiData(json)
        })
    }
    fetchData();
}, [])
  let handleFilter=(e)=>{
    if(e.target.value == ''){
       setData(searchApiData)
    }else{
        let filterResult = searchApiData.filter(item=> item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||  item.username.toLowerCase().includes(e.target.value.toLowerCase())
        ||  item.email.toLowerCase().includes(e.target.value.toLowerCase()))
        setData(filterResult)

    }
  
  setFilterVal(e.target.value)
}
  return (
    <div style={{margin:"20px auto"}}>
        <div className='search' align="center">
            <input placeholder='search' value={filterVal} onChange={(e)=>handleFilter(e)}/>
        </div>
        <table border="1px" align='center' cellSpacing="1px" cellpadding="15px">
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            {
                data.map(item=>{
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            
                        </tr>
                    )
                })
            }
        </table>

    </div>
  )
}

export default SearchTable