const {Telegraf, session, Scenes} = require("telegraf");
const ConfigService = require("../config/ConfigService");

class Bot {
    bot;
    commandsArray = [];
    scenesArray = [];


    constructor(scenesArray, commandsArray) {
        this.bot = new Telegraf(new ConfigService().get("TOKEN"));

        this.commandsArray = commandsArray;
        this.scenesArray = scenesArray;
    }

    init() {
        this.bot.use(session());

        const stg = new Scenes.Stage(this.scenesArray.map(scene => scene.getScene())).middleware();
        this.bot.use(stg);

        this.commandsArray.forEach(command => command.add(this.bot));

        this.bot.use(Telegraf.log());

        this.bot.launch();
    }
}

module.exports = Bot