import asyncio
import websockets

async def server(websocket, path):
    try:
        data = await websocket.recv()
        print("data:", data)
    except websockets.exceptions.ConnectionClosedError:
        # print("Connection Closed")
        pass

start_server = websockets.serve(server, "localhost", 7777)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
