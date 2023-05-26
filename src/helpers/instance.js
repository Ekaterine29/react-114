import axios from "axios";
import decode from "jwt-decode";


export const  axiosInstance=axios.create({
    baseURL: 'http://localhost:3001',
  
});

axiosInstance.interceptors.request.use(async(request)=>{


    const token=localStorage.getItem('token');
    const refreshToken=localStorage.getItem('refreshToken');
    if (!token && !refreshToken) return request;

    // set authorization headers
    request.headers.Authorization=`Bearer ${token}`;

    // tokenis vadis shemowmeba
    const expirationDate=decode(token).exp;
    const isTokenExpired=expirationDate * 1000 <new Date().getTime();

    // tu tokeni validuria,gaagrdzelos request
    if (!isTokenExpired) return request;

    // tu accordionActionsClasses,e.i tokens vada gauvida
    const {data}=await axios.post('http://localhost:3001/users/refresh',{
        refresh_token:refreshToken,
    });
    const {token:newAccessToken}=data;
    localStorage.setItem('token',newAccessToken);
    request.headers.Authorization=`Bearer ${newAccessToken}`;

    return request;
});