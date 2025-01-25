import { CContainer } from "@coreui/react"
import { postApi, putApi } from "./APPI/Api";

// eslint-disable-next-line react/prop-types
export const FormApi = ({newData, setNewData, data, setData}) => {
    //handleSubmit 
    const handleChange = (e) =>{
        const {value, name} = e.target;
        setNewData((prev) => ({...prev, [name]: value}))
    }
    //addpost 
    const addPost = async () =>{
        // eslint-disable-next-line react/prop-types
        if(!newData.title.trim() || !newData.body.trim()) return alert("Please Fill the Input Box")
        try {
            const res = await postApi(newData);
            if(res.status === 201){
                const newPost = {
                    ...res.data,
                    // eslint-disable-next-line react/prop-types
                    id: data.length ? data [data.length -1].id + 1 : 1,
                }
                setData([...data, newPost]);
                setNewData({
                    title: "",
                    body: ''
                })
            }
        } catch (error) {
            console.log(error)   
        }
     }
    //  upadtate data
    const updatePost = async () =>{
        // eslint-disable-next-line react/prop-types
        if(!newData.title.trim() || !newData.body.trim()) return alert("Please Fill the Input Box")
            try {
                // eslint-disable-next-line react/prop-types
                const res = await putApi(newData.id, newData);
                 if(res.status === 200) {
                   setData((prev)=>
                    prev.map((item)=> item.id === res.data.id ? res.data : item)
                )
                setNewData({
                    title: "",
                    body: ""
                })
                 }
            } catch (error) {
                console.log(error)
            }

    }

     //handleSubmit 
     const handleSubmit = (e) =>{
        e.preventDefault();
        if(newData.id){
            updatePost()
        }else{
            addPost();
        }
     }
    return (
        <section>
              <CContainer>
                  <form className="flex gap-2 flex-row justify-center mb-7" onSubmit={handleSubmit}> 
                      <div>
                          <input type="text" name="title" value={newData.title} placeholder="Enter the Title"
                           onChange={handleChange} className="outline-0" />
                      </div>
                      <div>
                          <input type="text" name="body" value={newData.body} placeholder="Enter the Title" onChange={handleChange} className="outline-0"/>
                      </div>
                      <button type="submit" className={`text-[18px] capitalize bg-blue-700
                       py-2 px-4 rounded-[5px] `} style={{background: newData.id ? "yellow" : "blue", color: newData.id ? '#000' : '#fff'}}>{newData.id ? 'Update' : 'Add'}</button>
                  </form>
              </CContainer>
        </section>
    )
}