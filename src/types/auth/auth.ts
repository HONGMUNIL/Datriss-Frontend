
export type SigninRequest ={
    email:string;
    password: string;
}

export type SigninResponse= {
    accessToken: string;
    user:{
        id: number;
        email: string;
    }
}

