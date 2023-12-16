export async function findFoodsApi(url,elem,callback) {
    const response = await fetch(url);
    const newFoods = []

    if (response.ok) {
        const data = await response.json();
        if (data) {
            data.forEach(food => {
                if (food.strCategory.toLowerCase().indexOf(elem) != -1) {
                    newFoods.push(food);
                }
            });
            if (newFoods.length > 0) {
                callback(newFoods);
            }else{
                callback(data);
            }
        }else{
            console.log("No Data");
        }
    }else{
        alert ("Error: " + response.statusText);
    }
}