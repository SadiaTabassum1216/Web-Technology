from fastapi import FastAPI
from model import Item
app = FastAPI()

@app.get('/')
async def read_root():
    return {'message': 'Hello World'}

@app.get('/{id}')
async def get_int(id: int):
    return {'ID': id}

@app.get('/int/{id}',response_model=int)
async def read_int(id: int):
    return id

@app.get('/bool/',response_model=bool)
async def read_bool():
    return True

@app.get('/item/',response_model=Item)
async def get_item(item: Item):
    return item

@app.post('/item/', response_model=Item)
async def post_item(item: Item):
    return item

@app.put('/item/', response_model=Item)
async def update_item(item: Item):
    return item

@app.delete('/item/', response_model=Item)
async def delete_item(item: Item):
    return item