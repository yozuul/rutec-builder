import{u as e}from"./cookie.57d8faf2.js";import"./entry.651c9841.js";const o={dev:"http://localhost:4444",prod:"/api"},n={get baseURL(){return o.prod},get userToken(){return e("accessToken").value},get authHeader(){return this.userToken?{authorization:"Bearer "+this.userToken}:{authorization:"NoToken"}}};export{n as a};
