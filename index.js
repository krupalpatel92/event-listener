import EventListeners from './EventListenerManager';

let targetList = document.querySelectorAll('.target-element');
targetList.forEach((elm) => {
    
    /* Event Callback */
    let registerEventCallback = (event) => { handlerClickEvent(event); }
    let elmEventType = 'click';
    
    /* Confirming is element already registered for click event with same callback method */
    let isElmEventExist = EventListeners.isDuplicate(elm, elmEventType, registerEventCallback);
    
    /* If event not registered with same callback method for this element can register event on it. */
    if(!isElmEventExist){
        elm.addEventListener(elmEventType, registerEventCallback, false);
    }

});

const handlerClickEvent = (event) => {

    const eThis = event.currentTarget; // event.target
    /* Your code here */

}