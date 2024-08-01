module.exports = {
  TOKEN: "",
  ownerID: ["1004206704994566164", "1229076807379194041"], 
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  musicardTheme:"themes16", //Goes from themes1 to themes19
  activityName: "YuongzMin", // This is bot status Write Anything here 
  activityType: "WATCHING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/mVUMG7tdRa",
  CheckmarkIcon: "https://cdn.discordapp.com/attachments/1230824451990622299/1230836684774576168/7762-verified-blue.gif",
  MusicIcon:"https://media.discordapp.net/attachments/1230824451990622299/1236664581364125787/music-play.gif",
  embedTimeout: 5,  // Timeout before the button interaction embeds are deleted ( Default - 5 seconds)
  errorLog: "", 

   // Lavalink Server Details

  nodes: [
    {
        name: "Node #1",
        host: "lava-v3.ajieblogs.eu.org",
        port: 80,
        password: "https://dsc.gg/ajidevserver",
        reconnectTimeout: 5000,
        reconnectTries: Infinity,
        secure: false
    },
 ]
