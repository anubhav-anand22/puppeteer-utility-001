module.exports = {
  whatsAppContactListSelector: `div[aria-label="Chat list"]`,
  whatsAppItemNameDivSelector:
    "div.lhggkp7q:nth-child(?) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)",
  whatsAppInputSelector: "p.selectable-text",
  whatsAppSendBtnSelector: "button.tvf2evcx",
  whatsAppItemTitleSelector: (title) => {
    return `span[title="${title}"]`;
  },
};