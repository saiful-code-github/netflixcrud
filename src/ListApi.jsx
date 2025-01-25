/* eslint-disable react/prop-types */
import { CCol, CContainer, CRow } from "@coreui/react"

export const ListApi = ({data, hanldeDelete, EditData}) =>{
    return (
         <section>
              <CContainer>
                  <CRow>
                    {data.map((item, index)=>{
                        const {id, body, title} = item;
                        return (
                            <CCol lg={3} className="w-full md:w-[25%] flex flex-col align-middle" key={index}>
                                <ol className="bg-amber-700 flex flex-col text-white py-3.5 md:py-3.5 px-3.5 md:px-3.5
                                 rounded-[5px] h-full">
                                    <li > 
                                      <h5>{id}</h5>
                                      <p>Title: {title}</p>
                                       <p>Body: {body}</p>
                                       <div className="flex gap-2 my-auto">
                                       <button className="text-[18px] capitalize text-white bg-green-400 py-2 px-4 rounded-[5px]" onClick={()=> EditData(item)}>Edit</button>
                                       <button className="text-[18px] capitalize text-white bg-red-800 py-2 px-4 rounded-[5px]" onClick={()=> hanldeDelete(id)}>Delete</button>
                                       </div>
                                    </li>
                                </ol>
                            </CCol>
                        )
                    })}
                  </CRow>
              </CContainer>
         </section>
    )
}