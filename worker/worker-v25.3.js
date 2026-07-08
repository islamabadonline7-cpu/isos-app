export default {
  async fetch(request) {
    const headers={
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods":"GET, POST, OPTIONS",
      "Access-Control-Allow-Headers":"Content-Type",
      "Content-Type":"application/json"
    };
    if(request.method==="OPTIONS") return new Response(null,{headers});
    if(request.method==="GET"){
      return new Response(JSON.stringify({
        success:true,
        version:"25.3.2",
        build:"002.2",
        module:"Request Validation"
      }),{headers});
    }
    if(request.method!=="POST"){
      return new Response(JSON.stringify({success:false,error:"Method Not Allowed"}),{status:405,headers});
    }
    let body;
    try{body=await request.json();}
    catch{
      return new Response(JSON.stringify({success:false,error:"Invalid JSON body."}),{status:400,headers});
    }
    const title=(body.title||"").trim();
    if(!title){
      return new Response(JSON.stringify({success:false,error:"Title is required."}),{status:400,headers});
    }
    return new Response(JSON.stringify({
      success:true,
      message:"Request validation passed.",
      title,
      meta:{version:"25.3.2",build:"002.2",ai:false}
    }),{headers});
  }
};