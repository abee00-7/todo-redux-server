const jsonServer= require('json-server')
const TodoServer=jsonServer.create()
const middleware=jsonServer.defaults()
const route=jsonServer.router('db.json')
const PORT=3001 || process.env.PORT
TodoServer.use(middleware)
TodoServer.use(route)
TodoServer.listen(PORT,()=>{
    console.log(`todo app server at ${PORT} and waiting for client request`);
})