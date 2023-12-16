export async function saveOrderApi(url,orders) {

            let obj = [];
            let total = 0

            orders.forEach(order => {
                total += order.price;
                obj.push({
                    strCategory: order.strCategory,
                    strCategoryThumb: order.strCategoryThumb,
                    strCategoryDescription: order.strCategoryDescription,
                    price: order.price
                }) 
            });

            obj.push({"total":total})
            
            const response = await fetch(url,{
                method: 'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(obj)
            });

            if(response.ok){
                alert("Se ha realizado el pedido.")
            }else{
                throw new Error('Error al enviar los datos');
            }
        
    }
