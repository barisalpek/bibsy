import axios from "axios";

const UseAxios = async (url: string, body: any) => {

    const res:any = await axios
    .post(url, body)

    .catch((error) => {
        console.error(error);
    });
    
   return res.data;

}

export default UseAxios