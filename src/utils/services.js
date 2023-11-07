import axios from "axios";

// const BaseUrl = "https://localhost:7163/api/contact-us?Name=a&MobileNo=03472420401&Email=saqibsomal%40gmail.com&Comments=asdasd&Address=z&CompanyName=z&Country_City=z&Department=z&Company_Website=z&License=z";
// const BaseUrl = "https://localhost:7163/api";
const BaseUrl = "https://localhost:81/Feedback/api";
// const BaseUrlLIve = "https://business.gos.pk/feedback/api";

export const postService = (url, body ) => {
  const {name,email,mobileNumber,address,companyName,companyWebsite,country,comments}=body
  return axios.post(
    `${BaseUrl}${url}?Name=${name}&MobileNo=${mobileNumber}&Email=${email}&Comments=${comments}&Address=${address}&CompanyName=${companyName}&Country_City=${country}&Department=z&Company_Website=${companyWebsite}&License=z`, 
    body, 
    {
    headers: {
      "Content-Type": "application/json",
    },
  });
};