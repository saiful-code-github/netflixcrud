import { CContainer } from "@coreui/react"
import { postApi, putApi } from "./APPI/Api";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const FormApi = ({newData, setNewData, data, setData,editId,setEditId}) => {
    const [nav, setNav] = useState(false)
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
                    ...newData,
                    // eslint-disable-next-line react/prop-types
                    id: data.length ? data [data.length -1].id + 1 : 1,
                }
                setData([...data, newPost]);
                 resetData();
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
                const res = await putApi(editId,{newData});
                 if(res.status === 200) {
                   setData((prev)=>
                    prev.map((item)=> item.id === editId ? {...item, ...newData} : item)
                )
                  resetData();
                 }
            } catch (error) {
                console.log(error)
            }

    }

     //handleSubmit 
     const handleSubmit = (e) =>{
        e.preventDefault();
        if(editId){
            updatePost()
        }else{
            addPost();
        }
     }
     const resetData = () => {
         setEditId(null);
         setNewData({
            title: "",
            body: ""
         })
     }
     useEffect(()=>{
        const navScroll = () => {
            if(document?.body?.scrollTop || document?.documentElement?.scrollTop > 100){
                setNav(true)
            }else{
                setNav(false)
            }
        }
        window.addEventListener('scroll', navScroll);
        return () => window.removeEventListener('scroll', navScroll)
     },[])
    return (
        <section>
              <CContainer>
                  <form className={`flex gap-2 flex-row justify-center mb-7 ${nav ? "sticky" : ''}`} onSubmit={handleSubmit}> 
                      <div>
                          <input type="text" name="title" value={newData.title} placeholder="Enter the Title"
                           onChange={handleChange} className="outline-0" />
                      </div>
                      <div>
                          <input type="text" name="body" value={newData.body} placeholder="Enter the body" onChange={handleChange} className="outline-0"/>
                      </div>
                      <button type="submit" className={`text-[18px] capitalize bg-blue-700
                       py-2 px-4 rounded-[5px] `} style={{background: editId ? "yellow" : "blue", color: editId ? '#000' : '#fff'}}>{editId ? 'Update' : 'Add'}</button>
                  </form>
              </CContainer>
        </section>
    )
}