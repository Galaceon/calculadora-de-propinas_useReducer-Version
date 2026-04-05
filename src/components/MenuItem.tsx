import type { MenuItem } from "../types"
import type { OrderActions } from "../reducers/order-reducer"
import type { ActionDispatch } from "react"

type MenuItemProps = {
  item: MenuItem
  dispatch: ActionDispatch<[action: OrderActions]>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {

    
  return (
    <button 
      className="border-3 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 cursor-pointer"
      onClick={() => dispatch({type: 'add-item', payload: {item}})}
    >
      <p>{item.name}</p>
      <p className="font-black">{item.price}</p>
    </button>
  )
}
