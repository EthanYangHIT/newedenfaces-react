/**
 * Created by yangyusenhit on 2016/4/1.
 */
import alt from '../alt';
import {assign} from 'underscore'; //用于copy属性

class NavbarActions {
    constructor() {
        //generateActions 其实是用alt注册action ,相当于 updateOnlineUsers(payload){ dispatch(payload); }
        this.generateActions(
            'updateOnlineUsers',
            'updateAjaxAnimation',
            'updateSearchQuery',
            'getCharacterCountSuccess',
            'getCharacterCountFail',
            'findCharacterFail'
        );
    }
    //payload 跟data其实无本质区别,只用于承载 数据流
    findCharacter(payload) {
        $.ajax({
                url: '/api/characters/search',
                data: {name: payload.searchQuery}
            })
            .done((data)=> {
                assign(payload, data);  //相当于ES6中的Object.assign(target,...sources) 将data中的可枚举属性copy给目标对象，然后返回新的target
                this.actions.findCharacterSuccess(payload);
            })
            .fail(()=> {
                this.actions.findCharacterFail(payload);
            });
    }

    getCharacterCount(payload){
        $.ajax({
            url:'/api/characters/count'})
            .done((data)=>{
                assign(payload,data)
                this.actions.getCharacterCountSuccess(payload)
            })
            .fail((jqXhr)=>{
                this.actions.getCharacterCountFail(jqXhr)
            });
    }
}

export default alt.createActions(NavbarActions);