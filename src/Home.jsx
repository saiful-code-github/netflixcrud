import { CContainer } from "@coreui/react";
import { useEffect, useState } from "react";
import { deleteApi, getApi } from "./APPI/Api";
import { ListApi } from "./ListApi";
import { FormApi } from "./FormApi";

export const Home = () =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newData, setNewData] = useState({
        title: '',
        body: ""
    });
    const [scroll, setScroll] = useState(false);
    //scroll up 
    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    };
    const scrollToptoBottom = () =>{
        if(window.scrollY > 250) {
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    //get  methtod 
    const fethdata = async () => {
        try {
            setLoading(true)
            const res = await getApi();
           setData(res.data)
           setLoading(false)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fethdata();
        window.addEventListener('scroll', scrollToptoBottom);
      return () =>  window.removeEventListener('scroll', scrollToptoBottom )
    },[])
    
    //delete method 
    const hanldeDelete = async (id) =>{
          try {
            const res =  await deleteApi(id);
            if(res.status === 200){
                setData((prev)=>{
                    return prev.filter((item) => item.id !== id )
                })
            }

          } catch (error) {
               console.log(error)
          }
    }
    //EditData 
    const EditData = (item) => {
        setNewData(item)
    }
    return (
         <section>
             <CContainer>
                <h1 className="text-2xl capitalize text-center mb-3.5 pt-6 pb-8">Todo App</h1>
                <FormApi newData={newData} setNewData={setNewData} data={data} setData={setData}/>
                {loading ? (
                    <p className="text-center font-extrabold text-3xl capitalize">Loading...</p>
                ): (
                  <ListApi data={data} hanldeDelete={hanldeDelete} EditData={EditData}/>
                )}
             </CContainer>
              {/* scroll */}
              {
                scroll && (
                  <div onClick={scrollUp} className="bg-red-700 cursor-pointer text-white text-center fixed bottom-[45px] right-[45px]
                     rounded-[5px] p-3">
                    <i className="bi-arrow-up text-2xl"></i>
                    </div>
                )
              }
                    
         </section>
    )
}