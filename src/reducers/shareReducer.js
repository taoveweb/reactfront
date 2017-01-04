let huhaname=localStorage.getItem('huhaname');
let expire=localStorage.getItem('huhaExpire');
let userid=false; //5bab6b5523a14ec09d95a8ab059a4e40
if(huhaname && huhaname!='undefined'){
  if(expire && (new Date().getTime() - expire)/(1000*60)>30){
    localStorage.setItem('huhaname','');
  }else{
    userid=huhaname;
  }
}
const initialState = {
  isFetchingHomeList: false,
  //userid:false,
  userid:userid,
  loadNum: 4,
  isBinding:0,
  appId:'',
  spegroupparamLoaded:false,
  spegroupparam:{},
  payparma:{},
  data:{},
};


export default function (state = initialState, action) {
  //console.log(state,action);
  switch (action.type) {
    case 'initPage':{
      return Object.assign({},state, {data:action.data},{isFetchingHomeList:true});
    }

    case 'spegroupparam':{
      return Object.assign({},state, {spegroupparam:action.spegroupparam},{spegroupparamLoaded:true});
    }

    case 'initpay':{
      return Object.assign({},state, {payparma:action.payparma});
    }

    case 'loadMore':
    {
      return Object.assign({},state, {loadNum:action.loadNum});
    }

    case 'loginandregist':
    {
      return {...state, userid: action.userid,isBinding: action.isBinding,appId: action.appId,};
    }


  }

  return state;
}

