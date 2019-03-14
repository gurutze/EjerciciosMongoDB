/*
blank 
db.orders.insert(
{
    order_id: ObjectId
	name:
	address:
	total:
	prodname:
	quantity:
	price:
	date:
})
	
*/
db.orders.find({ name: "" })
db.orders.find({ name: "" }).sort( { date: -1 } )
db.orders.find({ name: "" }).sort( { total: 1 } )
db.orders.find({ name: "" }).count()