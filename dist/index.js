import { Handler, Storage } from './modules';
// @ts-ignore
import config from '../config.json' assert { type: 'json' };
const { clusters } = config;

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;


app.get('/',(req,res)=>{
   res.sendFile('./index.html', { root: '.' })
})

app.listen( port ,()=>{
    console.log('ервер запущен, порт: 3000')
});

var now = new Date().toLocaleString();

console.log("Весия ноды:", process.version );
console.log('[Бот - Феня] разработан по заказу сообщества Forsaken World | Rebirth.');
console.log('[Бот - Феня] является собственностю сервера Forsaken World | Rebirth. Все права на "Бот - Феня" принадлежат его правообладателям.');
console.log('[Бот - Феня] Запущен.');
const handlers = await Promise.all(clusters.map((cluster, index) => (new Handler({
    ...cluster,
    index: index + 1
})
    .init())));
const uniqueHandlers = handlers.reduce((handlers, handler) => {
    const instanceIndex = handlers.findIndex(([{ prefix }]) => (prefix === handler.storage.prefix));
    const hasInstance = instanceIndex !== -1;
    const handlerGroupId = handler.cluster.vk.group_id;
    if (!hasInstance) {
        handlers.push([handler.storage, [handlerGroupId]]);
    }
    else {
        handlers[instanceIndex][1].push(handlerGroupId);
    }
    return handlers;
}, []);
uniqueHandlers.forEach(async ([storage, groupIds]) => {
    const keys = await storage.getKeys();
    const outdatedKeys = keys.reduce((keys, key) => {
        if (key.startsWith(Storage.PREFIX) &&
            groupIds.findIndex((id) => key.includes(`-${id}-`)) === -1) {
            keys.push(key);
        }
        return keys;
    }, []);
    await Promise.all(outdatedKeys.map((key) => (storage.set(key))));
});
