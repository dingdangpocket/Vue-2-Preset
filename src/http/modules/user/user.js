import axios from "axios"
export default {
    login(data){
        return axios({
            method:"POST",
            url:"/auth/login",
            data:JSON.stringify(data),
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json'},
       })
    },
    register(data){
        return axios({
            method:"POST",
            url:"/auth/user/regist",
            data:JSON.stringify(data),
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json'},
       })
    },
    getRoleMenu(){
        return axios({
            method:"GET",
            url:"/auth/menu/MenuTreeSelectByRole",
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json'},
       })
    }
}