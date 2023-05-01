from fastapi import FastAPI
from databases import Database
from fruit import fruit
from fastapi.middleware.cors import CORSMiddleware

import aiomysql

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

database = Database("mysql+aiomysql://root:password@127.0.0.1:3307/practice")

@app.on_event('startup')
async def database_connect():
    await database.connect()

@app.get("/")
async def root():
    return {"message": "Hello World"}




# Endpoint to insert data into the database
@app.post("/fruits")
async def create_fruit(fruit:fruit):
    query = "INSERT INTO fruits (id,name, price) VALUES (:id, :name, :price)"
    values = {"id":fruit.id,"name": fruit.name, "price": fruit.price}
    await database.execute(query=query, values=values)
    return {"message": "Fruit created successfully"}


# Endpoint to retrieve a list of all fruits from the database
@app.get("/fruits")
async def get_fruits():
    query = "SELECT * FROM fruits"
    rows = await database.fetch_all(query=query)
    fruits = [fruit(id=row[0], name=row[1], price=row[2]) for row in rows]
    return fruits