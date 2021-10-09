/**
 * We don't want to createa new cart for every new product we add
 * => We just fetch the previous cart and interpret the result of the callback
 */

export class Cart {

    static deleteProduct( products) {
        console.log("Do something here")

        const updatedCart = {...cart};
        const product = updatedCart.products.find(prod => prod._id.toString() === id)
        const qty = product.qty
        updatedCart.products = updatedCart.products.filter(
            prod => prod.id !== id
        )
        //update price and qty
    }

    static addProduct(id, productPrice, callbackFunction){
        //fetch the previous cart from the database
        // ...

        //see if the product exists

        const existingProductIndex = cart.products.findIndex(
            prod => prod._id.toString() = id
        )

        const existingProduct = cart.products[existingProductIndex];
        
        //append the previous values
        if (existingProduct){
            updatedProduct = {...existingProduct};
            //quantity and pirce ++
            cart.products = [...cart.products]
            cart.products[existingProduct] = updatedProduct
            
            callbackFunction([]);
            return(201).json("nice");
        }
    }
}