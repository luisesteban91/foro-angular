export class Topic{ 
    constructor(
        public _id:string,
        public title:string,
        public content:string,
        public code:string,
        public lan:string,
        public date:string,
        public user:any,
        public comments:any
    ){ //any meter lo que sea
        
    }
}