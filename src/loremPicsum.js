import Axios from "axios";


const GetPicsum = () => {
    Axios.get("https://picsum.photos/v2/list?page=2&limit=100").then(
        (response) => {
            console.log(response);

        }
    );
};
return (
    <div>
        <button onClick={GetPicsum}></button>
    </div>
)

export default GetPicsum






// export default function Parent() {
//     const [notes, getNotes] = useState('');
    
//     const url  = "https://picsum.photos/v2/list?page=2&limit=100";

//     const getAllNotes = () => {
//         axios.get(`${url}notes`)   }
// }




// const BASE_URL = "https://picsum.photos/v2/list?page=2&limit=100"


// const LoremPicsum = ({ photo, setPhoto}) => {
//     return(
//         <div>
         
//         {$.getJson("https://picsum.photos/v2/list?page=2&limit=100")}

//         </div>
//     )
// }

