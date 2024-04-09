import React from 'react'

const CartItem = ({item}) => {
    return (
        <>
            <div className="seccionComprasRow row mb-4">
                <div className="col-md-2 col-lg-2 col-xl-2">
                    <img src={item.cover_image} className="img-fluid rounded-3" alt={item.title} />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                    <h6 className="text-muted">{item.format}</h6>
                    <h6 className="text-black mb-0">{item.title}</h6>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <input min="0" name="quantity" value="x" type="number"
                        className="form-control form-control-sm" />
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h6 className="mb-0">COP${item.price}</h6>
                </div>
                <button id="x" className="col-md-1 col-lg-1 col-xl-1 text-end elimina-item text-muted"><i className="fas fa-times"></i></button>
                <hr className="my-4" />
            </div>
        </>
    )
}

export default CartItem