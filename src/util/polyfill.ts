import PromisePolyfill from 'promise-polyfill';

const global: any = (function(){
    if(self){
        return self;
    }
    if(window){
        return window;
    }
})();

if(!global.Promise){
    global.Promise = PromisePolyfill;
}