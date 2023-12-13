import axios from "axios";


// const BaseUrl = "https://localhost:7163/api/contact-us?Name=a&MobileNo=03472420401&Email=saqibsomal%40gmail.com&Comments=asdasd&Address=z&CompanyName=z&Country_City=z&Department=z&Company_Website=z&License=z";
// const BaseUrl = "http://192.168.1.21:666/api";
// const BaseUrl='http://localhost:81/Feedback/api'
// const BaseUrl='http://137.59.226.222:8044/click/api'
const BaseUrl='https://business.gos.pk/Feedback/api'
// http://business.gos.pk/Feedback
export const postService = (url, body ) => {
  const {name,email,mobileNumber,address,companyName,companyWebsite,country,comments,department,license}=body
  const Url= url==='/contact-us'? `${BaseUrl}${url}?Name=${name}&MobileNo=${mobileNumber}&Email=${email}&Comments=${comments}&Address=${address}&CompanyName=${companyName}&Country_City=${country}&Department=${department}&Company_Website=${companyWebsite}&License=${license}`:url
  return axios.post(
    Url,
    body, 
    {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const getService=async(url)=>{
  const response=await axios.get(url)
  return response.data
}