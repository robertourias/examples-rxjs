const { Observable } = require('rxjs');

const obs = Observable.create(subscriber => {
    subscriber.next('Rxjs');
    subscriber.next('é');
    subscriber.next('muito');
    if(Math.random() > 0.5) {
        subscriber.next('legal');
        subscriber.complete();
    }
    else {
        throw "Eita"
    }    
})

obs.subscribe(
    texto => console.log(texto),
    err => console.log(err),
    () => console.log('Fim')
)