import{u as e}from"./cookie.24776128.js";import"./entry.95ec977b.js";const o={dev:"http://localhost:4444",prod:"/api"},n={get baseURL(){return o.prod},get userToken(){return e("accessToken").value},get authHeader(){return this.userToken?{authorization:"Bearer "+this.userToken}:{authorization:"NoToken"}}};export{n as a};
