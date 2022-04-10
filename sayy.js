# v13-slash-say
"ArviS - V13 Slash Say"

const { ApplicationCommandType, ApplicationCommandOptionType, ChatInputCommandInteraction, Client, EmbedBuilder} = require('discord.js');

module.exports = {
    type: ApplicationCommandType.ChatInput,
    name: 'say',
    description: 'Üye Sayacı',
    options: [],
    /**
     * Run a chat input command interaction.
     * @param {ChatInputCommandInteraction} interaction The interaction.
     * @param {Client} client The client of the bot.
     */
    async run(interaction, client) {

  const voiceChannels = interaction.guild.channels.cache.filter(c => c.type === "voice");
  let count = 0;

  for (const [id, voiceChannel] of voiceChannels)
  count += voiceChannel.members.size;
  const embed = new EmbedBuilder()
  .setAuthor({ name: interaction.guild.name, iconURL: interaction.user.displayAvatarURL() })
  .setDescription(
    `**Sunucuda Toplam \`${interaction.guild.memberCount}\` Kişi Bulunmakta.**`)
 

    .setThumbnail(interaction.guild.iconURL())
    .setFooter({ text: client.user.username, iconURL: client.user.avatarURL() })
    .setTimestamp();
   
    interaction.reply({ embeds: [embed] })
  }
};
