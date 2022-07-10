import axios from "axios"
export default {
    addCollection(params){
        const data=JSON.stringify({
            title:params.title,
            catagory:params.catagory,
            userid:params.userid,
            dimention:params.dimention,
            createtime:"2020-5-13"
        })
        return axios({
            method:"POST",
            url:"/collection/collection",
            data:data,
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json',
            'Authorization':'dcd1216e-e333-4665-b2c0-2bf7dc94133b'
        },
       })
    },
    GetCollectionData(){
        return axios({
            method:"GET",
            url:"/collection/collection/list?catagory=陶瓷",
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem("token")
         },
       })
    },
    editCollectionData(params){
        return axios({
            method:"POST",
            url:`/collection/collection/update`,
            data:params,
            headers:{
                'Accept':"application/json",
                'Content-Type':'application/json',
                'Authorization':'dcd1216e-e333-4665-b2c0-2bf7dc94133b'
             },
        })
    },
    delCollectionData(params){
        return axios({
            method:"POST",
            url:`/collection/collection/delete/${params.id}`,
            headers:{
                'Accept':"application/json",
                'Content-Type':'application/json',
                'Authorization':'1c00cf6b-8951-475d-85f0-c41a903775aa'
             },
        })
    },
    ApprisalCollection(params){
        const data=JSON.stringify({
            collectionid:params.collectionid,
            apprisaluserid:"1",
            age:params.age,
            comment:params.comment,
            qualit:params.quality,
            material:params.material,
            value1:params.value1,
            value2:params.value2,
            status:"valid"
        })
        return axios({
            method:"POST",
            url:"/collection/apprisal",
            data:data,
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json',
            'Authorization':'dcd1216e-e333-4665-b2c0-2bf7dc94133b'
         },
       })
    },
    addInBlockChain(params){
        return axios({
            method:"POST",
            url:`/collection/collection/chain/${params}`,
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json',
            'Authorization':'dcd1216e-e333-4665-b2c0-2bf7dc94133b'
         },
       })
    },
    rsaApprisalCollection(params){
        const data=JSON.stringify({
            collectionid:params.collectionid,
            apprisaluserid:"1",
            age:params.age,
            comment:params.comment,
            qualit:params.quality,
            material:params.material,
            value1:params.value1,
            value2:params.value2,
            status:"valid"
        })
        return axios({
            method:"POST",
            url:`/collection/apprisal/commit/${params.publicKey}`,
            data:data,
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json',
            'Authorization':'dcd1216e-e333-4665-b2c0-2bf7dc94133b'
         },
       })
    },
    rsaApprisalCollectionConfirm(data){
        return axios({
            method:"POST",
            url:"/collection/apprisal/confirm",
            data:JSON.stringify(data),
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json',
            'Authorization':'dcd1216e-e333-4665-b2c0-2bf7dc94133b'
         },
       })
    },
    groundingApply(params){
        return axios({
            method:"POST",
            url:`/mall/commodity/apply/${params.id}`,
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json',
            'Authorization':'dcd1216e-e333-4665-b2c0-2bf7dc94133b'
         },
       })
    },
    groundingAccept(params){
        return axios({
            method:"POST",
            url:`/mall/commodity/confirm/${params.id}`,
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json',
            'Authorization':'dcd1216e-e333-4665-b2c0-2bf7dc94133b'
         },
       })
    },
    musemApply(params){
        const data=JSON.stringify({
            id:params.title,
            content:params.catagory,
        })
        return axios({
            method:"POST",
            url:"/collection/museum/apply",
            data:data,
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json',
            'Authorization':'dcd1216e-e333-4665-b2c0-2bf7dc94133b'
         },
       })
    },
    musemAccept(params){
        const data=JSON.stringify({
            id:params.title,
            content:params.catagory,
            result:true
        })
        return axios({
            method:"POST",
            url:"/collection/museum/audit",
            data:data,
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json',
            'Authorization':'dcd1216e-e333-4665-b2c0-2bf7dc94133b'
         },
       })
    },
    musemCancel(params){
        const data=JSON.stringify({
            id:params.title,
            content:params.catagory,
        })
        return axios({
            method:"POST",
            url:"/collection/museum/cancel",
            data:data,
            headers:{
            'Accept':"application/json",
            'Content-Type':'application/json',
            'Authorization':'dcd1216e-e333-4665-b2c0-2bf7dc94133b'
         },
       })
    },
}
