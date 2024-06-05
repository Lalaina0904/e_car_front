const request=async (url:string,method:string="GET",body:any=null,token:string="")=>{
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
    if(token.length>-1){
       headers['Authorization'] = `Bearer ${token}`;
    }

    const option={
        method:method,
        body:body?JSON.stringify(body):null,
        headers:headers
        
    }
    const response = await fetch(url, option);
    const data = await response.json();
        
    
return data
    
}
export const get=(url:string,token:string="")=>{
    return request(url,"GET",null,token)
}
export const post=(url:string,body:any,token:string="")=>{
    return request(url,"POST",body,token)
}
export const put=(url:string,body:any,token:string="")=>{
    return request(url,"PUT",body,token)
}
export const deleteRequest=(url:string,token:string="")=>{
    return request(url,"DELETE",null,token)
}