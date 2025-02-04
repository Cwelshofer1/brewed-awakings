import { Employees } from "./Employees.js"
import { Orders } from "./Orders.js"
import { Products } from "./Products.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column-employees">
        <h2>Employees</h2>
        ${Employees()}
    </section>
    <section class="detail--column-products">
        <h2>Products</h2>
        ${Products()}
    </section>
</article>
<h2>Orders</h2>
        ${Orders()}
<article class="orders">
    
    
</article>
`

mainContainer.innerHTML = applicationHTML

