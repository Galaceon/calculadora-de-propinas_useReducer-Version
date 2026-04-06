import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import type { ActionDispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"

type OrderContestProps = {
    order: OrderItem[],
    dispatch: ActionDispatch<[action: OrderActions]>
}

export default function OrderContest({order, dispatch} : OrderContestProps) {
  return (
    <div>
        <h2 className='font-bold text-4xl'>Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.map( item => (
                <div key={item.id} className="flex justify-between hover:bg-teal-100 items-center px-3 py-2 border-t border-gray-300 last-of-type:border-b">
                    <div>
                        <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                        <p className="font-bold">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                    </div>

                    <button onClick={() => dispatch({type: "remove-item", payload: {id: item.id}})} className="bg-red-600 h-8 w-8 rounded-full text-white font-black cursor-pointer">x</button>
                </div>
            ))}
        </div>
    </div>
  )
}
