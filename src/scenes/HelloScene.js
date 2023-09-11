const {Scenes, Markup} = require("telegraf");

class HelloScene {
    sceneName = "hello"
    scene = new Scenes.BaseScene(this.sceneName);

    getScene() {
        this.scene.enter(async ctx => {
            await ctx.replyWithPhoto(
                {url: 'https://avatars.githubusercontent.com/u/6049160'},
                {
                    caption: "Начало 1 части...",
                    parse_mode: 'Markdown',

                    ...Markup.inlineKeyboard([
                        [Markup.button.url("Продолжение 1 части текста", "https://github.com/Reeshuxd/AccGenBot")],
                        [Markup.button.callback("следующая часть", "partTwo")]
                    ])
                }
            );
        });

        this.scene.action("partTwo", async ctx => {
            await ctx.editMessageCaption("Начало 1 части...");
            await ctx.editMessageReplyMarkup({
                inline_keyboard: [
                        [Markup.button.url("Продолжение 1 части текста", "https://github.com/Reeshuxd/AccGenBot")],
                    ]
                }
            );

            await ctx.replyWithPhoto(
                {url: 'https://avatars.githubusercontent.com/u/6049160'},
                {
                    caption: "Начало 2 части",
                    parse_mode: 'Markdown',

                    ...Markup.inlineKeyboard([
                        [Markup.button.url("Продолжение 2 части текста", "https://github.com/Reeshuxd/AccGenBot")],
                        [Markup.button.callback("следующая часть", "partThree")]
                    ])
                }
            );
        });


        this.scene.action("partThree", async ctx => {
            await ctx.editMessageCaption("Начало 2 части...");
            await ctx.editMessageReplyMarkup({
                    inline_keyboard: [
                        [Markup.button.url("Продолжение 2 части текста", "https://github.com/Reeshuxd/AccGenBot")],
                    ]
                }
            );

            await ctx.replyWithPhoto(
                {url: 'https://avatars.githubusercontent.com/u/6049160'},
                {
                    caption: "Часть 3",
                    parse_mode: 'Markdown',

                    ...Markup.inlineKeyboard([
                        [Markup.button.url("Продолжение 3 части текста", "https://github.com/Reeshuxd/AccGenBot")],
                        [Markup.button.callback("купить", "buy")]
                    ])
                }
            );
        });

        this.scene.action("buy", async ctx => {
            await ctx.reply("Переход к покупке");
            await ctx.scene.leave();
        });

        this.scene.on("message", async ctx => {
            await ctx.reply("Лучше будет нажать на кнопку \"Следующая часть\"..")
            await ctx.scene.reenter();
        });

        return this.scene;
    }
}

module.exports = HelloScene