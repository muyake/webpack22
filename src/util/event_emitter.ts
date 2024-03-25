type IListener = (data: any) => any;

export default class EventEmitter{
    private listenerObj:{
        [key: string]: IListener[]
    } ={};
    constructor(){

    }
    public on(event: string,callback: IListener){
        if(this.listenerObj[event]){
            this.listenerObj[event].push(callback);
        }else{
            this.listenerObj[event] = [callback];
        }

    }
    public off(event: string,callback: IListener){
        if(this.listenerObj[event]){
            const index = this.listenerObj[event].indexOf(callback);
            if(index>=0){
                this.listenerObj[event].splice(index, 1);
            }
        }
    }
    public emit(event: string,data: any){
        this.listenerObj[event].forEach((item)=>{
            item(data);
        });
    }
}