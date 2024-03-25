import EventEmitter from '_util/event_emitter';
import './map.scss';

export default class Map extends EventEmitter{
    constructor(){
        super();
    }
    public getCenter(){
        // @ts-ignore
        if(!__DEV__){
            console.log("我是dev");
        }
        return 22;
    }
    private _getZoom(){
        return 33
    }
}
