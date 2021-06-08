import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL} from '../actions/action';

export default function reducer(state, action){
    switch (action.type) {
        case ADD_TO_CART:{
            var flag=0;
            let temp =[]
            let temptotal = state.total;
            var obj={id: action.payload.id,
                    name: action.payload.name, 
                    price: action.payload.price,
                    photo: action.payload.photo,
                    qty: 1
                }
            if(state.cart.length>0){
                temp=state.cart.map(item=>{
                    if(action.payload.id===item.id){
                        item = {...item, qty: item.qty+1}
                        console.log(item.price);
                        flag=1;
                    }
                    return item;
                });
            }

            else{

            console.log(obj);

            temp = [...state.cart, obj];

            }

            
                
            if(flag===0){
                console.log(obj);

                temp = [...state.cart, obj];    
            }
            
            
            
            return ({...state, count:state.count+1, cart: temp, total: state.total+obj.price})
        }
            
        case REMOVE_FROM_CART:
            {var obj = {
                id: action.payload.id,
                price: action.payload.price
            }
            let temp=[];
            if(action.payload.qty===1){
                temp=state.cart.filter(item => item.id !== action.payload.id)
            }
            else{
                temp = state.cart.map(item => {
                    if(item.id===action.payload.id){
                        item = {...item, qty: item.qty-1};
                    }
                    return item;
                })
            }

            

            // if(flag===1){
            //     temp=[...state.cart, temp.filter((item)=>{
            //         if (item.id != obj.id){
            //             return item;
            //         }
            //     })]
            // }
            console.log(temp);
            return ({...state, count:state.count-1, cart: temp, total: state.total-obj.price})
            }
        case REMOVE_ALL:
            let temp=[]
            let temptotal=state.total;
            let tempq=state.count;
            temp=state.cart.filter(item => {
                if(item.id !== action.payload.id){
                    return item;
                }
                else{

                    temptotal-=(item.qty*item.price)
                    tempq-=item.qty;
                }
            })
            return ({...state, count:tempq, cart: temp, total: temptotal})
            break;
    
        default:
            return state;
            break;
    }
}