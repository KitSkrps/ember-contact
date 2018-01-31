import Component from '@ember/component';
import {inject} from '@ember/service';

export default Component.extend({
    action:'edit',
    contact:null,
    store:inject(),
    router:inject(),
    init(){
       this._super(...arguments)
       if (this.contact === null){
        this.set('action', 'add')
        this.set('contact',{})
       }
        
    },
    actions: {
        saveContact(){
            if (this.get('action')=== 'add'){
                this.get('store').createRecord('contact', this.get('contact')).save().then(()=>{
                    this.get('router').transitionTo('contacts');
                })
            } else{
                this.get('contact').save().then(()=>{
                    this.get('router').transitionTo('contacts');
                })
            }
            
        }
    }
});
