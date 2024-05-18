// import {createServer} from 'node:http'

// const server = createServer ((resquest, response)=>{

//     response.write('oi')

//     return response.end()

// })

// server.listen(8080)

import { fastify } from "fastify"; 
import { DatabaseMemory } from "./database-memoriy.js";

const server = fastify()

const database = new DatabaseMemory()

//get  = buscar informação
//post = criar o registro
//put = alterar
//delete = deletar
//patch = alterar algo especifíco
server.get('/inicio', () => {
    const videos = database.list()

    console.log(videos)

    return videos
})
server.post('/cadastro', (request, reply) => {
    const {title, description, duration} = request.body
    database.create({
        title,
        description,
        duration
    })

   return reply.status(201).send()
})
server.put('/login/:id', (request, reply) => {
    const videoID = request.params.id
    const {title, description, duration} = request.body
    const video = database.update(videoID, {

        title,
        description,
        duration 
    })
    return reply.status(204).send()
})
server.delete('/login/:id', (request, reply) => {
    const videoID = request.params.id
    database.delete(videoID)
    return reply.status(204).send()
})
server.listen({
    port: 8080,
})