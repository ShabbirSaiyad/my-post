
import { apiConnector } from "../apiConnector";
import { generateImageEndpoints } from "../apis";

const {GENERATE_OG_IMAGE} = generateImageEndpoints;

export const generateOg = async(data)=>{
  let ogUrl;
    try{
      console.log("DATATTTTT",data);
      const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('image', data.image);
    formData.append('author',data.author);


      console.log("data in frontend",data);
      const response = await apiConnector('POST',GENERATE_OG_IMAGE, 
        formData,  
        { headers: { 'Content-Type': 'multipart/form-data' }});

      console.log("response in post.js", response);
      
      if(!response?.data?.success) {
        throw new Error("Could Not Send Comment")
       }
       ogUrl = response?.data?.ogImageUrl;

       return ogUrl;
      
    }catch(error){
        console.log("Error in generating Og"+error);
    }
}