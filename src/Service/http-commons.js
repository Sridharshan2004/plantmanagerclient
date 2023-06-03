import axios from "axios";

const instance=axios.create({

     baseURL: 'http://ec2-15-207-249-115.ap-south-1.compute.amazonaws.com:8085/api',
   // baseURL: 'http://mindjobcard.ap-south-1.elasticbeanstalk.com/api',
    

    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    }
});

function getAuthorization () {
    let Author = sessionStorage.getItem('Authorization')
    if (Author === null) return ''
    return Author
}

instance.interceptors.request.use(

    (config) => {
        config.headers.authorization = 'Bearer '+getAuthorization()
        return config
    }
)

export default instance
