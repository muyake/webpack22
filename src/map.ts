import EventEmitter from './util/event_emitter';
import './map.scss';

export default class Map extends EventEmitter{
    constructor(){
        super();
    }
    public getCenter(){
        return 22;
    }
    private _getZoom(){
        return 33
    }
}
