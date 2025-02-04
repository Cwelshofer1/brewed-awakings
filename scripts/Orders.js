import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findproduct = (order) => {
    for(const product of products){
    
        if (product.id === order.productId) {
            return product.name
        }
    
}

   
}

// Function whose responsibility is to find the employee for an order
const findemployee = (order) => {
    
   

    for (const employee of employees){
       if (employee.id === order.employeeId) {
           
            return employee.name
             }
            }

        
        
    
}

export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const order of orders) {
        const employeeName = findemployee(order)
        const productName = findproduct(order)

        html += `<li>${productName} was sold by ${employeeName} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}

