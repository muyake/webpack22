import EventEmitter from './util/event_emitter';

export default class Map extends EventEmitter{
    constructor(){
        super();
    }
    getCenter(){
        return 22;
    }
}
