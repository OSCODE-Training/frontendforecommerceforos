import axios from "axios";


var serverURL = "http://localhost:3000";
const getData = async (url) => {
  try {

    //
    let headers = {};
    if (localStorage.getItem("TOKEN")) {
      headers = { headers: { Authorization: localStorage.getItem("TOKEN") } };
    }
    //

    var response = await axios.get(`${serverURL}/${url}`,headers);
    const result = await response.data;

    return result;
  } catch (e) {
    console.log("ereeeeeeeeeeeeeeeeeeeeeee:",e)

    // jab token expire ho jayega tab ye call hoga. //
     if(e.response.status == 401)
     {
        // alert("NOT LOGIN")
       localStorage.clear();
       window.location.replace("/login");
     }

     
    // // --------------------------------------------//
  }
};

const postData = async (url, body) => {
  try {

    //
   // alert(localStorage.getItem("TOKEN"))
    let headers = {};
    if (localStorage.getItem("TOKEN")) {
      headers = { headers: { Authorization: localStorage.getItem("TOKEN") } };
    }
    
    
    var response = await axios.post(`${serverURL}/${url}`, body,headers);
    var result = await response.data;

    return result;
  } catch (e) {
    console.log("ereeeeeeeeeeeeeeeeeeeeeee:",e.response.data)

    // jab token expire ho jayega tab ye call hoga. //
    if(e.response.status == 401)
    {
        // alert("not login")
      localStorage.clear();
      window.location.replace("/login");
    }

    return await e.response?.data || e.message;
    
    
    // --------------------------------------------//
  }
};



const deleteData = async (url, body) => {
    try {
  
      //
     // alert(localStorage.getItem("TOKEN"))
      let headers = {};
      if (localStorage.getItem("TOKEN")) {
        headers = { headers: { Authorization: localStorage.getItem("TOKEN") } };
      }
      //
      
    //   var response = await axios.delete(`${serverURL}/${url}`, body,headers);
    //   var result = await response.data;

    var response = await axios.request({
        method: "delete",
        url: `${serverURL}/${url}`,
        headers: headers.headers, // Headers अलग से एक्सट्रैक्ट किए गए हैं
        data: body, // DELETE के लिए body यहाँ पास करें
      });

      var result = await response.data;
      
  
      return result;
    } catch (e) {
      console.log("ereeeeeeeeeeeeeeeeeeeeeee:",e)
  
      // jab token expire ho jayega tab ye call hoga. //
      if(e.response && e.response.status == 401)
      {
      //   localStorage.clear();
      //   window.location.replace("/admin_login");
      }
      // --------------------------------------------//
    }
  };
  
export { serverURL, getData, postData,deleteData };
