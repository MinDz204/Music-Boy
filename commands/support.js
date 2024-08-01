const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://github.com/MinDz204/Music-Boy";
      const githubLink = "https://github.com/MinDz204";
      const replitLink = "https://github.com/MinDz204";
      const youtubeLink = "https://www.youtube.com/@YuongzMin";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&', 
              url: 'https://discord.gg/xQF9f9yUEM'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1268071737187106819/1268073651308331112/standard.gif?ex=66ab191e&is=66a9c79e&hm=3353cb64389c62e1856114e4e4e3e620c9dda13fa06310c0dfd15bfa22ca758c&')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};
