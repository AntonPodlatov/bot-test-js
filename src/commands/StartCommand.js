class StartCommand {
    sceneName;

    constructor(sceneName) {
        this.sceneName = sceneName;
    }

    add(bot) {
        bot.start(async ctx => await ctx.scene.enter(this.sceneName));
    }

}

module.exports = StartCommand