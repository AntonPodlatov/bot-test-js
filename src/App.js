const Bot = require("./bot/Bot");
const HelloScene = require("./scenes/HelloScene");
const StartCommand = require("./commands/StartCommand");

const helloScene = new HelloScene();

const bot = new Bot([helloScene], [new StartCommand(helloScene.sceneName)]);

bot.init();